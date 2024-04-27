import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { useController } from "react-hook-form";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const PharmacinTextAreaInput = ({ inputData, control }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      <Text style={[systemFonts.H3, styles.placeholder]}>
        {inputData.placeholder}
      </Text>

      <View style={styles.inputBox}>
        <TextInput
          value={field.value}
          placeholder="Masukan data pasien"
          placeholderTextColor={colors.Placeholder}
          onChangeText={field.onChange}
          style={[styles.input, systemFonts.H4]}
          multiline
        />
      </View>
    </View>
  );
};

export default PharmacinTextAreaInput;

PharmacinTextAreaInput.propType = {
  inputData: object.isRequired,
  control: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    gap: 6,
  },
  inputBox: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.LightBorder,
    height: 92,
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
  },
});
