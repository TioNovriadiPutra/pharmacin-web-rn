import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { array } from "prop-types";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";

const PageTableHeader = ({ tableHeaderData }) => {
  return (
    <View style={styles.container}>
      {tableHeaderData.map((header, index) => (
        <Text
          key={index.toString()}
          style={[
            systemFonts.H3,
            styles.label,
            { textAlign: header === "Tindakan" ? "center" : "auto" },
          ]}
        >
          {header}
        </Text>
      ))}
    </View>
  );
};

export default PageTableHeader;

PageTableHeader.propTypes = {
  tableHeaderData: array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    paddingHorizontal: 20,
    gap: 24,
  },
  label: {
    color: colors.SubTitle,
    flex: 1,
  },
});
