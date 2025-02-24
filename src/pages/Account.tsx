import React from 'react';
import { Shield, Key, Wallet, Globe, Bell, Clock, ChevronRight } from 'lucide-react';

export default function Account() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Account Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences.</p>
      </div>

      <div className="space-y-6">
        {/* Security Section */}
        <div className="glass-effect p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-400" />
            Security
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
              </div>
              <button className="text-green-400 hover:text-green-300 flex items-center">
                Enable
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Recovery Keys</h3>
                <p className="text-sm text-gray-400">Manage your backup recovery keys</p>
              </div>
              <button className="text-green-400 hover:text-green-300 flex items-center">
                View
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Web3 Wallet Section */}
        <div className="glass-effect p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Wallet className="w-5 h-5 mr-2 text-green-400" />
            Web3 Wallet
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Connected Wallet</h3>
                <p className="text-sm text-gray-400">0x1234...5678</p>
              </div>
              <button className="text-green-400 hover:text-green-300">Disconnect</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Reward Preferences</h3>
                <p className="text-sm text-gray-400">Choose how you receive your rewards</p>
              </div>
              <button className="text-green-400 hover:text-green-300 flex items-center">
                Configure
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="glass-effect p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-green-400" />
            Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Language</h3>
                <p className="text-sm text-gray-400">Select your preferred language</p>
              </div>
              <select className="bg-black/40 border border-gray-800 rounded-lg px-3 py-2 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Time Zone</h3>
                <p className="text-sm text-gray-400">Set your local time zone</p>
              </div>
              <button className="text-green-400 hover:text-green-300 flex items-center">
                Configure
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="glass-effect p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-green-400" />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-400">Receive updates about your contributions</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <h3 className="text-white font-medium">Smart Contract Updates</h3>
                <p className="text-sm text-gray-400">Get notified about contract interactions</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 