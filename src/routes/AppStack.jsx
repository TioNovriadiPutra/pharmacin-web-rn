import CustomDrawer from "@components/layout/CustomDrawer";
import { Drawer } from "@utils/config/navigation";
import Dashboard from "@views/app/Dashboard";

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        drawerType: "permanent",
        drawerStyle: {
          width: 68,
          overflow: "visible",
        },
      })}
      drawerContent={(prop) => <CustomDrawer {...prop} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
