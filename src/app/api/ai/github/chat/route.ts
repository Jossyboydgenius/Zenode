// app/api/ai/github/chat/route.ts
import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate
} from '@langchain/core/prompts';
import {
  MessagesAnnotation,
  StateGraph,
  MemorySaver
} from '@langchain/langgraph';
import { v4 as uuidv4 } from 'uuid';

// Initialize the memory saver for chat history
const memorySaver = new MemorySaver();

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { message, skills, threadId = uuidv4() } = body;

    // Check if required data is provided
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not set in environment variables' },
        { status: 500 }
      );
    }

    // Initialize Groq LLM
    const groq_model = process.env.GROQ_MODEL;
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model:`${groq_model}`,
      temperature: 0
    });

    // Create a chat prompt template
    const promptTemplate = ChatPromptTemplate.fromMessages([
      [
        "system",
        `You are DevMentor, an AI assistant specialized in helping developers find suitable GitHub projects to contribute to
        and improving their skills. You provide guidance on open source contributions, project selection, and skill development.
        
        User's skills: ${skills ? skills.join(', ') : 'Unknown'}
        
        Some guidelines for your responses:
        - Keep your answers focused on programming, development, and GitHub projects
        - If the user doesn't mention skills, suggest they share their skills or interests
        - Recommend specific types of projects that would match their skill level
        - Suggest ways they could improve their skills
        - Be encouraging and supportive
        - Your responses should be concise (3-5 sentences) unless the user asks for detailed information`
      ],
      ["placeholder", "{messages}"]
    ]);

    // Define the function that calls the model
    const callModel = async (state: any) => {
      const prompt = await promptTemplate.invoke(state);
      const response = await model.invoke(prompt);
      return { messages: [response] };
    };

    // Define a new graph
    const workflow = new StateGraph(MessagesAnnotation)
      .addNode("model", callModel)
      .addEdge("__start__", "model")
      .addEdge("model", "__end__");

    // Compile the graph with memory
    const app = workflow.compile({ checkpointer: memorySaver });

    // Configure thread
    const config = { 
      configurable: { thread_id: threadId }
    };

    // Create the user message
    const userMessage = {
      role: "user",
      content: message
    };

    // Invoke the application
    const output = await app.invoke({ messages: [userMessage] }, config);
    
    // Get the last message (the response)
    const responseMessage = output.messages[output.messages.length - 1];

    // Return the response
    return NextResponse.json({ 
      response: responseMessage.content,
      threadId: threadId 
    });
  } catch (error) {
    console.error('Error in AI chat API:', error);
    return NextResponse.json(
      { error: 'Failed to generate chat response' },
      { status: 500 }
    );
  }
}