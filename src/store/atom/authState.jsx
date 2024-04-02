import { atom } from "recoil";

export const tokenState = atom({
  key: "tokenState",
  default: null,
});

export const roleIdState = atom({
  key: "roleIdState",
  default: null,
});

export const paymentStatusState = atom({
  key: "paymentStatusState",
  default: null,
});
