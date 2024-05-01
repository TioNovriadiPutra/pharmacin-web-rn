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
        PembelianInvoice: "pembelian/:id",
      },
    },
    ManajemenStack: {
      screens: {
        ManajemenKlinik: "manajemen/klinik",
        ManajemenAdministrator: "manajemen/administrator",
        ManajemenKaryawan: "manajemen/karyawan",
        ManajemenDokter: "manajemen/dokter",
        ManajemenAsistenDokter: "manajemen/asisten-dokter",
        ManajemenKasir: "manajemen/riwayat-kasir",
        ManajemenDiagnosis: "manajemen/diagnosis",
        ManajemenLaborat: "manajemen/laborat",
        ManajemenTindakan: "manajemen/tindakan",
      },
    },
    DokterStack: {
      screens: {
        DokterPasien: "dokter/pasien",
        DokterPerawatan: "dokter/perawatan/:id",
      },
    },
  },
};

export const linking = {
  config,
};
