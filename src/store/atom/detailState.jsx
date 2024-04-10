import { atom } from "recoil";

export const showDetailModalState = atom({
  key: "showDetailModalState",
  default: false,
});

export const detailDataState = atom({
  key: "detailDataState",
  default: null,
});
