export const notifDrawer = {
  active: require("@assets/images/notifActive.png"),
  inactive: require("@assets/images/notifInactive.png"),
  label: "Notifikasi",
  destination: "Notifikasi",
};

export const drawerAll = [
  {
    active: require("@assets/images/dashboardActive.png"),
    inactive: require("@assets/images/dashboardInactive.png"),
    label: "Dashboard",
    destination: "Dashboard",
  },
];

export const drawerAdministrator = [
  ...drawerAll,
  {
    active: require("@assets/images/pendaftaranActive.png"),
    inactive: require("@assets/images/pendaftaranInactive.png"),
    label: "Pendaftaran",
    destination: "Pendaftaran",
  },
  {
    active: require("@assets/images/pasienActive.png"),
    inactive: require("@assets/images/pasienInactive.png"),
    label: "Pasien",
    destination: "PasienStack",
  },
  {
    active: require("@assets/images/stockActive.png"),
    inactive: require("@assets/images/stockInactive.png"),
    label: "Stok",
    destination: "StokStack",
    subMenu: [
      {
        label: "Stok",
        destination: "Stok",
      },
      {
        label: "Opname",
        destination: "StokOpname",
      },
      {
        label: "Riwayat Opname",
        destination: "StokRiwayatOpname",
      },
    ],
  },
  {
    active: require("@assets/images/obatActive.png"),
    inactive: require("@assets/images/obatInactive.png"),
    label: "Obat",
    destination: "ObatStack",
    subMenu: [
      {
        label: "Kategori",
        destination: "ObatKategori",
      },
      {
        label: "Kelola Obat",
        destination: "ObatKelola",
      },
      {
        label: "Obat Racikan",
        destination: "ObatRacikan",
      },
    ],
  },
  {
    active: require("@assets/images/pabrikanActive.png"),
    inactive: require("@assets/images/pabrikanInactive.png"),
    label: "Pabrikan",
    destination: "PabrikanStack",
  },
  {
    active: require("@assets/images/pembelianActive.png"),
    inactive: require("@assets/images/pembelianInactive.png"),
    label: "Pembelian",
    destination: "PembelianStack",
    subMenu: [
      {
        label: "Tambah Pembelian",
        destination: "PembelianTambah",
      },
      {
        label: "Kelola Pembelian",
        destination: "PembelianKelola",
      },
    ],
  },
];

export const drawerAdmin = [
  ...drawerAdministrator,
  {
    active: require("@assets/images/manajemenActive.png"),
    inactive: require("@assets/images/manajemenInactive.png"),
    label: "Manajemen",
    destination: "ManajemenStack",
    subMenu: [
      {
        label: "Klinik",
        destination: "ManajemenKlinik",
      },
      {
        label: "Karyawan",
        destination: "ManajemenKaryawan",
      },
      {
        label: "Dokter",
        destination: "ManajemenDokter",
      },
      {
        label: "Asisten Dokter",
        destination: "ManajemenAsistenDokter",
      },
      {
        label: "Riwayat Kasir",
        destination: "ManajemenKasir",
      },
      {
        label: "Diagnosis ICD-10",
        destination: "ManajemenDiagnosis",
      },
      {
        label: "Laborat",
        destination: "ManajemenLaborat",
      },
      {
        label: "Tindakan",
        destination: "ManajemenTindakan",
      },
    ],
  },
];

export const drawerDoctor = [
  ...drawerAll,
  {
    active: require("@assets/images/dokterActive.png"),
    inactive: require("@assets/images/dokterInactive.png"),
    label: "Dokter",
    destination: "DokterStack",
  },
];

export const settingMenu = [
  {
    label: "Pengaturan",
    icon: require("@assets/images/setting.png"),
  },
  {
    label: "Keluar",
    icon: require("@assets/images/logout.png"),
  },
];
