'use client'

import React, { useState } from 'react'
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
import { FileText, Plus, Calendar, Link as LinkIcon, Users, Wallet, Lock, Globe } from 'lucide-react'

export default function SubmitProposalPage() {
  const [formData, setFormData] = useState({
    details: '',
    uri: '',
    contributors: [''],
    rewardPool: '',
    isPrivate: false,
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleContributorChange = (index, value) => {
    const updatedContributors = [...formData.contributors];
    updatedContributors[index] = value;
    setFormData(prev => ({
      ...prev,
      contributors: updatedContributors
    }));
  };

  const addContributor = () => {
    setFormData(prev => ({
      ...prev,
      contributors: [...prev.contributors, '']
    }));
  };

  const removeContributor = (index) => {
    const updatedContributors = [...formData.contributors];
    updatedContributors.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      contributors: updatedContributors
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposal submitted:', formData);
    // Here you would typically send the data to your backend
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
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Submit Proposal</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Submit New Proposal</h3>
                <p className="text-sm text-gray-400">Create a new project proposal for the community</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Details */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Project Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/40 rounded-lg p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                  placeholder="Describe your project in detail..."
                  required
                />
              </div>

              {/* Project URI */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Project URI</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <LinkIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="url"
                    name="uri"
                    value={formData.uri}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg p-3 pl-10 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="https://github.com/your-project"
                    required
                  />
                </div>
              </div>

              {/* Contributors */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Contributors</label>
                <div className="space-y-3">
                  {formData.contributors.map((contributor, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Users className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          value={contributor}
                          onChange={(e) => handleContributorChange(index, e.target.value)}
                          className="w-full bg-black/40 rounded-lg p-3 pl-10 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                          placeholder="0x..."
                          required
                        />
                      </div>
                      {formData.contributors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeContributor(index)}
                          className="p-2 bg-red-500/20 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addContributor}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Contributor
                  </button>
                </div>
              </div>

              {/* Reward Pool */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Reward Pool</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Wallet className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="number"
                    name="rewardPool"
                    value={formData.rewardPool}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg p-3 pl-10 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="Amount in ETH"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {/* Privacy Setting */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Privacy Setting</label>
                <div className="flex items-center gap-4 bg-black/40 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPrivate"
                      name="isPrivate"
                      checked={formData.isPrivate}
                      onChange={handleChange}
                      className="w-4 h-4 bg-black/40 border-gray-600 rounded focus:ring-green-400/50"
                    />
                    <label htmlFor="isPrivate" className="text-gray-300">Private Project</label>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    {formData.isPrivate ? (
                      <>
                        <Lock className="w-3 h-3" />
                        Contributors will be added manually
                      </>
                    ) : (
                      <>
                        <Globe className="w-3 h-3" />
                        Open to public contributions
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Deadline */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Project Deadline</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg p-3 pl-10 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}