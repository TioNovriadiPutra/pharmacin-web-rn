import { pembelianHeaderState } from "@store/atom/pageState";
import { pembelianTambahHeader } from "@utils/constant/pageHeader";
import { selector } from "recoil";

export const pembelianHeaderSelector = selector({
  key: "pembelianHeaderSelector",
  get: ({ get }) => {
    const headerFunction = get(pembelianHeaderState);

    if (headerFunction) {
      const headerData = {
        ...pembelianTambahHeader,
        ...headerFunction,
      };

      return headerData;
    }

    return pembelianTambahHeader;
  },
});
