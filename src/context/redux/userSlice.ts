import { app } from '@/backend/octokit';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
   user: IUser | null;
   isLoading: boolean;
   error: string | null;
}
// interface IUser {
//    id: string;
//    name: string;
//    email: string;
//    avatar_url: string;
//    installation_id: number
// }
export interface IUser {
   login: string;
   id: number;
   node_id: string;
   avatar_url: string;
   html_url: string;
   type: string;
   name: string | null;
   bio: string | null;
   blog: string;
   location: string | null;
   email: string | null;
   hireable: boolean | null;
   company: string | null;
   twitter_username: string | null;
   public_repos: number;
   public_gists: number;
   followers: number;
   following: number;
   created_at: string;
   updated_at: string;
   url: string;
   followers_url: string;
   following_url: string;
   gists_url: string;
   starred_url: string;
   subscriptions_url: string;
   organizations_url: string;
   repos_url: string;
   events_url: string;
   received_events_url: string;
   site_admin: boolean;
   gravatar_id: string;
   user_view_type?: string;
   installation_id: number;
}
// interface IUser {
//    id: string;
//    name: string;
//    email: string;
//    avatar_url: string;
//    installation_id: number;
// }

const initialState: UserState = {
   user: null,
   isLoading: false,
   error: null,
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<IUser>) => {
         state.user = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(setUserAsync.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(setUserAsync.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
         });
   }
})


const setUserAsync = createAsyncThunk(
   "user/setUserAsync",
   async (username: string) => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const gitdata = await response.json();
      let user = gitdata as IUser;
      console.log(user);
      const result = await fetch(`/api/git?username=${username}`, {
         method: 'GET'
      })
      const data = await result.json();
      user = {
         ...user,
         installation_id: data.data.id,
      }
      return user;
   }
)

export const { setUser } = userSlice.actions;
export { setUserAsync };
export default userSlice.reducer;
