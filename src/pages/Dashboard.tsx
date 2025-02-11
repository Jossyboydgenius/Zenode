import React from 'react';
import { AppSidebar } from "@/components/layout/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Activity, Users, GitPullRequest, Trophy, GitCommit, GitPullRequestDraft, MessageSquare, Star, Code } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CodeEditor } from "@/components/CodeEditor";

export default function Dashboard() {
  const [showEditor, setShowEditor] = React.useState(false);

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
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Dashboard Stats */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Active Projects</p>
                  <h3 className="text-2xl font-bold text-white">12</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Pull Requests</p>
                  <h3 className="text-2xl font-bold text-white">48</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">XP Earned</p>
                  <h3 className="text-2xl font-bold text-white">2,450</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Contributors</p>
                  <h3 className="text-2xl font-bold text-white">156</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
              <button 
                onClick={() => setShowEditor(true)}
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                Start Coding
              </button>
            </div>
            {showEditor ? (
              <CodeEditor />
            ) : (
              <div className="space-y-6">
                {/* Activity Item 1 */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/avatars/alice.jpg" alt="Alice" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Alice Chen</span>
                      <span className="text-gray-400">opened a pull request</span>
                      <span className="text-sm text-green-400">#123</span>
                    </div>
                    <p className="text-gray-400 mt-1">
                      Add smart contract integration for token swaps
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <GitPullRequestDraft className="w-4 h-4" />
                        2 hours ago
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        3 comments
                      </span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 2 */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/avatars/bob.jpg" alt="Bob" />
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Bob Johnson</span>
                      <span className="text-gray-400">committed to</span>
                      <span className="text-green-400">main</span>
                    </div>
                    <p className="text-gray-400 mt-1">
                      Update NFT marketplace documentation
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <GitCommit className="w-4 h-4" />
                        5 hours ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 3 */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/avatars/carol.jpg" alt="Carol" />
                    <AvatarFallback>CW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Carol White</span>
                      <span className="text-gray-400">earned a badge</span>
                      <span className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4" />
                        Smart Contract Expert
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">
                      Completed 10 smart contract challenges
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        8 hours ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 3 */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/avatars/carol.jpg" alt="Carol" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Awe Joseph</span>
                      <span className="text-gray-400">earned a badge</span>
                      <span className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4" />
                        Smart Contract Genius
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">
                      Completed 20 smart contract challenges
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        10 hours ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
} 