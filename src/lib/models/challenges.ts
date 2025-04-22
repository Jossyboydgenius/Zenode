import { collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  Timestamp,
  serverTimestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { db } from '../firebase.config';

export class ChallengeService {
  private challengesCollection = collection(db, 'challenges');
  
  // Create a new challenge
  async createChallenge(challenge: Omit<Challenge, 'id' | 'createdAt' | 'participants' | 'completions'>): Promise<string> {
    // Clean the data by replacing undefined with empty strings or arrays
    const cleanData = Object.entries(challenge).reduce((acc, [key, value]) => {
      // Replace undefined values with appropriate empty values
      if (value === undefined) {
        if (key === 'designCriteria' || key === 'requiredSkills') {
          acc[key] = [];
        } else {
          acc[key] = '';
        }
      } else {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);
    
    // Create a slug-based ID from the name
    const slugId = challenge.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') 
      + '-' 
      + nanoid(4);
    
    const newChallenge = {
      ...cleanData,
      id: slugId,
      createdAt: Date.now(),
      participants: {},
      completions: 0
    };
    
    const docRef = await addDoc(this.challengesCollection, newChallenge);
    return docRef.id;
  }
  
  // Get challenge by ID
  async getChallenge(id: string): Promise<Challenge | null> {
    const docRef = doc(this.challengesCollection, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as Challenge;
    }
    return null;
  }
  
  // Get all active challenges
  async getActiveChallenges(): Promise<Challenge[]> {
    const now = Date.now();
    const q = query(
      this.challengesCollection,
      where('deadlineTimestamp', '>', now)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Challenge);
  }
  
  // Join a challenge
  async joinChallenge(challengeId: string, userAddress: string): Promise<boolean> {
    const challengeRef = doc(this.challengesCollection, challengeId);
    const challengeSnap = await getDoc(challengeRef);
    
    if (!challengeSnap.exists()) return false;
    
    const challenge = challengeSnap.data() as Challenge;
    
    // Check if user already joined
    if (challenge.participants[userAddress]) return false;
    
    // Add user to participants
    const participants = {
      ...challenge.participants,
      [userAddress]: {
        address: userAddress,
        joinedAt: Date.now(),
        status: 'joined'
      }
    };
    
    await updateDoc(challengeRef, { participants });
    return true;
  }
  
  // Submit a challenge
  async submitChallenge(
    challengeId: string, 
    userAddress: string, 
    submissionUrl?: string
  ): Promise<boolean> {
    const challengeRef = doc(this.challengesCollection, challengeId);
    const challengeSnap = await getDoc(challengeRef);
    
    if (!challengeSnap.exists()) return false;
    
    const challenge = challengeSnap.data() as Challenge;
    
    // Check if user joined
    if (!challenge.participants[userAddress]) return false;
    
    // Update participant status
    const participants = {
      ...challenge.participants,
      [userAddress]: {
        ...challenge.participants[userAddress],
        submissionUrl: submissionUrl || '',
        completedAt: Date.now(),
        status: 'submitted'
      }
    };
    
    // Increment completions
    const completions = challenge.completions + 1;
    
    await updateDoc(challengeRef, { participants, completions });
    return true;
  }
  
  // Get challenges by user
  async getUserChallenges(userAddress: string): Promise<Challenge[]> {
    const challenges = await this.getActiveChallenges();
    return challenges.filter(challenge => 
      challenge.participants[userAddress] !== undefined
    );
  }
  
  // Get challenges created by user
  async getCreatedChallenges(creatorAddress: string): Promise<Challenge[]> {
    const q = query(
      this.challengesCollection,
      where('createdBy', '==', creatorAddress)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Challenge);
  }
}

export const challengeService = new ChallengeService();
export type ChallengeType = 'code' | 'design' | 'github';

export interface ChallengeParticipant {
  address: string;
  joinedAt: number;
  completedAt?: number;
  submissionUrl?: string;
  status: 'joined' | 'submitted' | 'completed';
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  type: ChallengeType;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  reward?: string;
  category: string;
  deadlineTimestamp: number;
  createdAt: number;
  createdBy: string;
  participants: Record<string, ChallengeParticipant>;
  completions: number;
  
  // For code challenges
  codeTemplate?: string;
  solution?: string;
  
  // For design challenges
  designCriteria?: string[];
  
  // For GitHub challenges
  repoUrl?: string;
  requiredSkills?: string[];
}