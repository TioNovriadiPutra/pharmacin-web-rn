import { tokenState } from "@store/atom/authState";
import { selector } from "recoil";

export const isLoggedInSelector = selector({
  key: "isLoggedInSelector",
  get: ({ get }) => {
    const token = get(tokenState);

    console.log(token);

    return !!token;
  },
});
