import { colors } from "@themes/colors";

export const loginContent = {
  header: {
    title: "Masuk",
    subTitle: "Selamat datang, silahkan masuk dengan akun yang telah terdaftar",
  },
  form: {
    layouts: [
      {
        inputs: [
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
        ],
      },
    ],
    submitButton: {
      label: "Masuk",
      color: colors.Primary,
    },
    defaultValues: {
      email: "",
      password: "",
    },
  },
};

export const registerContent = {
  header: {
    title: "Daftar",
    subTitle: "Masukan alamat email dan kata sandi untuk membuat akun",
  },
  form: {
    layouts: [
      {
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
            type: "phone",
            name: "phone",
            placeholder: "Nomor Handphone",
          },
          {
            type: "text",
            name: "clinicName",
            placeholder: "Nama Klinik",
          },
          {
            type: "phone",
            name: "clinicPhone",
            placeholder: "Telepon Klinik",
          },
        ],
      },
      {
        inputs: [
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
      },
    ],
    submitButton: {
      label: "Daftar",
      color: colors.Secondary,
    },
    defaultValues: {
      fullName: "",
      gender: null,
      phone: "",
      clinicName: "",
      clinicPhone: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  },
};
