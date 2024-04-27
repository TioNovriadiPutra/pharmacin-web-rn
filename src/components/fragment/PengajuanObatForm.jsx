import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import Cart from "@components/element/Cart";

const PengajuanObatForm = ({ formData, control, setValue }) => {
  return (
    <View style={styles.container}>
      {formData.pengajuanObatSection.map((item, index) => (
        <View style={styles.cartContainer}>
          <Cart
            key={index.toString()}
            cartData={item}
            control={control}
            setValue={setValue}
          />
        </View>
      ))}
    </View>
  );
};

export default PengajuanObatForm;

PengajuanObatForm.propType = {
  formData: object.isRequired,
  control: any.isRequired,
  setValue: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    gap: 14,
    width: Dimensions.get("window").width - 96,
  },
  cartContainer: {
    height: 366,
  },
});
