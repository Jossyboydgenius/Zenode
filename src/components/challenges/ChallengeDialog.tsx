import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trophy, Star, Clock, Users, Target, Award, Code, Flame } from 'lucide-react';

interface Challenge {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  xp: number;
  participants: { image: string; fallback: string }[];
  timeLeft: string;
  completions: number;
  creator: string;
  score: number;
  category: string;
  reward?: string;
}

interface ChallengeDialogProps {
  challenge: Challenge | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onStartChallenge: () => void;
}

export function ChallengeDialog({ 
  challenge, 
  isOpen, 
  onOpenChange, 
  onStartChallenge 
}: ChallengeDialogProps) {
  if (!challenge) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border border-green-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
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
            <p className="text-xl font-semibold text-white">{challenge.score} XP</p>
          </div>
          
          <div className="glass-effect p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Token Reward</span>
            </div>
            <p className="text-xl font-semibold text-white">{challenge.reward}</p>
          </div>
          
          <div className="glass-effect p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Time Remaining</span>
            </div>
            <p className="text-xl font-semibold text-white">{challenge.timeLeft}</p>
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
          <p className="text-sm font-mono text-white truncate">{challenge.creator}</p>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button 
            onClick={onStartChallenge}
            className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Flame className="w-5 h-5" />
            Start Challenge
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}