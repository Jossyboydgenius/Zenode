'use client'

import React from 'react'
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
import { TrendingUp, ArrowUpRight, Activity, Users, GitPullRequest } from 'lucide-react'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'
import GitHubCalendar from 'react-github-calendar'

// Sample data for the line chart
const activityData = [
  {
    id: "contributions",
    color: "hsl(142, 70%, 50%)",
    data: [
      { x: "Jan", y: 120 },
      { x: "Feb", y: 140 },
      { x: "Mar", y: 180 },
      { x: "Apr", y: 160 },
      { x: "May", y: 220 },
      { x: "Jun", y: 240 },
      { x: "Jul", y: 280 },
      { x: "Aug", y: 260 },
      { x: "Sep", y: 300 },
      { x: "Oct", y: 320 },
      { x: "Nov", y: 340 },
      { x: "Dec", y: 360 },
    ]
  }
]

// Sample data for the pie chart
const contributionTypes = [
  { id: "Pull Requests", value: 45, color: "hsl(142, 70%, 50%)" },
  { id: "Issues", value: 25, color: "hsl(352, 70%, 50%)" },
  { id: "Code Reviews", value: 20, color: "hsl(262, 70%, 50%)" },
  { id: "Documentation", value: 10, color: "hsl(22, 70%, 50%)" },
]

// Sample data for the bar chart
const projectPerformance = [
  {
    project: "Smart Contracts",
    "Pull Requests": 30,
    "Issues": 15,
    "Code Reviews": 25,
  },
  {
    project: "DeFi Integration",
    "Pull Requests": 25,
    "Issues": 20,
    "Code Reviews": 15,
  },
  {
    project: "NFT Marketplace",
    "Pull Requests": 20,
    "Issues": 10,
    "Code Reviews": 30,
  },
]

export default function AnalyticsPage() {
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
                  <BreadcrumbPage>Analytics</BreadcrumbPage>
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
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Activity Rate</p>
                  <h3 className="text-2xl font-bold text-white">85%</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Growth</p>
                  <h3 className="text-2xl font-bold text-white">+24%</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">New Users</p>
                  <h3 className="text-2xl font-bold text-white">+156</h3>
                </div>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <GitPullRequest className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">PR Success Rate</p>
                  <h3 className="text-2xl font-bold text-white">92%</h3>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub-style Contribution Graph */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Contribution Activity</h3>
                <p className="text-sm text-gray-400">6,392 contributions in the last year</p>
              </div>
            </div>
            <div className="py-4">
              <GitHubCalendar
                username="johndoe"
                colorScheme="dark"
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
                style={{
                  color: '#9CA3AF',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>

          {/* Analytics Charts */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Activity Chart */}
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Activity Overview</h3>
                  <p className="text-sm text-gray-400">Monthly contribution activity</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="h-[300px]">
                <ResponsiveLine
                  data={activityData}
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                  curve="natural"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendOffset: 36,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Contributions',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  enableGridX={false}
                  enableGridY={false}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fill: '#9CA3AF'
                        }
                      },
                      legend: {
                        text: {
                          fill: '#9CA3AF'
                        }
                      }
                    },
                    grid: {
                      line: {
                        stroke: '#1F2937'
                      }
                    }
                  }}
                />
              </div>
            </div>

            {/* Contributions Chart */}
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Contribution Types</h3>
                  <p className="text-sm text-gray-400">Distribution of contributions</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="h-[300px]">
                <ResponsivePie
                  data={contributionTypes}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#9CA3AF"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor="#FFFFFF"
                  theme={{
                    labels: {
                      text: {
                        fill: '#FFFFFF'
                      }
                    }
                  }}
                />
              </div>
            </div>

            {/* Project Performance */}
            <div className="glass-effect p-6 rounded-xl md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Project Performance</h3>
                  <p className="text-sm text-gray-400">Activity across all projects</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="h-[300px]">
                <ResponsiveBar
                  data={projectPerformance}
                  keys={['Pull Requests', 'Issues', 'Code Reviews']}
                  indexBy="project"
                  margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Project',
                    legendPosition: 'middle',
                    legendOffset: 32
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Count',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor="#FFFFFF"
                  legends={[
                    {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemOpacity: 1
                          }
                        }
                      ]
                    }
                  ]}
                  theme={{
                    axis: {
                      ticks: {
                        text: {
                          fill: '#9CA3AF'
                        }
                      },
                      legend: {
                        text: {
                          fill: '#9CA3AF'
                        }
                      }
                    },
                    legends: {
                      text: {
                        fill: '#9CA3AF'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 