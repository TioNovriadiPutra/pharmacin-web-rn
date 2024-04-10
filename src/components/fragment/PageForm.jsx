import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { systemFonts } from "@themes/fonts";
import { object } from "prop-types";
import { colors } from "@themes/colors";
import Form from "./Form";
import { useForm } from "react-hook-form";
import Bar from "@components/element/Bar";
import SubmitButton from "@components/element/SubmitButton";

const PageForm = ({ formData }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[systemFonts.H1, styles.title]}>
        {formData.title}
      </Text>

      <View style={styles.formContainer}>
        <Form control={control} inputListData={formData.inputs} />
      </View>

      <Bar containerStyle={styles.bar} />

      <SubmitButton label={formData.submitButton.label} color={formData.submitButton.color} buttonStyle={styles.button} onPress={handleSubmit((data) => formData.onSubmit(data))} />
    </View>
  );
};

export default PageForm;

PageForm.propTypes = {
  formData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.Title,
    textAlign: "center",
    marginBottom: 34,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.LightBorder,
  },
  formContainer: {
    marginHorizontal: 32,
    flex: 1,
  },
  bar: {
    marginTop: 42,
    marginBottom: 14,
  },
  button: {
    alignSelf: "auto",
    alignItems: "center",
    marginHorizontal: 32,
  },
});
