import { SHA256 } from "crypto-js";

export const hashId = (id) => {
  const hash = SHA256(String(id)).toString();

  return hash;
};

export const unhashId = (hash) => {
  const id = SHA256(hash).toString();

  return id;
};
