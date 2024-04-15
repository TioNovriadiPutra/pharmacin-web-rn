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
      quantity: "",
      purchasePrice: 0,
      totalPrice: 0,
    },
    actions: [
      {
        type: "delete",
      },
    ],
    onAdd: (append, parentName, templateForm, template) => {
      const data = JSON.parse(JSON.stringify(template));

      const inputData = JSON.parse(JSON.stringify(getRecoil(purchaseTransactionCartsState)));

      const newData = data.map((tmp) => {
        Object.assign(tmp, {
          ...tmp,
          name: `${parentName}.${inputData.length}.${tmp.name}`,
        });

        return tmp;
      });

      inputData.push(newData);

      setRecoil(purchaseTransactionCartsState, inputData);

      append(templateForm);
    },
  },
  defaultValues: {
    factoryId: null,
    createdAt: moment().format("DD-MM-YYYY"),
    totalPrice: 0,
    purchaseItems: [],
  },
};
