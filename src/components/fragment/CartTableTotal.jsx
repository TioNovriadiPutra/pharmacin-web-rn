import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { number } from "prop-types";
import { fonts, systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const CartTableTotal = ({ totalData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total</Text>

      <Text style={[systemFonts.H3, styles.total]}>{totalData}</Text>
    </View>
  );
};

export default CartTableTotal;

CartTableTotal.propTypes = {
  totalData: number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    paddingVertical: 17,
    backgroundColor: colors.Default,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.SubTitle,
    textAlign: "center",
  },
  total: {
    position: "absolute",
    right: 28,
    color: colors.Black,
  },
});
