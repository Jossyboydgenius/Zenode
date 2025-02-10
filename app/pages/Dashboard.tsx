import React from 'react';
import { Code } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">Dashboard</h2>
          <p className="text-gray-400 mt-2">
            Welcome back! Here's an overview of your activity.
          </p>
        </div>

        {/* Add your dashboard content here */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-gray-200">Total Projects</h3>
            <p className="text-3xl font-bold text-green-400 mt-2">12</p>
          </div>
          
          <div className="p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-gray-200">Active Models</h3>
            <p className="text-3xl font-bold text-green-400 mt-2">3</p>
          </div>
          
          <div className="p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-gray-200">API Calls</h3>
            <p className="text-3xl font-bold text-green-400 mt-2">1,234</p>
          </div>
        </div>

        <div className="p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/20">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <Code className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">New project created</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 