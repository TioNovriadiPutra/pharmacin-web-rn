import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { userProfileDataState } from "@store/atom/userState";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const ProfileDescription = () => {
  const userProfileData = useRecoilValue(userProfileDataState);

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[systemFonts.H2, styles.name]}>
        {userProfileData.name}
      </Text>

      <Text numberOfLines={1} style={[systemFonts.P, styles.role]}>
        {userProfileData.role}
      </Text>
    </View>
  );
};

export default ProfileDescription;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    flex: 1,
  },
  name: {
    color: colors.Name,
  },
  role: {
    color: colors.Role,
  },
});
