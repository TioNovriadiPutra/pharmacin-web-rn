import { atom } from "recoil";

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

export const showFormModalState = atom({
  key: "showFormModalState",
  default: false,
});
