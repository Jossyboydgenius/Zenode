import { app } from "@/backend/octokit";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    const result = await app.octokit.request("GET /users/{username}/installation", {
      username: username as string
    });
    console.log(result);
    const INSTALLATION_ID = result.data.id;

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
