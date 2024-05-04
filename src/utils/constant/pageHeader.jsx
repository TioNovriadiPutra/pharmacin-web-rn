import { formDataState } from "@store/atom/formState";
import { showFormModalState } from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { setRecoil } from "recoil-nexus";
import {
  addDrugCategoryForm,
  addDrugFactoryForm,
  addDrugForm,
  addPatientForm,
  manajemenAdministratorForm,
  manajemenKaryawanForm,
  updateClinicForm,
} from "./form";

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
    defaultValues: {
      searchKategori: "",
    },
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
    defaultValues: {
      searchObat: "",
    },
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
    defaultValues: {
      searchResep: "",
    },
  },
};

export const pembelianTambahHeader = {
  headerTitle: {
    title: "Pembelian",
  },
};

export const pembelianKelolaHeader = {
  headerTitle: {
    title: "Pembelian",
    subTitle: "/ Kelola Pembelian",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Pembelian",
        color: colors.Primary,
      },
      {
        type: "search",
        name: "searchPembelian",
      },
    ],
    defaultValues: {
      searchPembelian: "",
    },
  },
};

export const stokHeader = {
  headerTitle: {
    title: "Stok",
    subTitle: "/ Stok",
  },
  headerFunction: {
    function: [
      {
        type: "switch",
        switchData: [
          {
            label: "Per Item",
          },
          {
            label: "Per Batch",
          },
        ],
        color: colors.Primary,
      },
      {
        type: "search",
        name: "searchStock",
      },
    ],
    defaultValues: {
      searchStock: "",
    },
  },
};

export const pendaftaranHeader = {
  headerTitle: {
    title: "Pendaftaran",
    subTitle: "/ Daftar Pasien",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Daftar Pasien Baru",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, addPatientForm);
        },
      },
    ],
  },
  headerFunction2: {
    function: [
      {
        type: "switch",
        switchData: [
          {
            label: "Daftar Antrian",
          },
          {
            label: "Daftar Pasien Terdaftar",
          },
        ],
        color: colors.Primary,
      },
      {
        type: "search",
        name: "searchPasien",
      },
    ],
    defaultValues: {
      searchPasien: "",
    },
  },
};

export const manajemenKlinikHeader = {
  headerTitle: {
    title: "Manajemen",
    subTitle: "/ Klinik",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Ubah Informasi",
        color: colors.Info,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, updateClinicForm);
        },
      },
    ],
  },
};

export const manajemenAdministratorHeader = {
  headerTitle: {
    title: "Manajemen",
    subTitle: "/ Administrator",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Akun",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, manajemenAdministratorForm);
        },
      },
    ],
  },
};

export const manajemenKaryawanHeader = {
  headerTitle: {
    title: "Manajemen",
    subTitle: "/ Karyawan",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Akun",
        color: colors.Primary,
        onPress: () => {
          setRecoil(showFormModalState, true);
          setRecoil(formDataState, manajemenKaryawanForm);
        },
      },
      {
        type: "search",
        name: "searchEmployee",
      },
    ],
  },
};

export const manajemenDokterHeader = {
  headerTitle: {
    title: "Manajemen",
    subTitle: "/ Dokter",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Akun",
        color: colors.Primary,
      },
      {
        type: "search",
        name: "searchDoctor",
      },
    ],
  },
};

export const dokterPasienHeader = {
  headerTitle: {
    title: "Dokter",
    subTitle: "/ Pemeriksaan Pasien",
  },
};

export const manajemenLaboratHeader = {
  headerTitle: {
    title: "Manajemen",
    subTitle: "/ Laborat",
  },
  headerFunction: {
    function: [
      {
        type: "button",
        label: "Tambah Laborat",
        color: colors.Primary,
      },
      {
        type: "search",
        name: "searchLaborat",
      },
    ],
  },
};