import { formDataState } from "@store/atom/formState";
import { showFormModalState } from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { setRecoil } from "recoil-nexus";
import { addDrugCategoryForm, addDrugFactoryForm, addDrugForm } from "./form";

export const pabrikanHeader = {
  headerTitle: {
    title: "Pabrikan",
    subTitle: "/ Kelola Pabrik",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Pabrikan",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, addDrugFactoryForm);
        },
      },
      {
        type: "search",
        name: "searchPabrikan",
      },
    ],
    defaultValues: {
      searchPabrikan: "",
    },
  },
};

export const obatKategoriHeader = {
  headerTitle: {
    title: "Obat",
    subTitle: "/ Kategori",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Kategori",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, addDrugCategoryForm);
        },
      },
      {
        type: "search",
        name: "searchKategori",
      },
    ],
  },
};

export const obatHeader = {
  headerTitle: {
    title: "Obat",
    subTitle: "/ Kelola",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Obat",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, addDrugForm);
        },
      },
      {
        type: "search",
        name: "searchObat",
      },
    ],
  },
};

export const obatRacikanHeader = {
  headerTitle: {
    title: "Obat",
    subTitle: "/ Racikan",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Resep",
        color: colors.Primary,
      },
      {
        type: "search",
        name: "searchResep",
      },
    ],
  },
};

export const pembelianTambahHeader = {
  headerTitle: {
    title: "Pembelian",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Batalkan Pembelian",
        color: colors.Danger,
      },
      {
        type: "button",
        label: "Tambah Pembelian",
        color: colors.Primary,
      },
    ],
  },
};
