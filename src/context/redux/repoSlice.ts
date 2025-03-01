import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { app } from "@/backend/octokit";
import { App } from "octokit";

interface Repo {
   name: any;

}
const initialState: Repo = {
   name: null
}

const repoSlice = createSlice({
   name: "repo",
   initialState,
   reducers: {
      setRepo: (state, action) => {
         state.name = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(setRepoAsync.fulfilled, (state, action) => {
            state.name = action.payload;
         });
   }
});

const setRepoAsync = createAsyncThunk(
   "repo/setRepoAsync",
   async (params: { username: string, userId: string }) => {
      const { username, userId } = params;
      const result = await fetch(`/api/repo/repos?username=${username}&id=${userId}`);
      const repo = await result.json();
      console.log(repo.data);
      return repo.data;
   }
)
export const { setRepo } = repoSlice.actions;
export { setRepoAsync };
export default repoSlice.reducer;