import { Challenge, ChallengeType } from '@/lib/models/challenges'

export const DUMMY_CHALLENGES: Challenge[] = [
  {
    id: "JfA.kN",
    name: "Smart Contract Security Audit",
    description: "Find and fix vulnerabilities in a DeFi protocol. This challenge requires deep knowledge of common smart contract vulnerabilities and security best practices. You'll analyze a protocol for reentrancy attacks, integer overflow/underflow, and other critical issues.",
    difficulty: "Advanced",
    xp: 500,
    participants: {
      "user1": { address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" },
      "user2": { address: "0x8Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" },
      "user3": { address: "0x9Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" }
    },
    deadlineTimestamp: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 days from now
    completions: 45,
    createdBy: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
    category: "Security",
    reward: "1000 USDC",
    type: "code" as ChallengeType,
    codeTemplate: "// Audit this contract\ncontract VulnerableProtocol {\n  // Code to audit\n}",
    solution: "// Fixed contract\ncontract SecureProtocol {\n  // Fixed code\n}"
  },
  {
    id: "eVRk",
    name: "Optimize Gas Usage",
    description: "Optimize a smart contract for minimal gas consumption. You'll be given a functioning but inefficient smart contract and your task is to reduce its gas usage while maintaining all functionality. This involves refactoring storage patterns, optimizing loops, and implementing gas-efficient design patterns.",
    difficulty: "Intermediate",
    xp: 300,
    participants: {
      "user4": { address: "0xaFc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" },
      "user5": { address: "0xbFc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "submitted" }
    },
    deadlineTimestamp: Date.now() + 5 * 24 * 60 * 60 * 1000, // 5 days from now
    completions: 78,
    createdBy: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    category: "Optimization",
    reward: "500 USDC",
    type: "code" as ChallengeType,
    codeTemplate: "// Optimize this contract\ncontract InefficientContract {\n  // Code to optimize\n}",
    solution: "// Optimized contract\ncontract EfficientContract {\n  // Optimized code\n}"
  },
  {
    id: "MsTK",
    name: "Build a Token Bridge",
    description: "Create a cross-chain token bridge implementation. This challenge requires you to build a secure bridge that allows tokens to be transferred between different blockchain networks. You'll need to implement locking, minting, and verification mechanisms.",
    difficulty: "Advanced",
    xp: 800,
    participants: {
      "user6": { address: "0xcFc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" },
      "user7": { address: "0xdFc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" },
      "user8": { address: "0xeFc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" }
    },
    deadlineTimestamp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
    completions: 32,
    createdBy: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000, // 10 days ago
    category: "Interoperability",
    reward: "2000 USDC",
    type: "github" as ChallengeType,
    repoUrl: "https://github.com/tokenbridge/example",
    requiredSkills: ["Solidity", "JavaScript", "Cross-chain"]
  },
  {
    id: "RaW",
    name: "NFT Staking System",
    description: "Implement an NFT staking system with rewards. Design and build a system that allows users to stake their NFTs and earn rewards over time. You'll need to create the staking mechanism, reward distribution, and withdrawal functionality.",
    difficulty: "Intermediate",
    xp: 400,
    participants: {
      "user9": { address: "0xfFc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" },
      "user10": { address: "0x1Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", joinedAt: Date.now(), status: "joined" }
    },
    deadlineTimestamp: Date.now() + 3 * 24 * 60 * 60 * 1000, // 3 days from now
    completions: 65,
    createdBy: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
    category: "NFT",
    reward: "750 USDC",
    type: "design" as ChallengeType,
    designCriteria: ["Mobile-friendly interface", "Dark mode support", "Accessible design", "Intuitive staking flow"]
  }
];