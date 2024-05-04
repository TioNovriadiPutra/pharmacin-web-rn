import { colors } from "@themes/colors";

export const pabrikanDetail = {
  title: "",
  detailData: {
    title: "Informasi Pabrik",
    list: [
      {
        placeholder: "Nama Pabrik",
        data: "",
      },
      {
        placeholder: "Email Pabrik",
        data: "",
      },
      {
        placeholder: "Telepon Pabrik",
        data: "",
      },
    ],
    footer: [
      {
        tag: "Jenis Obat",
        value: 0,
      },
    ],
  },
  headerData: ["Nama Obat", "Nama Generik", "Kategori", "Harga Beli", "Harga Jual", "Takaran", "Stock"],
  tableData: [],
};

export const obatDetail = {
  detailData: {
    title: "Informasi Obat",
    list: [
      {
        placeholder: "ID",
        data: "",
      },
      {
        placeholder: "Nama Obat",
        data: "",
      },
      {
        placeholder: "Nama Generik",
        data: "",
      },
      {
        placeholder: "Satuan",
        data: "",
      },
      {
        placeholder: "Komposisi",
        data: "",
      },
      {
        placeholder: "Kategori",
        data: "",
      },
      {
        placeholder: "Rak",
        data: "",
      },
      {
        placeholder: "Pabrikan",
        data: "",
      },
      {
        placeholder: "Harga Beli Pabrikan",
        data: "",
      },
      {
        placeholder: "Harga Jual",
        data: "",
      },
    ],
    footer: [
      {
        tag: "Stok",
        value: 0,
      },
      {
        tag: "Total Penjualan",
        value: 0,
      },
      {
        tag: "Total Pembelian",
        value: 0,
      },
    ],
  },
};

export const pembelianDetail = {
  title: "Invoice Pembelian",
  detailBlock: [
    [
      {
        title: "No. Invoice",
        value: "",
      },
      {
        title: "Nama Pabrik",
        value: "",
      },
      {
        title: "Tanggal",
        value: "",
      },
    ],
  ],
  detailData: [
    {
      headerData: [
        { title: "Nama Obat", type: "text" },
        { title: "Kadaluarsa", type: "text" },
        { title: "QTY", type: "text" },
        { title: "Harga", type: "text" },
        { title: "Total", type: "text" },
      ],
      cartData: [],
    },
  ],
};

export const manajemenKlinikDetail = {
  detailData: {
    list: [
      {
        type: "text",
        placeholder: "Nama Klinik",
        data: "",
      },
      {
        type: "text",
        placeholder: "Alamat",
        data: "",
      },
      {
        type: "text",
        placeholder: "Telepon",
        data: "",
      },
      {
        type: "currency",
        placeholder: "Pajak Rawat Jalan",
        data: "",
      },
      {
        type: "currency",
        placeholder: "Pajak Pembelian Obat",
        data: "",
      },
    ],
  },
};

export const dokterPerawatanDetail = {
  title: "Form Perawatan",
  detailBlock: [
    [
      {
        title: "No. Registrasi",
        value: "",
      },
      {
        title: "No. RM",
        value: "",
      },
      {
        title: "Nama",
        value: "",
      },
      {
        title: "TTL",
        value: "",
      },
      {
        title: "Alamat",
        value: "",
      },
    ],
    [
      {
        title: "Tgl. Periksa",
        value: "",
      },
      {
        title: "Dokter",
        value: "",
      },
      {
        title: "Alergi",
        value: "",
      },
    ],
  ],
  headerFunction: {
    function: [
      {
        type: "switchAss",
        switchData: [
          {
            label: "Assessment",
          },
          {
            label: "Pengajuan Obat",
          },
          {
            label: "Tindakan",
          },
        ],
        color: colors.Primary,
      },
    ],
  },
};
