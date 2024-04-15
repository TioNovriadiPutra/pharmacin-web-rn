import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { any, array, string } from "prop-types";
import ShoppingCartHeader from "@components/element/ShoppingCartHeader";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import ShoppingCartList from "@components/element/ShoppingCartList";

const ShoppingCart = ({ control, cartInputData, cartPlaceholder, cartHeaderData, cartActionData }) => {
  return (
    <View style={styles.container}>
      {cartPlaceholder && <Text style={styles.placeholder}>{cartPlaceholder}</Text>}

      <ShoppingCartHeader headerData={cartHeaderData} />

      <ShoppingCartList control={control} listData={cartInputData} actions={cartActionData} />
    </View>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  control: any.isRequired,
  cartInputData: array.isRequired,
  cartPlaceholder: string,
  cartHeaderData: array.isRequired,
  cartActionData: array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    color: colors.Title,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    marginLeft: 14,
    marginTop: 14,
    marginBottom: 21,
  },
});
