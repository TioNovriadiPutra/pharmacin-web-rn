import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts, systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";

const AuthContentFooter = () => {
  const nav = useNavigation();

  const handlePress = () => {
    nav.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Tidak punya akun?</Text>

      <Pressable onPress={handlePress}>
        <Text style={[systemFonts.H2, styles.label]}>Daftar disini</Text>
      </Pressable>
    </View>
  );
};

export default AuthContentFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 4,
  },
  question: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Gray,
  },
  label: {
    color: colors.Primary,
  },
});
