import { app } from "@/backend/octokit";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

const GET = async (req: NextRequest, res: NextResponse) => {

   const { searchParams } = new URL(req.url);
   const username = searchParams.get("username");
   const userId = searchParams.get("id");
   // console.log(result);
   // const userId = 61779836;
   const octokit = await app.getInstallationOctokit(Number(userId));
   const repo = await octokit.request('GET /users/{username}/repos', {
      username: username as string,
      headers: {
         'X-GitHub-Api-Version': '2022-11-28'
      }
   })
   if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
   }

   return NextResponse.json(repo);
}

export { GET };
