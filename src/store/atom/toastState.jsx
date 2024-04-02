import { atom } from "recoil";

export const toastShowState = atom({
  key: "toastShowState",
  default: false,
});

export const toastTypeState = atom({
  key: "toastTypeState",
  default: "success",
});

export const toastMessageState = atom({
  key: "toastMessageState",
  default: "Hello World",
});
