import { atom } from "recoil";

export const drawerStatusState = atom({
  key: "drawerStatusState",
  default: false,
});

export const drawerIndexState = atom({
  key: "drawerIndexState",
  default: null,
});

export const drawerSubMenuIndexState = atom({
  key: "drawerSubMenuIndexState",
  default: null,
});

export const showDrawerProfileMenuState = atom({
  key: "showDrawerProfileMenuState",
  default: false,
});
