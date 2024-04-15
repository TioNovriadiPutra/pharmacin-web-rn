const config = {
  screens: {
    Splash: "",
    Login: "login",
    Register: "register",
    Dashboard: "dashboard",
    Pendaftaran: "pendaftaran",
    PasienStack: {
      screens: {
        Pasien: "pasien",
        PasienRecord: "pasien/riwayat",
        PasienRecordDetail: "pasien/riwayat/:id",
      },
    },
    StokStack: {
      screens: {
        Stok: "stok",
        StokOpname: "stok/opname",
        StokOpnameDetail: "stok/opname/:id",
        StokRiwayatOpname: "stok/riwayat",
      },
    },
    ObatStack: {
      screens: {
        ObatKategori: "obat/kategori",
        ObatKelola: "obat/kelola",
        ObatRacikan: "obat/racikan",
      },
    },
    PabrikanStack: {
      screens: {
        Pabrikan: "pabrikan",
        PabrikanDetail: "pabrikan/:id",
      },
    },
    PembelianStack: {
      screens: {
        PembelianTambah: "pembelian/tambah",
        PembelianKelola: "pembelian",
      },
    },
  },
};

export const linking = {
  config,
};
