import { Stack } from "@utils/config/navigation";
import SplashScreen from "@views/SplashScreen";

const SplashStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SplashStack;
