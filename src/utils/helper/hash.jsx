import { AES, enc } from "crypto-js";

export const hashId = (id) => {
  const hash = AES.encrypt(String(id), process.env.EXPO_PUBLIC_SECRET_KEY).toString();

  return hash;
};

export const unhashId = (hash) => {
  const idByte = AES.decrypt(hash, process.env.EXPO_PUBLIC_SECRET_KEY);

  const id = idByte.toString(enc.Utf8);

  return id;
};
