import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trophy, Code, Figma, Github, ChevronDown, X } from 'lucide-react';
import { useAccount } from '@particle-network/connectkit';
import { Challenge, challengeService, ChallengeType } from '@/lib/models/challenges';

interface CreateChallengeDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChallengeCreated: (challenge: Challenge) => void;
}

// Predefined categories
const PREDEFINED_CATEGORIES = [
  'DeFi', 
  'NFT', 
  'Security', 
  'Gaming', 
  'DAO', 
  'Layer 2', 
  'Wallet', 
  'DEX', 
  'Lending', 
  'Optimization',
  'Social',
  'Web3',
  'General'
];

export function CreateChallengeDialog({
  isOpen,
  onOpenChange,
  onChallengeCreated
}: CreateChallengeDialogProps) {
  const { address } = useAccount();

  const [challengeData, setChallengeData] = useState({
    name: '',
    description: '',
    type: 'code' as ChallengeType,
    difficulty: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
    xp: 300,
    reward: '',
    category: '',
    deadlineDays: 7,
    codeTemplate: '',
    solution: '',
    designCriteria: [''],
    repoUrl: '',
    requiredSkills: ['']
  });

  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<string[]>(PREDEFINED_CATEGORIES);
  
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter categories based on input
  useEffect(() => {
    if (challengeData.category) {
      const filtered = PREDEFINED_CATEGORIES.filter(
        cat => cat.toLowerCase().includes(challengeData.category.toLowerCase())
      );
      
      setFilteredCategories(
        // If the typed category exactly matches an existing one, just show the filtered list
        filtered.length > 0 && filtered.some(c => c.toLowerCase() === challengeData.category.toLowerCase())
          ? filtered
          : // Otherwise, include the typed category as a new option at the top
            [challengeData.category, ...filtered]
      );
    } else {
      setFilteredCategories(PREDEFINED_CATEGORIES);
    }
  }, [challengeData.category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setChallengeData({
      ...challengeData,
      [name]: value
    });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChallengeData({
      ...challengeData,
      [name]: parseInt(value, 10) || 0
    });
  };

  const handleArrayChange = (index: number, value: string, field: 'designCriteria' | 'requiredSkills') => {
    const updatedArray = [...challengeData[field]];
    updatedArray[index] = value;
    setChallengeData({
      ...challengeData,
      [field]: updatedArray
    });
  };

  const addArrayItem = (field: 'designCriteria' | 'requiredSkills') => {
    setChallengeData({
      ...challengeData,
      [field]: [...challengeData[field], '']
    });
  };

  const removeArrayItem = (index: number, field: 'designCriteria' | 'requiredSkills') => {
    const updatedArray = [...challengeData[field]];
    updatedArray.splice(index, 1);
    setChallengeData({
      ...challengeData,
      [field]: updatedArray
    });
  };

  const handleClearCategory = () => {
    setChallengeData({
      ...challengeData,
      category: ''
    });
    if (categoryInputRef.current) {
      categoryInputRef.current.focus();
    }
  };

  const handleCategorySelect = (category: string) => {
    setChallengeData({
      ...challengeData,
      category: category
    });
    setShowCategoryDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address) {
      setError('Please connect your wallet first');
      return;
    }

    if (!challengeData.name || !challengeData.description) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate based on challenge type
    if (challengeData.type === 'code' && (!challengeData.codeTemplate || !challengeData.solution)) {
      setError('Please provide code template and solution for code challenges');
      return;
    }

    if (challengeData.type === 'design' && (!challengeData.designCriteria[0])) {
      setError('Please add at least one design criterion');
      return;
    }

    if (challengeData.type === 'github' && (!challengeData.repoUrl || !challengeData.requiredSkills[0])) {
      setError('Please provide repository URL and required skills for GitHub challenges');
      return;
    }

    setIsCreating(true);
    setError('');

    try {
      // Filter out empty array items
      const filteredDesignCriteria = challengeData.designCriteria.filter(item => item.trim() !== '');
      const filteredRequiredSkills = challengeData.requiredSkills.filter(item => item.trim() !== '');

      // Calculate deadline timestamp
      const deadlineTimestamp = Date.now() + (challengeData.deadlineDays * 24 * 60 * 60 * 1000);

      // Create a slug-based ID from the name
      const challengeSlug = challengeData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // NEW: Fix for the undefined/null issue - using empty strings instead of undefined
      const newChallenge: Omit<Challenge, 'id' | 'createdAt' | 'participants' | 'completions'> = {
        name: challengeData.name,
        description: challengeData.description,
        type: challengeData.type,
        difficulty: challengeData.difficulty,
        xp: challengeData.xp,
        reward: challengeData.reward || '',
        category: challengeData.category || 'General',
        deadlineTimestamp,
        createdBy: address,
        
        // Set empty strings for fields that don't apply to current type
        codeTemplate: challengeData.type === 'code' ? challengeData.codeTemplate : '',
        solution: challengeData.type === 'code' ? challengeData.solution : '',
        designCriteria: challengeData.type === 'design' ? filteredDesignCriteria : [],
        repoUrl: challengeData.type === 'github' ? challengeData.repoUrl : '',
        requiredSkills: challengeData.type === 'github' ? filteredRequiredSkills : []
      };

      const challengeId = await challengeService.createChallenge(newChallenge);
      
      // Get the full challenge with the id
      const createdChallenge = await challengeService.getChallenge(challengeId);
      
      if (createdChallenge) {
        onChallengeCreated(createdChallenge);
        
        // Reset form
        setChallengeData({
          name: '',
          description: '',
          type: 'code',
          difficulty: 'Intermediate',
          xp: 300,
          reward: '',
          category: '',
          deadlineDays: 7,
          codeTemplate: '',
          solution: '',
          designCriteria: [''],
          repoUrl: '',
          requiredSkills: ['']
        });
        
        // Close the dialog upon successful creation
        onOpenChange(false); 
      }
    } catch (error) {
      console.error('Error creating challenge:', error);
      setError(`Failed to create challenge: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] bg-black border border-green-500/20 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Challenge</DialogTitle>
          <DialogDescription className="text-gray-400">
            Set up a new challenge for the community to solve
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-md text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Challenge Name</label>
              <input
                type="text"
                name="name"
                value={challengeData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                placeholder="E.g., Smart Contract Security Audit"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea
                name="description"
                value={challengeData.description}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white min-h-[100px]"
                placeholder="Describe the challenge and what participants need to do"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Challenge Type</label>
                <select
                  name="type"
                  value={challengeData.type}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                >
                  <option value="code">Code Challenge</option>
                  <option value="design">Design Challenge</option>
                  <option value="github">GitHub Contribution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Difficulty</label>
                <select
                  name="difficulty"
                  value={challengeData.difficulty}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">XP Reward</label>
                <input
                  type="number"
                  name="xp"
                  value={challengeData.xp}
                  onChange={handleNumberChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                  min="100"
                  max="1000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Token Reward (Optional)</label>
                <input
                  type="text"
                  name="reward"
                  value={challengeData.reward}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                  placeholder="E.g., 1000 USDC"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                <div className="relative" ref={dropdownRef}>
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      name="category"
                      ref={categoryInputRef}
                      value={challengeData.category}
                      onChange={handleChange}
                      onFocus={() => setShowCategoryDropdown(true)}
                      className="flex-1 p-2 rounded-md bg-black/50 border border-green-500/20 text-white pr-16"
                      placeholder="Select or type a category"
                    />
                    <div className="absolute right-0 flex items-center pr-2">
                      {challengeData.category && (
                        <button
                          type="button"
                          onClick={handleClearCategory}
                          className="p-1 hover:bg-gray-700 rounded-full"
                        >
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                        className="p-1 hover:bg-gray-700 rounded-full ml-1"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  
                  {showCategoryDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-black border border-green-500/20 rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
                          <div
                            key={index}
                            className={`p-2 hover:bg-green-500/20 cursor-pointer ${
                              index === 0 && !PREDEFINED_CATEGORIES.includes(category) ? 'border-b border-green-500/20' : ''
                            }`}
                            onClick={() => handleCategorySelect(category)}
                          >
                            {index === 0 && !PREDEFINED_CATEGORIES.includes(category) ? (
                              <span>
                                Add "<span className="font-medium text-green-400">{category}</span>"
                              </span>
                            ) : (
                              category
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="p-2 text-gray-500">No categories found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Duration (days)</label>
                <input
                  type="number"
                  name="deadlineDays"
                  value={challengeData.deadlineDays}
                  onChange={handleNumberChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                  min="1"
                  max="30"
                  required
                />
              </div>
            </div>
          </div>

          {/* Type-specific fields */}
          {challengeData.type === 'code' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                Code Challenge Details
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Code Template</label>
                <textarea
                  name="codeTemplate"
                  value={challengeData.codeTemplate}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white min-h-[100px] font-mono"
                  placeholder="// Provide starter code that participants will begin with"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Solution</label>
                <textarea
                  name="solution"
                  value={challengeData.solution}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white min-h-[100px] font-mono"
                  placeholder="// The solution code for validation"
                  required
                />
              </div>
            </div>
          )}

          {challengeData.type === 'design' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Figma className="w-5 h-5 text-green-400" />
                Design Challenge Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Design Criteria</label>
                <div className="space-y-2">
                  {challengeData.designCriteria.map((criterion, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={criterion}
                        onChange={(e) => handleArrayChange(index, e.target.value, 'designCriteria')}
                        className="flex-1 p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                        placeholder="E.g., Must be responsive and work on mobile devices"
                        required={index === 0}
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'designCriteria')}
                        className="p-2 bg-red-500/20 text-red-400 rounded-md hover:bg-red-500/30 transition-colors"
                        disabled={challengeData.designCriteria.length === 1 && index === 0}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('designCriteria')}
                    className="p-2 bg-green-500/20 text-green-400 rounded-md hover:bg-green-500/30 transition-colors w-full"
                  >
                    Add Criterion
                  </button>
                </div>
              </div>
            </div>
          )}

          {challengeData.type === 'github' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Github className="w-5 h-5 text-green-400" />
                GitHub Contribution Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Repository URL</label>
                <input
                  type="url"
                  name="repoUrl"
                  value={challengeData.repoUrl}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                  placeholder="https://github.com/username/repo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Required Skills</label>
                <div className="space-y-2">
                  {challengeData.requiredSkills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleArrayChange(index, e.target.value, 'requiredSkills')}
                        className="flex-1 p-2 rounded-md bg-black/50 border border-green-500/20 text-white"
                        placeholder="E.g., Solidity, React, TypeScript"
                        required={index === 0}
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'requiredSkills')}
                        className="p-2 bg-red-500/20 text-red-400 rounded-md hover:bg-red-500/30 transition-colors"
                        disabled={challengeData.requiredSkills.length === 1 && index === 0}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('requiredSkills')}
                    className="p-2 bg-green-500/20 text-green-400 rounded-md hover:bg-green-500/30 transition-colors w-full"
                  >
                    Add Skill
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 bg-gray-500/20 text-gray-300 rounded-md hover:bg-gray-500/30 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isCreating}
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-md hover:opacity-90 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {isCreating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Creating...
                </>
              ) : (
                <>
                  <Trophy className="w-4 h-4" />
                  Create Challenge
                </>
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}