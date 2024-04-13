import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";
import CurrencyInput from "react-native-currency-input";

const PharmacinCurrencyInput = ({ control, inputData, validationError }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputBox,
          {
            borderColor: validationError ? colors.Danger : colors.LightBorder,
          },
        ]}
      >
        <CurrencyInput
          value={field.value}
          onChangeValue={field.onChange}
          prefix="Rp. "
          style={[systemFonts.H4, styles.input]}
          placeholder={inputData.placeholder}
          placeholderTextColor={colors.Placeholder}
          precision={0}
        />
      </View>

      {validationError && <Text style={[styles.error, systemFonts.P]}>{validationError.message}</Text>}
    </View>
  );
};

export default PharmacinCurrencyInput;

PharmacinCurrencyInput.propTypes = {
  control: any.isRequired,
  inputData: object.isRequired,
  validationError: object,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  inputBox: {
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 10,
    backgroundColor: colors.White,
    borderWidth: 1,
  },
  input: {
    color: colors.Black,
    outlineStyle: "none",
    flex: 1,
  },
  error: {
    position: "absolute",
    top: "100%",
    left: 14,
    color: colors.Danger,
  },
});
