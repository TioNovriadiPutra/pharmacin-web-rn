import { formatCurrency } from "react-native-format-currency";

export const currencyFormatter = (value) => {
  return formatCurrency({ amount: value, code: "IDR" })[0];
};
