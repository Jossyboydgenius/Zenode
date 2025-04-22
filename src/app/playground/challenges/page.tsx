'use client'

import React, { useState, useEffect } from 'react'
import { AppSidebar } from "@/components/layout/AppSidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Trophy, Star, ArrowUpRight, Clock, Users, Target, Award, Plus, Code, Github, Figma } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation'
import { ChallengeDialog } from '@/components/challenges/ChallengeDialog'
import { useAccount } from '@particle-network/connectkit'
import { Challenge, challengeService, ChallengeType } from '@/lib/models/challenges'
import { CreateChallengeDialog } from '@/components/challenges/CreateChallengeDialog'
import { DUMMY_CHALLENGES } from '@/lib/challenges-dummy-data'

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [useFallbackData, setUseFallbackData] = useState(false);
  const router = useRouter();
  const { address } = useAccount();

  // Fetch challenges from Firebase
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challengesData = await challengeService.getActiveChallenges();
        
        // If we got valid data from Firebase with at least one challenge, use it
        if (challengesData && challengesData.length > 0) {
          setChallenges(challengesData);
          setUseFallbackData(false);
        } else {
          // Otherwise, fall back to dummy data
          console.log("No challenges found in Firebase, using fallback data");
          setChallenges(DUMMY_CHALLENGES);
          setUseFallbackData(true);
        }
      } catch (error) {
        console.error("Error fetching challenges:", error);
        // On error, use fallback data
        setChallenges(DUMMY_CHALLENGES);
        setUseFallbackData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setIsDialogOpen(true);
  };

  const handleStartChallenge = () => {
    // Close the dialog and redirect to the editor
    setIsDialogOpen(false);
    router.push('/playground/editor');
  };

  const handleCreateChallenge = () => {
    setIsCreateDialogOpen(true);
  };

  const handleChallengeCreated = (newChallenge: Challenge) => {
    // If we're using fallback data, switch to real data mode
    if (useFallbackData) {
      setChallenges([newChallenge]);
      setUseFallbackData(false);
    } else {
      setChallenges([newChallenge, ...challenges]);
    }
    setIsCreateDialogOpen(false);
  };

  // Get challenge icon based on type
  const getChallengeIcon = (type?: string) => {
    switch (type) {
      case 'code':
        return <Code className="w-5 h-5 text-green-400" />;
      case 'design':
        return <Figma className="w-5 h-5 text-green-400" />;
      case 'github':
        return <Github className="w-5 h-5 text-green-400" />;
      default:
        return <Trophy className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/playground">Playground</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Challenges</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Stats Grid */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Active Challenges</p>
                  <h3 className="text-2xl font-bold text-white">{challenges.length}</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <h3 className="text-2xl font-bold text-white">
                    {challenges.reduce((acc, challenge) => 
                      acc + Object.keys(challenge.participants || {}).length, 0
                    )}
                  </h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Completions</p>
                  <h3 className="text-2xl font-bold text-white">
                    {challenges.reduce((acc, challenge) => 
                      acc + (challenge.completions || 0), 0
                    )}
                  </h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total XP</p>
                  <h3 className="text-2xl font-bold text-white">
                    {challenges.reduce((acc, challenge) => 
                      acc + challenge.xp, 0
                    ).toLocaleString()}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges List */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">
                {useFallbackData ? "Sample Challenges" : "Active Challenges"}
              </h2>
              
              {address && (
                <button
                  onClick={handleCreateChallenge}
                  className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create Challenge
                </button>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
              </div>
            ) : challenges.length > 0 ? (
              <div className="space-y-4">
                {useFallbackData && (
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 mb-4">
                    <p>Showing sample challenges. Create a new challenge to get started with your own content.</p>
                  </div>
                )}
                
                {challenges.map((challenge) => (
                  <div 
                    key={challenge.id}
                    className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => handleChallengeClick(challenge)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1 bg-green-500/20 rounded">
                            {getChallengeIcon(challenge.type)}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{challenge.name}</h3>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            challenge.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                            challenge.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{challenge.description}</p>
                        
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>
                              {formatTimeLeft(challenge.deadlineTimestamp - Date.now())} remaining
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>
                              {challenge.completions} completions
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Star className="w-4 h-4" />
                            <span>{challenge.xp} XP</span>
                          </div>
                          {challenge.reward && (
                            <div className="flex items-center gap-1.5 text-gray-400">
                              <Award className="w-4 h-4" />
                              <span>{challenge.reward}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-2 bg-green-500/20 rounded-full">
                        <ArrowUpRight className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center">
                      <div className="flex -space-x-2">
                        {Object.values(challenge.participants || {}).slice(0, 3).map((participant, index) => (
                          <Avatar key={index} className="border-2 border-black w-8 h-8">
                            <AvatarFallback>{participant.address.substring(2, 4).toUpperCase()}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs ml-2">
                        +{Object.keys(challenge.participants || {}).length} participants
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                <Trophy className="w-12 h-12 mb-4 opacity-50" />
                <p>No active challenges found</p>
                {address && (
                  <button
                    onClick={handleCreateChallenge}
                    className="mt-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Create your first challenge
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </SidebarInset>

      {/* Challenge Dialog */}
      <ChallengeDialog 
        challenge={selectedChallenge}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onStartChallenge={handleStartChallenge}
      />
      
      {/* Create Challenge Dialog */}
      <CreateChallengeDialog
        isOpen={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onChallengeCreated={handleChallengeCreated}
      />
    </SidebarProvider>
  );
}

// Helper function to format time left
function formatTimeLeft(milliseconds: number): string {
  if (milliseconds <= 0) return 'Expired';
  
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




// 'use client'

// import React, { useState, useEffect } from 'react'
// import { AppSidebar } from "@/components/layout/AppSidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import { Trophy, Star, ArrowUpRight, Clock, Users, Target, Award, Plus, Code, Github, Figma } from 'lucide-react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useRouter } from 'next/navigation'
// import { ChallengeDialog } from '@/components/challenges/ChallengeDialog'
// import { useAccount } from '@particle-network/connectkit'
// import { Challenge, challengeService } from '@/lib/models/challenges'
// import { CreateChallengeDialog } from '@/components/challenges/CreateChallengeDialog'

// export default function ChallengesPage() {
//   const [challenges, setChallenges] = useState<Challenge[]>([]);
//   const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const { address } = useAccount();

//   // Fetch challenges from Firebase
//   useEffect(() => {
//     const fetchChallenges = async () => {
//       try {
//         const challengesData = await challengeService.getActiveChallenges();
//         setChallenges(challengesData);
//       } catch (error) {
//         console.error("Error fetching challenges:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChallenges();
//   }, []);

//   const handleChallengeClick = (challenge: Challenge) => {
//     setSelectedChallenge(challenge);
//     setIsDialogOpen(true);
//   };

//   const handleStartChallenge = () => {
//     // Close the dialog and redirect to the editor
//     setIsDialogOpen(false);
//     router.push('/playground/editor');
//   };

//   const handleCreateChallenge = () => {
//     setIsCreateDialogOpen(true);
//   };

//   const handleChallengeCreated = (newChallenge: Challenge) => {
//     setChallenges([newChallenge, ...challenges]);
//     setIsCreateDialogOpen(false);
//   };

//   // Get challenge icon based on type
//   const getChallengeIcon = (type: string) => {
//     switch (type) {
//       case 'code':
//         return <Code className="w-5 h-5 text-green-400" />;
//       case 'design':
//         return <Figma className="w-5 h-5 text-green-400" />;
//       case 'github':
//         return <Github className="w-5 h-5 text-green-400" />;
//       default:
//         return <Trophy className="w-5 h-5 text-green-400" />;
//     }
//   };

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2">
//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />
//             <Separator orientation="vertical" className="mr-2 h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/playground">Playground</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Challenges</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           {/* Stats Grid */}
//           <div className="grid auto-rows-min gap-4 md:grid-cols-4">
//             <div className="glass-effect p-6 rounded-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-green-500/20 rounded-lg">
//                   <Target className="w-6 h-6 text-green-400" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Active Challenges</p>
//                   <h3 className="text-2xl font-bold text-white">{challenges.length}</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="glass-effect p-6 rounded-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-green-500/20 rounded-lg">
//                   <Users className="w-6 h-6 text-green-400" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Participants</p>
//                   <h3 className="text-2xl font-bold text-white">
//                     {challenges.reduce((acc, challenge) => 
//                       acc + Object.keys(challenge.participants || {}).length, 0
//                     )}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//             <div className="glass-effect p-6 rounded-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-green-500/20 rounded-lg">
//                   <Trophy className="w-6 h-6 text-green-400" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Completions</p>
//                   <h3 className="text-2xl font-bold text-white">
//                     {challenges.reduce((acc, challenge) => 
//                       acc + (challenge.completions || 0), 0
//                     )}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//             <div className="glass-effect p-6 rounded-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 bg-green-500/20 rounded-lg">
//                   <Award className="w-6 h-6 text-green-400" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Total XP</p>
//                   <h3 className="text-2xl font-bold text-white">
//                     {challenges.reduce((acc, challenge) => 
//                       acc + challenge.xp, 0
//                     ).toLocaleString()}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Challenges List */}
//           <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-white">Active Challenges</h2>
              
//               {address && (
//                 <button
//                   onClick={handleCreateChallenge}
//                   className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//                 >
//                   <Plus className="w-4 h-4" />
//                   Create Challenge
//                 </button>
//               )}
//             </div>

//             {loading ? (
//               <div className="flex justify-center items-center h-48">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
//               </div>
//             ) : challenges.length > 0 ? (
//               <div className="space-y-4">
//                 {challenges.map((challenge) => (
//                   <div 
//                     key={challenge.id}
//                     className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
//                     onClick={() => handleChallengeClick(challenge)}
//                   >
//                     <div className="flex justify-between items-start">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-2">
//                           <div className="p-1 bg-green-500/20 rounded">
//                             {getChallengeIcon(challenge.type)}
//                           </div>
//                           <h3 className="text-lg font-semibold text-white">{challenge.name}</h3>
//                           <span className={`px-2 py-0.5 text-xs rounded-full ${
//                             challenge.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
//                             challenge.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
//                             'bg-green-500/20 text-green-400'
//                           }`}>
//                             {challenge.difficulty}
//                           </span>
//                         </div>
//                         <p className="text-gray-400 text-sm mb-4 line-clamp-2">{challenge.description}</p>
                        
//                         <div className="flex items-center gap-6 text-sm">
//                           <div className="flex items-center gap-1.5 text-gray-400">
//                             <Clock className="w-4 h-4" />
//                             <span>
//                               {formatTimeLeft(challenge.deadlineTimestamp - Date.now())} remaining
//                             </span>
//                           </div>
//                           <div className="flex items-center gap-1.5 text-gray-400">
//                             <Users className="w-4 h-4" />
//                             <span>
//                               {challenge.completions} completions
//                             </span>
//                           </div>
//                           <div className="flex items-center gap-1.5 text-gray-400">
//                             <Star className="w-4 h-4" />
//                             <span>{challenge.xp} XP</span>
//                           </div>
//                           {challenge.reward && (
//                             <div className="flex items-center gap-1.5 text-gray-400">
//                               <Award className="w-4 h-4" />
//                               <span>{challenge.reward}</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="p-2 bg-green-500/20 rounded-full">
//                         <ArrowUpRight className="w-5 h-5 text-green-400" />
//                       </div>
//                     </div>
                    
//                     <div className="mt-4 flex items-center">
//                       <div className="flex -space-x-2">
//                         {Object.values(challenge.participants || {}).slice(0, 3).map((participant, index) => (
//                           <Avatar key={index} className="border-2 border-black w-8 h-8">
//                             <AvatarFallback>{participant.address.substring(2, 4).toUpperCase()}</AvatarFallback>
//                           </Avatar>
//                         ))}
//                       </div>
//                       <span className="text-gray-400 text-xs ml-2">
//                         +{Object.keys(challenge.participants || {}).length} participants
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center h-48 text-gray-400">
//                 <Trophy className="w-12 h-12 mb-4 opacity-50" />
//                 <p>No active challenges found</p>
//                 {address && (
//                   <button
//                     onClick={handleCreateChallenge}
//                     className="mt-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//                   >
//                     <Plus className="w-4 h-4" />
//                     Create your first challenge
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </SidebarInset>

//       {/* Challenge Dialog */}
//       <ChallengeDialog 
//         challenge={selectedChallenge}
//         isOpen={isDialogOpen}
//         onOpenChange={setIsDialogOpen}
//         onStartChallenge={handleStartChallenge}
//       />
      
//       {/* Create Challenge Dialog */}
//       <CreateChallengeDialog
//         isOpen={isCreateDialogOpen}
//         onOpenChange={setIsCreateDialogOpen}
//         onChallengeCreated={handleChallengeCreated}
//       />
//     </SidebarProvider>
//   );
// }

// // Helper function to format time left
// function formatTimeLeft(milliseconds: number): string {
//   if (milliseconds <= 0) return 'Expired';
  
//   const seconds = Math.floor(milliseconds / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
  
//   if (days > 0) {
//     return `${days}d`;
//   } else if (hours > 0) {
//     return `${hours}h`;
//   } else if (minutes > 0) {
//     return `${minutes}m`;
//   } else {
//     return `${seconds}s`;
//   }
// }