import { Activity, Users, GitPullRequest, Trophy } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
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

      {/* Recent Activity */}
      <div className="min-h-[calc(100vh-16rem)] rounded-xl glass-effect p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
        </div>
        {/* Activity content */}
      </div>
    </div>
  );
} 