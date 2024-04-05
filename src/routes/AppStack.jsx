import CustomDrawer from "@components/layout/CustomDrawer";
import { roleIdState } from "@store/atom/authState";
import { Drawer, Stack } from "@utils/config/navigation";
import Dashboard from "@views/app/Dashboard";
import Notifikasi from "@views/app/Notifikasi";
import ObatKategori from "@views/app/Obat/ObatKategori";
import ObatKelola from "@views/app/Obat/ObatKelola";
import ObatRacikan from "@views/app/Obat/ObatRacikan";
import Pabrikan from "@views/app/Pabrikan/Pabrikan";
import PabrikanDetail from "@views/app/Pabrikan/PabrikanDetail";
import Pasien from "@views/app/Pasien/Pasien";
import PasienRecord from "@views/app/Pasien/PasienRecord";
import PasienRecordDetail from "@views/app/Pasien/PasienRecordDetail";
import Pendaftaran from "@views/app/Pendaftaran";
import Stok from "@views/app/Stok/Stok";
import StokOpname from "@views/app/Stok/StokOpname";
import StokOpnameDetail from "@views/app/Stok/StokOpnameDetail";
import StokRiwayatOpname from "@views/app/Stok/StokRiwayatOpname";
import { useRecoilValue } from "recoil";

const AppStack = () => {
  const roleId = useRecoilValue(roleIdState);

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
        name="Notifikasi"
        component={Notifikasi}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      {roleId === 1 || roleId === 5 ? (
        <>
          <Drawer.Screen
            name="Pendaftaran"
            component={Pendaftaran}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="PasienStack"
            component={PasienStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="StokStack"
            component={StokStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="ObatStack"
            component={ObatStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="PabrikanStack"
            component={PabrikanStack}
            options={{ headerShown: false }}
          />
        </>
      ) : null}
    </Drawer.Navigator>
  );
};

const PasienStack = () => {
  return (
    <Stack.Navigator initialRouteName="Pasien">
      <Stack.Screen
        name="Pasien"
        component={Pasien}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasienRecord"
        component={PasienRecord}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasienRecordDetail"
        component={PasienRecordDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StokStack = () => {
  return (
    <Stack.Navigator initialRouteName="Stok">
      <Stack.Screen
        name="Stok"
        component={Stok}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StokOpname"
        component={StokOpname}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StokOpnameDetail"
        component={StokOpnameDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StokRiwayatOpname"
        component={StokRiwayatOpname}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ObatStack = () => {
  return (
    <Stack.Navigator initialRouteName="ObatKategori">
      <Stack.Screen
        name="ObatKategori"
        component={ObatKategori}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ObatKelola"
        component={ObatKelola}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ObatRacikan"
        component={ObatRacikan}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const PabrikanStack = () => {
  return (
    <Stack.Navigator initialRouteName="Pabrikan">
      <Stack.Screen
        name="Pabrikan"
        component={Pabrikan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PabrikanDetail"
        component={PabrikanDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
