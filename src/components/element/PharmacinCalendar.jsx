import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { any, object } from "prop-types";
import { colors } from "@themes/colors";
import { useController } from "react-hook-form";
import { systemFonts } from "@themes/fonts";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

const PharmacinCalendar = ({ control, inputData, validationError }) => {
  const [showPicker, setShowPicker] = useState(false);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const handlePicker = () => {
    setShowPicker(!showPicker);
  };

  const onPick = (params) => {
    field.onChange(params.date);
    setShowPicker(false);
  };

  return (
    <View style={[styles.container, { zIndex: showPicker ? 2 : 1 }]}>
      <Pressable
        style={[
          styles.inputBox,
          { borderColor: validationError ? colors.Danger : colors.LightBorder },
        ]}
        onPress={handlePicker}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.input,
            systemFonts.H4,
            { color: field.value ? colors.Black : colors.Placeholder },
          ]}
        >
          {field.value
            ? dayjs(field.value).format("DD-MM-YYYY")
            : inputData.outside
            ? "DD-MM-YYYY"
            : inputData.placeholder}
        </Text>
      </Pressable>

      {showPicker && (
        <View style={styles.picker}>
          <DateTimePicker
            mode="single"
            date={field.value || dayjs()}
            onChange={onPick}
          />
        </View>
      )}
    </View>
  );
};

export default PharmacinCalendar;

PharmacinCalendar.propTypes = {
  control: any.isRequired,
  inputData: object.isRequired,
  validationError: object,
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  inputBox: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.White,
    borderWidth: 1,
  },
  input: {
    flex: 1,
  },
  picker: {
    position: "absolute",
    left: 10,
    right: 10,
    backgroundColor: colors.White,
    borderRadius: 8,
    shadowColor: colors.Shadow,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 12,
    top: "110%",
  },
});
