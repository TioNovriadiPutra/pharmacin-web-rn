import { atom } from "recoil";

export const validationErrorState = atom({
  key: "validationErrorState",
  default: null,
});

export const formDataState = atom({
  key: "formDataState",
  default: null,
});
