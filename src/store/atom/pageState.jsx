import { atom } from "recoil";

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

export const showFormModalState = atom({
  key: "showFormModalState",
  default: false,
});

export const showValidationModalState = atom({
  key: "showValidationModalState",
  default: false,
});

export const rowIdState = atom({
  key: "rowIdState",
  default: null,
});
