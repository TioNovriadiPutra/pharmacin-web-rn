import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";

const PharmacinCalculationInput = ({ inputData, control }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const handleNumber = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");

    field.onChange(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={[systemFonts.H3, styles.placeholder]}>
        {inputData.placeholder}
      </Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput
            value={field.value}
            placeholder="-"
            placeholderTextColor={colors.Placeholder}
            onChangeText={handleNumber}
            style={[styles.input, systemFonts.H4]}
          />
        </View>

        <Text style={[systemFonts.P, styles.unit]}>{inputData.unit}</Text>
      </View>
    </View>
  );
};

export default PharmacinCalculationInput;

PharmacinCalculationInput.propType = {
  inputData: object.isRequired,
  control: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    gap: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputBox: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    width: 59,
    borderWidth: 1,
    borderColor: colors.LightBorder,
  },
  placeholder: {
    color: colors.Role,
  },
  unit: {
    color: colors.Placeholder,
  },
  input: {
    color: colors.Black,
    outlineStyle: "none",
    flex: 1,
    textAlign: "center",
  },
});
