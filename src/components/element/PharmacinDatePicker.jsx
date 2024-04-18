import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { useController } from "react-hook-form";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useDatePicker from "@hooks/useDatePicker";
import { DatePickerModal } from "react-native-paper-dates";
import moment from "moment";

const PharmacinDatePicker = ({ control, inputData, validationError }) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const { showPicker, openDatePicker, closeDatePicker, pickDate } =
    useDatePicker();

  return (
    <View style={styles.container}>
      {inputData.outside && (
        <Text style={[systemFonts.H3, styles.outside]}>
          {inputData.placeholder}
        </Text>
      )}

      <Pressable
        style={[
          styles.inputBox,
          {
            borderColor: validationError ? colors.Danger : colors.LightBorder,
          },
        ]}
        onPress={openDatePicker}
      >
        <Text
          style={[
            styles.input,
            systemFonts.H4,
            { color: field.value ? colors.Black : colors.Placeholder },
          ]}
        >
          {field.value
            ? moment(field.value).format("DD-MM-YYYY")
            : inputData.placeholder}
        </Text>
      </Pressable>

      <DatePickerModal
        locale="id"
        mode="single"
        visible={showPicker}
        date={field.value}
        presentationStyle="pageSheet"
        onDismiss={closeDatePicker}
        onConfirm={(params) => pickDate(params, field)}
      />
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
  outside: {
    color: colors.SubTitle,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  input: {
    flex: 1,
    textAlign: "center",
  },
});
