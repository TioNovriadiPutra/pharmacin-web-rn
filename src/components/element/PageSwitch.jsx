import { StyleSheet, View } from "react-native";
import React from "react";
import { array, object, oneOfType, string } from "prop-types";
import SubmitButton from "./SubmitButton";
import { useRecoilState } from "recoil";
import { switchIndexState } from "@store/atom/pageState";
import { colors } from "@themes/colors";

const PageSwitch = ({ switchData, color, buttonStyle, containerStyle }) => {
  const [switchIndex, setSwitchIndex] = useRecoilState(switchIndexState);

  const onSwitch = (index) => {
    setSwitchIndex(index);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {switchData.map((item, index) => (
        <SubmitButton key={index.toString()} label={item.label} color={switchIndex === index ? color : colors.Inactive} buttonStyle={buttonStyle || styles.button} onPress={() => onSwitch(index)} />
      ))}
    </View>
  );
};

export default PageSwitch;

PageSwitch.propTypes = {
  switchData: array.isRequired,
  color: string.isRequired,
  buttonStyle: oneOfType([object, array]),
  containerStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  button: {
    paddingHorizontal: 42,
  },
});
