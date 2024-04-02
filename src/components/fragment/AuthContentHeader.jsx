import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const AuthContentHeader = ({ headerData }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, systemFonts.H1, styles.title]}>
        {headerData.title}
      </Text>

      <Text style={[styles.text, systemFonts.P, styles.subTitle]}>
        {headerData.subTitle}
      </Text>
    </View>
  );
};

export default AuthContentHeader;

AuthContentHeader.propTypes = {
  headerData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  text: {
    textAlign: "center",
  },
  title: {
    color: colors.DarkGray,
  },
  subTitle: {
    color: colors.Gray,
  },
});
