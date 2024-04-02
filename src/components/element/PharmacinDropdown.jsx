import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { any, object } from "prop-types";
import { useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";
import useDropdown from "@hooks/useDropdown";
import Animated from "react-native-reanimated";

const PharmacinDropdown = ({ control, inputData, validationError }) => {
  const {
    showDropdown,
    handleDropdown,
    handleItem,
    dropdownIconAnimatedStyle,
  } = useDropdown();
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.inputBox,
          {
            borderColor: validationError ? colors.Danger : colors.LightBorder,
          },
        ]}
        onPress={handleDropdown}
      >
        <Text
          style={[
            styles.input,
            systemFonts.H4,
            { color: field.value ? colors.Black : colors.Placeholder },
          ]}
        >
          {field.value ? field.value.label : inputData.placeholder}
        </Text>

        <Animated.Image
          source={require("@assets/images/dropdown.png")}
          style={dropdownIconAnimatedStyle}
        />
      </Pressable>

      {validationError && (
        <Text style={[styles.error, systemFonts.P]}>
          {validationError.message}
        </Text>
      )}

      {showDropdown && (
        <View style={styles.dropdown}>
          {inputData.items.map((item, index) => (
            <Pressable
              key={index.toString()}
              style={styles.dropdownItem}
              onPress={() => handleItem(field, item)}
            >
              <View style={styles.itemBackdrop}>
                <Text>{item.label}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default PharmacinDropdown;

PharmacinDropdown.propTypes = {
  control: any.isRequired,
  inputData: object.isRequired,
  validationError: object,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  input: {
    flex: 1,
  },
  error: {
    position: "absolute",
    top: "100%",
    left: 14,
    color: colors.Danger,
  },
  dropdown: {
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
  dropdownItem: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  itemBackdrop: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
