import { StyleSheet } from "react-native";

export const fonts = {
  Bold: "PlusJakartaSans-Bold",
  SemiBold: "PlusJakartaSans-SemiBold",
  Medium: "PlusJakartaSans-Medium",
  Regular: "PlusJakartaSans-Regular",
};

export const systemFonts = StyleSheet.create({
  H1: {
    fontFamily: fonts.Bold,
    fontSize: 24,
  },
  H2: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
  },
  H3: {
    fontFamily: fonts.Medium,
    fontSize: 16,
  },
  H4: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  P: {
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
  Button: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
  },
});
