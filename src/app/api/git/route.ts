import { app } from "@/backend/octokit";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

const GET = async (req: NextRequest, res: NextResponse) => {

   const { searchParams } = new URL(req.url);
   const username = searchParams.get("username");

   const result = await app.octokit.request("GET /users/{username}/installation", {
      username: username as string
   });
   // console.log(result);
   const INSTALLATION_ID = result.data.id;
   const userId = 61779836;
   const octokit = await app.getInstallationOctokit(userId as number);
   const repo = await octokit.request('GET /users/{username}/repos', {
      username: username as string,
      headers: {
         'X-GitHub-Api-Version': '2022-11-28'
      }
   })
   // console.log(repo.data);
   // return repo;
   if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
   }

   return NextResponse.json(result);
}

export { GET };
