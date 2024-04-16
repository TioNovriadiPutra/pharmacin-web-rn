import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { useController } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";

const PharmacinDatePicker = ({ control, inputData, validationError }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      <DatePicker />
    </View>
  );
};

export default PharmacinDatePicker;

PharmacinDatePicker.propTypes = {
  control: any.isRequired,
  inputData: object.isRequired,
  validationError: object,
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
    zIndex: 1,
  },
});
