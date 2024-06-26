import { purchaseTransactionCartsState } from "@store/atom/formState";
import { colors } from "@themes/colors";
import moment from "moment";
import { getRecoil, setRecoil } from "recoil-nexus";

export const addDrugFactoryForm = {
  title: "Tambah Pabrik",
  inputs: [
    {
      type: "text",
      name: "factoryName",
      placeholder: "Nama Pabrik",
    },
    {
      type: "text",
      name: "factoryEmail",
      placeholder: "Email Pabrik",
    },
    {
      type: "phone",
      name: "factoryPhone",
      placeholder: "Telepon Pabrik",
    },
  ],
  defaultValues: {
    factoryName: "",
    factoryEmail: "",
    factoryPhone: "",
  },
  submitButton: {
    label: "Tambah Pabrik",
    color: colors.Primary,
  },
};

export const addDrugCategoryForm = {
  title: "Tambah Kategori",
  inputs: [
    {
      type: "text",
      name: "categoryName",
      placeholder: "Nama Kategori",
    },
  ],
  defaultValues: {
    categoryName: "",
  },
  submitButton: {
    label: "Tambah Kategori",
    color: colors.Primary,
  },
};

export const addDrugForm = {
  title: "Tambah Obat",
  inputs: [
    {
      type: "text",
      name: "drug",
      placeholder: "Nama Obat",
    },
    {
      type: "text",
      name: "drugGenericName",
      placeholder: "Nama Generik",
    },
    {
      type: "dropdown",
      name: "unitId",
      placeholder: "Satuan",
      items: [],
    },
    {
      type: "number",
      name: "composition",
      placeholder: "Komposisi (Angka)",
    },
    {
      type: "dropdown",
      name: "categoryId",
      placeholder: "Kategori",
      items: [],
    },
    {
      type: "number",
      name: "shelve (Angka)",
      placeholder: "Rak",
    },
    {
      type: "dropdown",
      name: "factoryId",
      placeholder: "Pabrikan",
      items: [],
    },
    {
      type: "currency",
      name: "purchasePrice",
      placeholder: "Harga Beli Pabrikan",
    },
    {
      type: "currency",
      name: "sellingPrice",
      placeholder: "Harga Jual",
    },
  ],
  defaultValues: {
    drug: "",
    drugGenericName: "",
    unitId: null,
    composition: "",
    categoryId: null,
    shelve: "",
    factoryId: null,
    pruchasePrice: "",
    sellingPrice: "",
  },
  submitButton: {
    label: "Tambah Obat",
    color: colors.Primary,
  },
};

export const addPurchaseTransactionForm = {
  inputs1: [
    {
      type: "dropdown",
      name: "factoryId",
      placeholder: "Nama Pabrik",
      items: [],
      outside: true,
    },
    {
      type: "text",
      name: "createdAt",
      placeholder: "Tanggal",
      outside: true,
      readOnly: true,
    },
  ],
  inputs2: [
    {
      type: "currency",
      name: "totalPrice",
      placeholder: "Total",
      outside: true,
      readOnly: true,
    },
  ],
  carts: {
    headers: [
      { title: "Nama Obat", type: "text" },
      { title: "Kadaluarsa", type: "date" },
      { title: "QTY", type: "number" },
      { title: "Harga", type: "currency" },
      { title: "Total", type: "currency" },
      { title: "Tindakan", type: "action" },
    ],
    name: "purchaseItems",
    template: [
      {
        type: "dropdown",
        name: "drugId",
        placeholder: "Pilih Obat",
        items: [],
      },
      {
        type: "date",
        name: "expired",
        placeholder: "DD-MM-YYYY",
      },
      {
        type: "number",
        name: "quantity",
        placeholder: "Hanya Angka",
        center: true,
        readOnly: true,
      },
      {
        type: "currency",
        name: "purchasePrice",
        placeholder: "",
        readOnly: true,
      },
      {
        type: "currency",
        name: "totalPrice",
        placeholder: "",
        readOnly: true,
      },
    ],
    defaultValues: {
      drugId: null,
      expired: null,
      quantity: null,
      purchasePrice: 0,
      totalPrice: 0,
    },
    actions: [
      {
        type: "delete",
      },
    ],
  },
  defaultValues: {
    factoryId: null,
    createdAt: moment().format("DD-MM-YYYY"),
    totalPrice: 0,
    purchaseItems: [],
  },
};

export const addPatientForm = {
  title: "Tambah Pasien",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Pasien",
    },
    {
      type: "number",
      name: "nik",
      placeholder: "Nomor Induk KTP (NIK)",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      items: [
        {
          label: "Laki-laki",
          value: "male",
        },
        {
          label: "Perempuan",
          value: "female",
        },
      ],
    },
    {
      type: "dropdown",
      name: "occupationId",
      placeholder: "Jenis Pekerjaan",
      items: [],
    },
    {
      type: "text",
      name: "pob",
      placeholder: "Tempat Lahir",
    },
    {
      type: "date",
      name: "dob",
      placeholder: "Tanggal Lahir",
    },
    {
      type: "number",
      name: "phone",
      placeholder: "No. Handphone",
    },
    {
      type: "text",
      name: "allergy",
      placeholder: "Alergi Obat",
    },
  ],
  defaultValues: {
    fullName: "",
    nik: "",
    address: "",
    gender: null,
    occupationId: null,
    pob: "",
    dob: null,
    phone: "",
    allergy: "",
  },
  submitButton: {
    label: "Tambah Pasien",
    color: colors.Primary,
  },
};

export const addPatientQueueForm = {
  inputs: [
    {
      type: "dropdown",
      name: "doctorId",
      placeholder: "Pilih Dokter",
      items: [],
    },
  ],
  defaultValues: {
    doctorId: null,
  },
};

export const updateClinicForm = {
  title: "Ubah Informasi",
  inputs: [
    {
      type: "text",
      name: "clinicName",
      placeholder: "Nama Klinik",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
    },
    {
      type: "number",
      name: "clinicPhone",
      placeholder: "Telepon",
    },
    {
      type: "currency",
      name: "outpatientFee",
      placeholder: "Pajak Rawat Jalan",
    },
    {
      type: "currency",
      name: "sellingFee",
      placeholder: "Pajak Pembelian Obat",
    },
  ],
  defaultValues: {
    clinicName: "",
    address: "",
    clinicPhone: "",
    outpatientFee: "",
    sellingFee: "",
  },
  submitButton: {
    label: "Konfirmasi",
    color: colors.Primary,
  },
};

export const perawatanForm = {
  inputs: [
    {
      firstSection: [
        {
          type: "calculation",
          name: "weight",
          placeholder: "BB",
          unit: "Kg",
        },
        {
          type: "calculation",
          name: "height",
          placeholder: "TB",
          unit: "Cm",
        },
        {
          type: "calculation",
          name: "temperature",
          placeholder: "Suhu",
          unit: "°C",
        },
        {
          type: "calculation",
          name: "bloodPressure",
          placeholder: "T.Darah",
          unit: "MmHg",
        },
        {
          type: "calculation",
          name: "pulse",
          placeholder: "Nadi",
          unit: "/Menit",
        },
      ],
      secondSection: [
        [
          {
            type: "textarea",
            name: "subjective",
            placeholder: "Subjective",
          },
          {
            type: "textarea",
            name: "objective",
            placeholder: "Objective",
          },
        ],
        [
          {
            type: "textarea",
            name: "assessment",
            placeholder: "Assessment",
          },
          {
            type: "textarea",
            name: "plan",
            placeholder: "Plan",
          },
        ],
      ],
    },
    {
      pengajuanObatSection: [
        {
          name: "drugCarts",
          buttonLabel: "Tambah Obat",
          headers: [
            { title: "Nama Obat", type: "text" },
            { title: "QTY", type: "number" },
            { title: "Takaran", type: "text" },
            { title: "Aturan Pakai", type: "text" },
            { title: "Subtotal", type: "currency" },
            { title: "Tindakan", type: "action" },
          ],
          template: [
            {
              type: "dropdown",
              name: "drugId",
              placeholder: "Pilih Obat",
              items: [],
            },
            {
              type: "number",
              name: "quantity",
              placeholder: "Hanya Angka",
              center: true,
            },
            {
              type: "text",
              name: "unit",
              placeholder: "",
              readOnly: true,
            },
            {
              type: "text",
              name: "instruction",
              placeholder: "",
            },
            {
              type: "currency",
              name: "totalPrice",
              placeholder: "Rp. 0",
              readOnly: true,
            },
          ],
          defaultValues: {
            drugId: null,
            quantity: null,
            unit: "",
            instruction: "",
            totalPrice: 0,
          },
          actions: [
            {
              type: "delete",
            },
          ],
          checkRow: (watchCart, cartData, setValue) => {
            watchCart.forEach((item, index) => {
              if (item.drugId) {
                if (item.unit !== item.drugId.unit) {
                  setValue(`${cartData.name}.${index}.unit`, item.drugId.unit);
                }

                if (item.quantity) {
                  if (item.totalPrice !== item.quantity * item.drugId.sellingPrice) {
                    setValue(`${cartData.name}.${index}.totalPrice`, item.drugId.sellingPrice * item.quantity);
                  }
                } else {
                  if (item.totalPrice !== 0) {
                    setValue(`${cartData.name}.${index}.totalPrice`, 0);
                  }
                }
              }
            });
          },
        },
      ],
    },
    {
      tindakanSection: {
        name: "actions",
        buttonLabel: "Tambah Tindakan",
        headers: [
          { title: "Nama Tindakan", type: "text" },
          { title: "Biaya", type: "currency" },
          { title: "Tindakan", type: "action" },
        ],
        template: [
          {
            type: "dropdown",
            name: "actionId",
            placeholder: "Pilih Tindakan",
            items: [],
          },
          {
            type: "currency",
            name: "actionPrice",
            placeholder: "Rp. 0",
            center: true,
            readOnly: true,
          },
        ],
        defaultValues: {
          actionId: null,
          actionPrice: 0,
        },
        actions: [
          {
            type: "delete",
          },
        ],
        checkRow: (watchCart, cartData, setValue) => {
          watchCart.forEach((item, index) => {
            if (item.actionId) {
              if (item.actionPrice === 0) {
                setValue(`${cartData.name}.${index}.actionPrice`, item.actionId.actionPrice);
              }
            }
          });
        },
      },
    },
  ],
  defaultValues: {
    weight: "",
    height: "",
    temperature: "",
    bloodPressure: "",
    pulse: "",
    subjective: "",
    objective: "",
    assessment: "",
    plan: "",
    drugCarts: [],
    actions: [],
  },
};

export const manajemenAdministratorForm = {
  title: "Tambah Administrator",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Lengkap",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      items: [
        {
          label: "Laki-laki",
          value: "male",
        },
        {
          label: "Perempuan",
          value: "female",
        },
      ],
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Handphone",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    label: "Tambah Akun",
    color: colors.Primary,
  },
};

export const manajemenKaryawanForm = {
  title: "Tambah Karyawan",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Lengkap",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      items: [
        {
          label: "Laki-laki",
          value: "male",
        },
        {
          label: "Perempuan",
          value: "female",
        },
      ],
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Handphone",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    label: "Tambah Akun",
    color: colors.Primary,
  },
};

export const manajemenDokterForm = {
  title: "Tambah Dokter",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Lengkap",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      items: [
        {
          label: "Laki-laki",
          value: "male",
        },
        {
          label: "Perempuan",
          value: "female",
        },
      ],
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Handphone",
    },
    {
      type: "dropdown",
      name: "specialityId",
      placeholder: "Spesialisasi",
      items: [],
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    specialityId: null,
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    label: "Tambah Akun",
    color: colors.Primary,
  },
};

export const manajemenAsistenDokterForm = {
  title: "Tambah Asisten Dokter",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Lengkap",
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      items: [
        {
          label: "Laki-laki",
          value: "male",
        },
        {
          label: "Perempuan",
          value: "female",
        },
      ],
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Handphone",
    },
    {
      type: "dropdown",
      name: "doctorId",
      placeholder: "Dokter",
      items: [],
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    doctorId: null,
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    label: "Tambah Akun",
    color: colors.Primary,
  },
};

export const manajemenTindakanForm = {
  title: "Tambah Tindakan",
  inputs: [
    {
      type: "text",
      name: "actionName",
      placeholder: "Nama Tindakan",
    },
    {
      type: "currency",
      name: "actionPrice",
      placeholder: "Harga",
    },
  ],
  defaultValues: {
    actionName: "",
    actionPrice: "",
  },
  submitButton: {
    label: "Tambah Tindakan",
    color: colors.Primary,
  },
};
