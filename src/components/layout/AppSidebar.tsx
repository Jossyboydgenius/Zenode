"use client"

import * as React from "react"
import {
   BookOpen,
   LifeBuoy,
   PieChart,
   Settings2,
   Award,
   GitPullRequest,
   Code,
   Wallet,
   Image,
   ArrowLeftRight,
} from "lucide-react"

import { NavMain } from "@/components/nav/NavMain"
import { NavProjects } from "@/components/nav/NavProjects"
import { NavSecondary } from "@/components/nav/NavSecondary"
import { NavUser } from "@/components/nav/NavUser"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setUserAsync } from "@/context/redux/userSlice"
import { AppDispatch, RootState } from "@/context/redux/store"

const data = {
   user: {
      name: "johndoe",
      email: "john@zenode.dev",
      avatar: "/avatars/john.jpg",
   },
   navMain: [
      {
         title: "Dashboard",
         url: "/dashboard",
         icon: PieChart,
         isActive: true,
         items: [
            {
               title: "Overview",
               url: "/dashboard/overview",
            },
            {
               title: "Projects",
               url: "/dashboard/projects",
            },
            {
               title: "Analytics",
               url: "/dashboard/analytics",
            },
            {
               title: "Submit Proposal",
               url: "/dashboard/submit-proposal",
            },
         ],
      },
      {
         title: "Projects",
         url: "/projects",
         icon: Code,
         items: [
            {
               title: "Smart Contracts",
               url: "/projects/smart-contracts",
            },
            {
               title: "DeFi Integration",
               url: "/projects/defi",
            },
            {
               title: "NFT Marketplace",
               url: "/projects/nft",
            },
            {
               title: "Token Bridge",
               url: "/projects/token-bridge",
            }
         ],
      },
      {
         title: "Playground",
         url: "/playground",
         icon: Code,
         items: [
            {
               title: "Code Editor",
               url: "/playground/editor",
            },
            {
               title: "Smart Contracts",
               url: "/playground/smart-contracts",
            },
            {
               title: "Web3 Integration",
               url: "/playground/web3",
            },
            {
               title: "Challenges",
               url: "/playground/challenges",
            },
         ],
      },
      {
         title: "Contributions",
         url: "/contributions",
         icon: GitPullRequest,
         items: [
            {
               title: "My PRs",
               url: "/contributions/my-prs",
            },
            {
               title: "Issues",
               url: "/contributions/issues",
            },
            {
               title: "Rewards",
               url: "/contributions/rewards",
            },
         ],
      },
      {
         title: "Learn",
         url: "/learn",
         icon: BookOpen,
         items: [
            {
               title: "Tutorials",
               url: "/learn/tutorials",
            },
            {
               title: "Challenges",
               url: "/learn/challenges",
            },
            {
               title: "Resources",
               url: "/learn/resources",
            },
         ],
      },
      {
         title: "Settings",
         url: "/settings",
         icon: Settings2,
         items: [
            {
               title: "Profile",
               url: "/settings/profile",
            },
            {
               title: "Preferences",
               url: "/settings/preferences",
            },
            {
               title: "Notifications",
               url: "/settings/notifications",
            },
            {
               title: "Security",
               url: "/settings/security",
            }
         ],
      },
   ],
   navSecondary: [
      {
         title: "Support",
         url: "/support",
         icon: LifeBuoy,
      },
      {
         title: "Documentation",
         url: "/docs",
         icon: BookOpen,
      },
   ],
   projects: [
      {
         name: "Smart Contracts",
         url: "/projects/smart-contracts",
         icon: Code,
      },
      {
         name: "DeFi Integration",
         url: "/projects/defi",
         icon: Wallet,
      },
      {
         name: "NFT Marketplace",
         url: "/projects/nft",
         icon: Image,
      },
      {
         name: "Token Bridge",
         url: "/projects/token-bridge",
         icon: ArrowLeftRight,
      }
   ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   // const [user, setUser] = useState<any>({
   //    name: "",
   //    avatar_url: "",
   // });
   // console.log(user)
   // useEffect(() => {
   //    const fetchUser = async () => {

   //       // const octokit = app.getInstallationOctokit();
   //       // const ress = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
   //       //    owner: "github",
   //       //    repo: "docs",
   //       //    issue_number: 11901,
   //       // });
   //       // console.log(ress);
   //       const username = "nyuiela";
   //       const response = await fetch(`https://api.github.com/users/${username}`);
   //       const data = await response.json();
   //       setUser(data);
   //       return data
   //    }
   //    fetchUser();
   // }, []);
   const user = useSelector((state: RootState) => state.user.user);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      const fetchUser = async () => {
         await dispatch(setUserAsync("jossyboydgenius"));
         console.log(user);
      }
      fetchUser();
   }, []);

   return (
      <Sidebar variant="inset" {...props}>
         <SidebarHeader>
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild>
                     <a href="/">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-green-500/20">
                           <Award className="size-4 text-green-400" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <span className="truncate font-semibold gradient-text">Zenode</span>
                           <span className="truncate text-xs text-gray-400">Web3 Development</span>
                        </div>
                     </a>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>
         <SidebarContent>
            <NavMain items={data.navMain} />
            <NavProjects projects={data.projects} />
            <NavSecondary items={data.navSecondary} className="mt-auto" />
         </SidebarContent>
         <SidebarFooter>
            <NavUser user={{ ...user as any }} />
         </SidebarFooter>
      </Sidebar>
   )
}
