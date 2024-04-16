import { atom } from "recoil";

export const userProfileDataState = atom({
  key: "userProfileDataState",
  default: {
    name: "Nama User",
    role: "Jabaran",
  },
});
