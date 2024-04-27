import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import Cart from "@components/element/Cart";

const TindakanForm = ({ formData, control, setValue }) => {
  return (
    <View style={styles.container}>
      <Cart
        cartData={formData.tindakanSection}
        control={control}
        setValue={setValue}
      />
    </View>
  );
};

export default TindakanForm;
TindakanForm.propType = {
  formData: object.isRequired,
  control: any.isRequired,
  setValue: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width - 96,
  },
});
