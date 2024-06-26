import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { array, object, oneOfType } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const ShoppingCartHeader = ({ headerData, headerStyle }) => {
  return (
    <View style={[styles.container, headerStyle]}>
      {headerData.map((header, index) => (
        <Text key={index.toString()} style={[systemFonts.H3, styles.title, { textAlign: header.type === "action" || header.type === "number" || header.type === "date" ? "center" : "auto" }]}>
          {header.title}
        </Text>
      ))}
    </View>
  );
};

export default ShoppingCartHeader;

ShoppingCartHeader.propTypes = {
  headerData: array.isRequired,
  headerStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingVertical: 17,
    paddingHorizontal: 8,
    backgroundColor: colors.Default,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    color: colors.SubTitle,
  },
});
