import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const DetailItem = ({ itemData }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[systemFonts.H3, styles.placeholder]}>
        {itemData.placeholder}
      </Text>

      <View style={styles.box}>
        <Text numberOfLines={1} style={[systemFonts.P, styles.value]}>
          {itemData.data}
        </Text>
      </View>
    </View>
  );
};

export default DetailItem;

DetailItem.propTypes = {
  itemData: object,
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  placeholder: {
    color: colors.SubTitle,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.LightBorder,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  value: {
    color: colors.Black,
  },
});
