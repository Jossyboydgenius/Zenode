import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trophy, Star, Clock, Users, Target, Award, Code, Flame, Figma, Github } from 'lucide-react';
import { useAccount } from '@particle-network/connectkit';
import { Challenge, challengeService, ChallengeType } from '@/lib/models/challenges';

interface ChallengeDialogProps {
  challenge: Challenge | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onStartChallenge?: () => void;
}

export function ChallengeDialog({ 
  challenge, 
  isOpen, 
  onOpenChange, 
  onStartChallenge 
}: ChallengeDialogProps) {
  const [submissionUrl, setSubmissionUrl] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { address } = useAccount();
  
  if (!challenge) return null;
  
  const timeLeft = challenge.deadlineTimestamp > Date.now() 
    ? formatTimeLeft(challenge.deadlineTimestamp - Date.now())
    : 'Expired';
  
  const handleJoinChallenge = async () => {
    if (!address) {
      alert('Please connect your wallet first');
      return;
    }
    
    setIsJoining(true);
    try {
      await challengeService.joinChallenge(challenge.id, address);
      
      // Handle different challenge types
      if (challenge.type === 'code' && onStartChallenge) {
        onStartChallenge();
      }
    } catch (error) {
      console.error('Error joining challenge:', error);
      alert('Failed to join challenge');
    } finally {
      setIsJoining(false);
    }
  };
  
  const handleSubmitChallenge = async () => {
    if (!address) {
      alert('Please connect your wallet first');
      return;
    }
    
    if (challenge.type === 'design' && !submissionUrl) {
      alert('Please provide a submission URL');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await challengeService.submitChallenge(
        challenge.id, 
        address, 
        challenge.type === 'design' ? submissionUrl : undefined
      );
      
      onOpenChange(false);
      alert('Challenge submitted successfully!');
    } catch (error) {
      console.error('Error submitting challenge:', error);
      alert('Failed to submit challenge');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getChallengeIcon = (type: ChallengeType) => {
    switch (type) {
      case 'code':
        return <Code className="w-5 h-5" />;
      case 'design':
        return <Figma className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      default:
        return <Trophy className="w-5 h-5" />;
    }
  };
  
  const isParticipant = address && challenge.participants[address];
  const hasSubmitted = isParticipant && challenge.participants[address].status === 'submitted';
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border border-green-500/20 text-white scale-90">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <div className="p-1 bg-green-500/20 rounded">
              {getChallengeIcon(challenge.type)}
            </div>
            {challenge.name}
            <span className={`px-2 py-0.5 text-xs rounded-full ${
              challenge.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
              challenge.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {challenge.difficulty}
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {challenge.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="glass-effect p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">XP Reward</span>
            </div>
            <p className="text-xl font-semibold text-white">{challenge.xp} XP</p>
          </div>
          
          {challenge.reward && (
            <div className="glass-effect p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Token Reward</span>
              </div>
              <p className="text-xl font-semibold text-white">{challenge.reward}</p>
            </div>
          )}
          
          <div className="glass-effect p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Time Remaining</span>
            </div>
            <p className="text-xl font-semibold text-white">{timeLeft}</p>
          </div>
          
          <div className="glass-effect p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Category</span>
            </div>
            <p className="text-xl font-semibold text-white">{challenge.category}</p>
          </div>
        </div>
        
        <div className="glass-effect p-4 rounded-xl my-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-400">Creator</span>
          </div>
          <p className="text-sm font-mono text-white truncate">{challenge.createdBy}</p>
        </div>
        
        {/* Challenge-specific content */}
        {challenge.type === 'github' && challenge.repoUrl && (
          <div className="glass-effect p-4 rounded-xl my-4">
            <div className="flex items-center gap-2 mb-2">
              <Github className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Repository</span>
            </div>
            <a 
              href={challenge.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-green-400 underline truncate block"
            >
              {challenge.repoUrl}
            </a>
            
            {challenge.requiredSkills && challenge.requiredSkills.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-400 mb-1">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.requiredSkills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {challenge.type === 'design' && challenge.designCriteria && (
          <div className="glass-effect p-4 rounded-xl my-4">
            <div className="flex items-center gap-2 mb-2">
              <Figma className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Design Criteria</span>
            </div>
            <ul className="text-sm text-white space-y-1 pl-5 list-disc">
              {challenge.designCriteria.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>
            
            {/* Submission URL input for design challenges */}
            {isParticipant && !hasSubmitted && (
              <div className="mt-4">
                <label className="text-sm text-gray-400 block mb-1">Submission URL (Figma, Dribbble, etc.)</label>
                <input
                  type="url"
                  value={submissionUrl}
                  onChange={(e) => setSubmissionUrl(e.target.value)}
                  placeholder="https://www.figma.com/file/..."
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white text-sm"
                />
              </div>
            )}
          </div>
        )}
        
        <div className="mt-6 flex justify-center">
          {!isParticipant ? (
            <button 
              onClick={handleJoinChallenge}
              disabled={isJoining}
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Flame className="w-5 h-5" />
              {isJoining ? 'Joining...' : 'Join Challenge'}
            </button>
          ) : !hasSubmitted ? (
            <button 
              onClick={challenge.type === 'code' && onStartChallenge ? onStartChallenge : handleSubmitChallenge}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
            >
              {getChallengeIcon(challenge.type)}
              {isSubmitting ? 'Submitting...' : challenge.type === 'code' ? 'Start Coding' : 'Submit Challenge'}
            </button>
          ) : (
            <div className="text-green-400 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Challenge Submitted!
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Helper function to format time left
function formatTimeLeft(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
}









// import React from 'react';
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Trophy, Star, Clock, Users, Target, Award, Code, Flame } from 'lucide-react';

// interface Challenge {
//   id: string;
//   name: string;
//   description: string;
//   difficulty: string;
//   xp: number;
//   participants: { image: string; fallback: string }[];
//   timeLeft: string;
//   completions: number;
//   creator: string;
//   score: number;
//   category: string;
//   reward?: string;
// }

// interface ChallengeDialogProps {
//   challenge: Challenge | null;
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
//   onStartChallenge: () => void;
// }

// export function ChallengeDialog({ 
//   challenge, 
//   isOpen, 
//   onOpenChange, 
//   onStartChallenge 
// }: ChallengeDialogProps) {
//   if (!challenge) return null;
  
//   return (
//     <Dialog open={isOpen} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[600px] bg-black border border-green-500/20 text-white">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold flex items-center gap-2">
//             {challenge.name}
//             <span className={`px-2 py-0.5 text-xs rounded-full ${
//               challenge.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
//               challenge.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
//               'bg-green-500/20 text-green-400'
//             }`}>
//               {challenge.difficulty}
//             </span>
//           </DialogTitle>
//           <DialogDescription className="text-gray-400">
//             {challenge.description}
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="grid grid-cols-2 gap-4 my-4">
//           <div className="glass-effect p-4 rounded-xl">
//             <div className="flex items-center gap-2 mb-2">
//               <Trophy className="w-4 h-4 text-green-400" />
//               <span className="text-sm text-gray-400">XP Reward</span>
//             </div>
//             <p className="text-xl font-semibold text-white">{challenge.score} XP</p>
//           </div>
          
//           <div className="glass-effect p-4 rounded-xl">
//             <div className="flex items-center gap-2 mb-2">
//               <Award className="w-4 h-4 text-green-400" />
//               <span className="text-sm text-gray-400">Token Reward</span>
//             </div>
//             <p className="text-xl font-semibold text-white">{challenge.reward}</p>
//           </div>
          
//           <div className="glass-effect p-4 rounded-xl">
//             <div className="flex items-center gap-2 mb-2">
//               <Clock className="w-4 h-4 text-green-400" />
//               <span className="text-sm text-gray-400">Time Remaining</span>
//             </div>
//             <p className="text-xl font-semibold text-white">{challenge.timeLeft}</p>
//           </div>
          
//           <div className="glass-effect p-4 rounded-xl">
//             <div className="flex items-center gap-2 mb-2">
//               <Target className="w-4 h-4 text-green-400" />
//               <span className="text-sm text-gray-400">Category</span>
//             </div>
//             <p className="text-xl font-semibold text-white">{challenge.category}</p>
//           </div>
//         </div>
        
//         <div className="glass-effect p-4 rounded-xl my-4">
//           <div className="flex items-center gap-2 mb-2">
//             <Users className="w-4 h-4 text-green-400" />
//             <span className="text-sm text-gray-400">Creator</span>
//           </div>
//           <p className="text-sm font-mono text-white truncate">{challenge.creator}</p>
//         </div>
        
//         <div className="mt-6 flex justify-center">
//           <button 
//             onClick={onStartChallenge}
//             className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
//           >
//             <Flame className="w-5 h-5" />
//             Start Challenge
//           </button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }