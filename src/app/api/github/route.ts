import { NextRequest, NextResponse } from "next/server";
import { app } from "@/backend/octokit";
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // revalidate every hour

const GET = async (req: NextRequest, res: NextResponse) => {

   const { searchParams } = new URL(req.url);
   const username = searchParams.get("username");

   const result = await app.octokit.request("GET /users/{username}/installation", {
      username: username as string
   });
   console.log(result);
   const INSTALLATION_ID = result.data.id;
   // const octokit = await app.getInstallationOctokit(INSTALLATION_ID);
   // const ress = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
   //    owner: "github",
   //    repo: "docs",
   //    issue_number: 11901,
   //    headers: {
   //       "x-github-api-version": "2022-11-28",
   //    },
   // });
   // console.log(ress);

   if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
   }

   // const response = await fetch(`https://api.github.com/users/${username}`);
   // const data = await response.json();

   return NextResponse.json(result);
}

export { GET }