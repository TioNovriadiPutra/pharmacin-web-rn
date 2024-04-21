import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { array, oneOf } from "prop-types";
import ShoppingCartHeader from "@components/element/ShoppingCartHeader";
import PageTableBody from "@components/fragment/PageTableBody";
import CartTableTotal from "@components/fragment/CartTableTotal";

const CartTable = ({ cartData, type }) => {
  return (
    <ScrollView contentContainerStyle={type === "single" ? styles.listSingle : styles.listMultiple}>
      {cartData.map((cart, index) => (
        <View key={index.toString()} style={[styles.container, type === "single" && styles.containerSingle]}>
          <ShoppingCartHeader headerData={cart.headerData} headerStyle={styles.header} />

          <PageTableBody tableBodyData={cart.cartData} />

          <CartTableTotal totalData={cart.total} />
        </View>
      ))}
    </ScrollView>
  );
};

export default CartTable;

CartTable.propTypes = {
  cartData: array.isRequired,
  type: oneOf(["single", "multiple"]),
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    backgroundColor: colors.White,
    borderRadius: 10,
  },
  containerSingle: {
    flex: 1,
  },
  header: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  listMultiple: {
    gap: 14,
  },
  listSingle: {
    flexGrow: 1,
  },
});
