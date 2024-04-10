import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { number, object } from "prop-types";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";

const DetailFooterItem = ({ itemData, index }) => {
  return (
    <View style={[styles.container, { backgroundColor: index === 0 ? colors.Failed : index === 1 ? colors.LightBlue : colors.Success }]}>
      <Text numberOfLines={1} style={[systemFonts.H2, { color: index === 0 ? colors.Danger : index === 1 ? colors.Secondary : colors.Primary }]}>
        {itemData.value}
      </Text>

      <Text numberOfLines={2} style={[systemFonts.H4, { color: index === 0 ? colors.Danger : index === 1 ? colors.Secondary : colors.Primary }]}>
        {itemData.tag}
      </Text>
    </View>
  );
};

export default DetailFooterItem;

DetailFooterItem.propTypes = {
  itemData: object.isRequired,
  index: number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 86,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    overflow: "hidden",
  },
});
