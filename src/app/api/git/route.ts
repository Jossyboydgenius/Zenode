import { app } from "@/backend/octokit";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

interface GitHubInstallationResponse {
  id: number;
  [key: string]: any;
}

interface GitHubRepoResponse {
  data: Array<{
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
      login: string;
      id: number;
      [key: string]: any;
    };
    [key: string]: any;
  }>;
  [key: string]: any;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const result = await app.octokit.request("GET /users/{username}/installation", {
      username,
    });
    
    const INSTALLATION_ID = result.data.id as number;
    const userId = 61779836;
    
    const octokit = await app.getInstallationOctokit(userId);
    
    const repo = await octokit.request('GET /users/{username}/repos', {
      username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }) as GitHubRepoResponse;

    // Uncomment the line below if you want to return repo data instead
    // return NextResponse.json(repo.data);
    
    return NextResponse.json(result.data);
  }
  catch(error) {
    console.error("GitHub API Error:", error);
    
    if (error instanceof Error) {
      return NextResponse.json({ 
        error: "GitHub API Error", 
        message: error.message 
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      error: "An unknown error occurred" 
    }, { status: 500 });
  }
}






// import { app } from "@/backend/octokit";
// import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-static";

// export async function GET(request: NextRequest) {
//    try {
//       const { searchParams } = new URL(request.url);
//       const username = searchParams.get("username");

//       const result = await app.octokit.request("GET /users/{username}/installation", {
//          username: username as string
//       });
//       // console.log(result);
//       const INSTALLATION_ID = result.data.id;
//       const userId = 61779836;
//       const octokit = await app.getInstallationOctokit(userId as number);
//       const repo = await octokit.request('GET /users/{username}/repos', {
//          username: username as string,
//          headers: {
//             'X-GitHub-Api-Version': '2022-11-28'
//          }
//       })
//       // console.log(repo.data);
//       // return repo;
//       if (!username) {
//          return NextResponse.json({ error: "Username is required" }, { status: 400 });
//       }

//       return NextResponse.json(result);
//    }
//    catch(e){
//       console.log("hello")
//    }
// }

// export default GET;
