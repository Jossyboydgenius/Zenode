# AI-Powered Challenge Platform

This platform provides a comprehensive system for creating, managing, and participating in coding, design, and GitHub contribution challenges using AI assistance.

## Features

### Challenge Management

- Create different types of challenges (code, design, GitHub contributions)
- Join and submit solutions to challenges
- Track challenge participants and completions
- Reward system with XP and tokens

### AI-Powered Project Recommendations

- Skill-based GitHub project recommendations
- AI chat assistant for coding guidance
- Personalized project matching based on user skills

### User Skills Management

- Add and manage your development skills
- Store skills locally for persistent usage
- Use skills for AI-powered recommendations

## Setup Instructions

1. Clone the repository
2. Copy `.env.local.example` to `.env.local` and fill in the required values
3. Install dependencies:
   ```
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project
   - Enable Firestore database
   - Add your Firebase configuration to `.env.local`
5. Set up Groq AI:
   - Get an API key from [Groq](https://console.groq.com)
   - Add your Groq API key to `.env.local`
6. Run the development server:
   ```
   npm run dev
   ```

## Using the Platform

### Creating Challenges

1. Connect your wallet using Particle Network
2. Navigate to the Challenges page
3. Click "Create Challenge"
4. Fill in the challenge details
5. Submit to create a new challenge

### Finding GitHub Projects

1. Navigate to the Search page
2. Add your skills using the skill selector
3. Click "Find Projects for Me" to get personalized recommendations
4. Use the AI chat assistant for more specific advice

### Joining Challenges

1. Browse active challenges on the Challenges page
2. Click on a challenge to view details
3. Click "Join Challenge" to participate
4. Submit your solution based on the challenge type:
   - Code challenges: Use the code editor
   - Design challenges: Submit a URL to your design
   - GitHub challenges: Make contributions to the specified repository

## Technologies Used

- Next.js (Frontend framework)
- Firebase (Database)
- Particle Network (Wallet connection)
- Groq (AI language model)
- Langchain (AI framework)
- Tailwind CSS (Styling)

## Architecture

The platform is built using the following architecture:

1. **Frontend**: Next.js with client and server components
2. **Data Storage**: Firebase Firestore for challenges and user data
3. **AI Services**: Groq AI for project recommendations and chat assistance
4. **API Routes**: Next.js API routes for GitHub integration and AI services
5. **Wallet Integration**: Particle Network for blockchain wallet connection

## Adding More Features

To extend the platform, consider:

1. Adding a leaderboard for XP and challenge completions
2. Implementing a challenge review system
3. Adding team challenges
4. Supporting more types of challenges
5. Enhancing the AI recommendation system with more data points
