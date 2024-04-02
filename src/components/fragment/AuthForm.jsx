import { StyleSheet, View } from "react-native";
import React from "react";
import { array, func } from "prop-types";
import Form from "./Form";
import { useForm } from "react-hook-form";
import SubmitButton from "@components/element/SubmitButton";

const AuthForm = ({ formData, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });

  return (
    <View style={styles.container}>
      <View style={styles.layoutContainer}>
        {formData.layouts.map((layout, index) => (
          <View key={index.toString()} style={styles.layout}>
            <Form control={control} inputListData={layout.inputs} />
          </View>
        ))}
      </View>

      <SubmitButton
        label={formData.submitButton.label}
        color={formData.submitButton.color}
        buttonStyle={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  formData: array.isRequired,
  onSubmit: func,
};

const styles = StyleSheet.create({
  container: {
    gap: 58,
  },
  layoutContainer: {
    flexDirection: "row",
    gap: 50,
  },
  layout: {
    width: 320,
  },
  button: {
    paddingHorizontal: 107,
  },
});
