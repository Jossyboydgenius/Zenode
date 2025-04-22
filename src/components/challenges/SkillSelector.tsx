'use client';

import React, { useState } from 'react';
import { X, Check, Plus, ChevronDown } from 'lucide-react';
import { useUserSkills, availableSkills } from '@/lib/skills';

interface SkillSelectorProps {
  showLabel?: boolean;
  className?: string;
}

export function SkillSelector({ showLabel = true, className = '' }: SkillSelectorProps) {
  const { skills, addSkill, removeSkill } = useUserSkills();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = availableSkills.filter(skill => 
    skill.toLowerCase().includes(searchTerm.toLowerCase()) && 
    !skills.includes(skill)
  );

  return (
    <div className={`relative ${className}`}>
      {showLabel && (
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Your Skills
        </label>
      )}
      
      {/* Selected Skills */}
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-sm"
          >
            <span>{skill}</span>
            <button 
              onClick={() => removeSkill(skill)}
              className="p-0.5 hover:bg-green-400/20 rounded-full"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        
        {skills.length === 0 && (
          <div className="text-sm text-gray-400">No skills selected. Add some skills below.</div>
        )}
      </div>
      
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center justify-between w-full p-2 border border-green-500/20 rounded-md text-white bg-black/50 hover:bg-black/70 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Plus className="w-4 h-4 text-green-400" />
          <span>Add Skills</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      
                {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-black border border-green-500/20 rounded-md shadow-lg max-h-80 overflow-auto">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="p-2">
            {filteredSkills.length > 0 ? (
              <div className="space-y-1">
                {filteredSkills.map((skill) => (
                  <button
                    key={skill}
                    className="flex items-center justify-between w-full p-2 text-left hover:bg-green-500/10 rounded-md transition-colors"
                    onClick={() => {
                      addSkill(skill);
                      setSearchTerm('');
                    }}
                  >
                    <span className="text-white">{skill}</span>
                    <Plus className="w-4 h-4 text-green-400" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-2 text-gray-400 text-center">
                {searchTerm
                  ? 'No matching skills found'
                  : 'All available skills are already selected'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}