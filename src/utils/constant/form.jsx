import { colors } from "@themes/colors";

export const addDrugFactoryForm = {
  title: "Tambah Pabrik",
  inputs: [
    {
      type: "text",
      name: "factoryName",
      placeholder: "Nama Pabrik",
      outside: true,
    },
    {
      type: "text",
      name: "factoryEmail",
      placeholder: "Email Pabrik",
      outside: true,
    },
    {
      type: "phone",
      name: "factoryPhone",
      placeholder: "Telepon Pabrik",
      outside: true,
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
