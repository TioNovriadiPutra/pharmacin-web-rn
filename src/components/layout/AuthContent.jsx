import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { object, oneOf } from "prop-types";
import AuthContentHeader from "@components/fragment/AuthContentHeader";
import AuthForm from "@components/fragment/AuthForm";
import AuthContentFooter from "@components/fragment/AuthContentFooter";
import useAuthController from "src/controllers/authController";
import { useNavigation } from "@react-navigation/native";
import ScrollContainer from "@containers/ScrollContainer";

const AuthContent = ({ type, contentData }) => {
  const nav = useNavigation();

  const { login, register } = useAuthController(nav);

  return (
    <View style={styles.container}>
      <Image source={require("@assets/images/logoFull.png")} />

      <ScrollContainer
        containerStyle={[
          styles.box,
          type === "login" ? styles.boxLogin : styles.boxRegister,
        ]}
      >
        <View
          style={[
            styles.form,
            type === "login" ? styles.formLogin : styles.formRegister,
          ]}
        >
          <AuthContentHeader headerData={contentData.header} />

          <AuthForm
            formData={contentData.form}
            onSubmit={type === "login" ? login : register}
          />
        </View>

        {type === "login" && <AuthContentFooter />}
      </ScrollContainer>

      {/* <ScrollView contentContainerStyle={[styles.box]}></ScrollView> */}
    </View>
  );
};

export default AuthContent;

AuthContent.propTypes = {
  type: oneOf(["login", "register"]).isRequired,
  contentData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    gap: 26,
    alignItems: "center",
    height: "100%",
    zIndex: 2,
  },
  box: {
    backgroundColor: colors.White,
    paddingHorizontal: 45,
    paddingVertical: 42,
    borderRadius: 10,
    gap: 18,
    flex: 1,
  },
  boxLogin: {
    width: 484,
  },
  boxRegister: {
    minWidth: 484,
  },
  form: {
    paddingHorizontal: 37,
    borderBottomColor: colors.Border,
  },
  formLogin: {
    borderBottomWidth: 1,
    paddingBottom: 34,
    gap: 70,
  },
  formRegister: {
    gap: 47,
  },
});
