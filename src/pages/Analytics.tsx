import React from 'react';
import { Activity, GitPullRequest, Trophy, Users, TrendingUp, Code, Clock, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const performanceData = [
    { name: 'Week 1', contributions: 23, xp: 450, prs: 5 },
    { name: 'Week 2', contributions: 45, xp: 890, prs: 8 },
    { name: 'Week 3', contributions: 32, xp: 670, prs: 6 },
    { name: 'Week 4', contributions: 58, xp: 1200, prs: 12 },
    { name: 'Week 5', contributions: 48, xp: 980, prs: 9 },
    { name: 'Week 6', contributions: 65, xp: 1450, prs: 15 },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <span>Dashboard</span>
        <span>/</span>
        <span className="text-white">Analytics</span>
      </div>

      {/* Stats Grid */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-6">
        <div className="glass-effect p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Code className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Smart Contracts</p>
              <h3 className="text-2xl font-bold text-white">24</h3>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Coding Hours</p>
              <h3 className="text-2xl font-bold text-white">156</h3>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Achievements</p>
              <h3 className="text-2xl font-bold text-white">12</h3>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Success Rate</p>
              <h3 className="text-2xl font-bold text-white">94%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Graph */}
      <div className="glass-effect p-6 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Performance Overview</h2>
            <p className="text-gray-400">Your contribution metrics over time</p>
          </div>
          <select className="bg-black/40 border border-gray-800 rounded-lg py-2 px-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500">
            <option>Last 6 Weeks</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
          </select>
        </div>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Line type="monotone" dataKey="contributions" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="xp" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="prs" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievement Metrics */}
      <div className="glass-effect p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-4">Achievement Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-black/40 rounded-lg border border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Smart Contract Deployments</span>
              <span className="text-green-400">85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-black/40 rounded-lg border border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Code Quality Score</span>
              <span className="text-purple-400">92%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-black/40 rounded-lg border border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Challenge Completion</span>
              <span className="text-yellow-400">78%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-black/40 rounded-lg border border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">PR Acceptance Rate</span>
              <span className="text-blue-400">94%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 