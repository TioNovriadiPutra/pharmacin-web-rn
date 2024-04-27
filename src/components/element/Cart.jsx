import { StyleSheet, View } from "react-native";
import React from "react";
import ShoppingCart from "@components/fragment/ShoppingCart";
import SubmitButton from "./SubmitButton";
import { colors } from "@themes/colors";
import { any, object } from "prop-types";
import useCart from "@hooks/useCart";

const Cart = ({ control, cartData, setValue }) => {
  const { fields, onAdd } = useCart(cartData, control, setValue);

  return (
    <View style={styles.box}>
      <ShoppingCart control={control} cartData={cartData} listData={fields} />

      <SubmitButton
        label={cartData.buttonLabel}
        color={colors.Secondary}
        buttonStyle={styles.button}
        onPress={onAdd}
      />
    </View>
  );
};

export default Cart;

Cart.propType = {
  control: any.isRequired,
  cartData: object.isRequired,
  setValue: any.isRequired,
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 24,
    paddingBottom: 14,
    flex: 1,
  },
  button: {
    paddingHorizontal: 45,
  },
});
