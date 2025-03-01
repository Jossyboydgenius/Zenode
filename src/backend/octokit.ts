import { App } from "octokit";

const app = new App({
   appId: process.env.NEXT_PUBLIC_GITHUB_APP_ID as string,
   privateKey: process.env.NEXT_PUBLIC_GITHUB_TOKEN as string
});

// const octokit = await app.getInstallationOctokit(INSTALLATION_ID);

export { app };