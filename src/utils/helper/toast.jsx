import {
  toastMessageState,
  toastShowState,
  toastTypeState,
} from "@store/atom/toastState";
import { setRecoil } from "recoil-nexus";

export const handleToast = (type, message) => {
  setRecoil(toastMessageState, message);
  setRecoil(toastTypeState, type);
  setRecoil(toastShowState, true);
};
