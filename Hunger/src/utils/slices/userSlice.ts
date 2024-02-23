import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  email: string;
  name: string;
  password: string;
};
interface IUser {
  [key: string]: User;
}
const initialState: IUser = {};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state[action.payload.email] = action.payload;
    },
  },
});

export const {addUser} =userSlice.actions

export default userSlice.reducer