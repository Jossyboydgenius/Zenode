import { useState, useEffect } from 'react';

// List of commonly used developer skills
export const availableSkills = [
  // Programming Languages
  'JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'Java', 'C++', 'Solidity', 'C#',
  // Frontend
  'React', 'Vue', 'Angular', 'Next.js', 'Tailwind CSS', 'CSS', 'HTML', 'Svelte',
  // Backend
  'Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', 'ASP.NET', 
  // Blockchain
  'Ethereum', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'Smart Contracts', 'DeFi', 'NFT', 
  'Solana', 'Avalanche', 'Polygon', 'Chainlink', 'Graph Protocol',
  // Mobile
  'React Native', 'Flutter', 'iOS', 'Android', 'Swift', 'Kotlin',
  // Data
  'SQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'GraphQL', 'NoSQL', 'Redis', 'Supabase',
  // DevOps
  'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'CI/CD', 'GitHub Actions',
  // Design
  'Figma', 'UI Design', 'UX Design', 'Adobe XD', 'Sketch',
  // Testing
  'Jest', 'Cypress', 'Testing Library', 'Mocha', 'Selenium',
  // AI/ML
  'Machine Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision',
  // Security
  'Cybersecurity', 'Security Audits', 'Penetration Testing'
];

// Hook for managing user skills in local storage
export function useUserSkills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Load skills from local storage on component mount
  useEffect(() => {
    const loadSkills = () => {
      const savedSkills = localStorage.getItem('userSkills');
      if (savedSkills) {
        try {
          const parsedSkills = JSON.parse(savedSkills);
          setSkills(Array.isArray(parsedSkills) ? parsedSkills : []);
        } catch (e) {
          console.error('Error parsing saved skills:', e);
          setSkills([]);
        }
      }
      setLoading(false);
    };

    loadSkills();
  }, []);

  // Save skills to local storage whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('userSkills', JSON.stringify(skills));
    }
  }, [skills, loading]);

  // Add a skill
  const addSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  // Remove a skill
  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  // Update multiple skills at once
  const updateSkills = (newSkills: string[]) => {
    setSkills(newSkills);
  };

  // Clear all skills
  const clearSkills = () => {
    setSkills([]);
  };

  return {
    skills,
    loading,
    addSkill,
    removeSkill,
    updateSkills,
    clearSkills
  };
}