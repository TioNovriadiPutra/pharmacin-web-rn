import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@routes/AuthStack";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import SplashStack from "@routes/SplashStack";
import { linking } from "@utils/config/linking";
import ToastNotification from "@components/fragment/ToastNotification";
import LoadingModal from "@components/modal/LoadingModal";
import useAuthController from "src/controllers/authController";
import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "@store/selector/authSelector";
import AppStack from "@routes/AppStack";
import FormModal from "@components/modal/FormModal";
import DetailModal from "@components/modal/DetailModal";
import ValidationModal from "@components/modal/ValidationModal";
import PendaftaranConfirmationModal from "@components/modal/PendaftaranConfirmationModal";

const AppNav = () => {
  const [appReady, setAppReady] = useState(false);

  const checkLogin = useRecoilValue(isLoggedInSelector);

  const { isLoggedIn } = useAuthController();
  const [fontsLoaded] = useFonts({
    "PlusJakartaSans-Bold": require("@assets/fonts/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-SemiBold": require("@assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Medium": require("@assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-Regular": require("@assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      isLoggedIn();
      setTimeout(() => {
        setAppReady(true);
      }, 2000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ToastNotification />
      <LoadingModal />
      <FormModal />
      <DetailModal />
      <ValidationModal />
      <PendaftaranConfirmationModal />
      <NavigationContainer linking={linking}>
        {!appReady ? (
          <SplashStack />
        ) : checkLogin ? (
          <AppStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
