import { colors } from "@themes/colors";

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
      placeholder: "Komposisi",
    },
    {
      type: "dropdown",
      name: "categoryId",
      placeholder: "Kategori",
      items: [],
    },
    {
      type: "text",
      name: "shelve",
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
