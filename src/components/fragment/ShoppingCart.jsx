import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { any, array, object } from "prop-types";
import ShoppingCartHeader from "@components/element/ShoppingCartHeader";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import ShoppingCartList from "@components/element/ShoppingCartList";

const ShoppingCart = ({ control, cartData, listData }) => {
  return (
    <View style={styles.container}>
      {cartData.placeholder && (
        <Text style={styles.placeholder}>{cartData.placeholder}</Text>
      )}

      <ShoppingCartHeader headerData={cartData.headers} />

      <ShoppingCartList
        control={control}
        listData={listData}
        actions={cartData.actions}
        template={cartData.template}
        listName={cartData.name}
      />
    </View>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  control: any.isRequired,
  cartData: object.isRequired,
  listData: array.isRequired,
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
