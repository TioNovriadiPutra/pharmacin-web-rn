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

export const showPendaftaranModalState = atom({
  key: "showPendaftaranModalState",
  default: false,
});

export const pendaftaranModalData = atom({
  key: "pendaftaranModalData",
  default: {
    fullName: "",
  },
});

export const rowIdState = atom({
  key: "rowIdState",
  default: null,
});

export const pembelianHeaderState = atom({
  key: "pembelianHeaderState",
  default: null,
});

export const switchIndexState = atom({
  key: "stockSwitchIndexState",
  default: 0,
});
