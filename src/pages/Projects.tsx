import React from 'react';
import { Code, Wallet, Image, GitPullRequest, Users, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from 'react-redux';
import { RootState } from '@/context/redux/store';

export default function Projects() {
   const [showEditor, setShowEditor] = React.useState(false);
   const projects: any = useSelector((state: RootState) => state.repo.name);
   console.log(projects);

   const repo = [
      {
         name: "Smart Contracts",
         url: "/projects/smart-contracts",
         icon: Code,
         contributors: 12,
         prs: 45,
         stars: 89
      },
      {
         name: "DeFi Integration",
         url: "/projects/defi",
         icon: Wallet,
         contributors: 8,
         prs: 23,
         stars: 67
      },
      {
         name: "NFT Marketplace",
         url: "/projects/nft",
         icon: Image,
         contributors: 15,
         prs: 34,
         stars: 120
      }
   ];

   return (
      <div className="container mx-auto p-6">
         {/* Breadcrumb */}
         <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-white">Projects</span>
         </div>

         {/* Stats Grid */}
         <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-6">
            <div className="glass-effect p-6 rounded-xl">
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                     <Code className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400">Total Projects</p>
                     <h3 className="text-2xl font-bold text-white">3</h3>
                  </div>
               </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                     <GitPullRequest className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400">Open PRs</p>
                     <h3 className="text-2xl font-bold text-white">102</h3>
                  </div>
               </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                     <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400">Total Stars</p>
                     <h3 className="text-2xl font-bold text-white">276</h3>
                  </div>
               </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                     <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400">Contributors</p>
                     <h3 className="text-2xl font-bold text-white">35</h3>
                  </div>
               </div>
            </div>
         </div>

         {/* Projects List */}
         <div className="glass-effect p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-semibold text-white">Active Projects</h2>
               <button
                  onClick={() => setShowEditor(true)}
                  className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
               >
                  <Code className="w-5 h-5" />
                  New Project
               </button>
            </div>

            <div className="space-y-4">
               {projects && projects.map((project: any) => {
                  // const Icon = project.icon;
                  return (
                     <div key={project.name} className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800 hover:bg-green-500/5 transition-colors">
                        <div className="flex items-center gap-4">
                           <div className="p-2 bg-green-500/20 rounded-lg">
                              {/* <Icon className="w-6 h-6 text-green-400" /> */}
                           </div>
                           <div>
                              <h3 className="font-semibold text-white">{project.name}</h3>
                              <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                                 <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {project.contributors} contributors
                                 </span>
                                 <span className="flex items-center gap-1">
                                    <GitPullRequest className="w-4 h-4" />
                                    {project.prs} pull requests
                                 </span>
                                 <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4" />
                                    {project.stars} stars
                                 </span>
                              </div>
                           </div>
                        </div>
                        <button className="px-4 py-2 text-green-400 hover:text-green-300 transition-colors">
                           View Details
                        </button>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
} 