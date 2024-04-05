import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const PageHeaderTitle = ({ headerTitleData }) => {
  return (
    <View style={styles.container}>
      <Text style={[systemFonts.H1, styles.title]}>
        {headerTitleData.title}
      </Text>

      <Text style={[systemFonts.H2, styles.subTitle]}>
        {headerTitleData.subTitle}
      </Text>
    </View>
  );
};

export default PageHeaderTitle;

PageHeaderTitle.propTypes = {
  headerTitleData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  title: {
    color: colors.DarkSecondary,
  },
  subTitle: {
    color: colors.SubTitle,
  },
});
