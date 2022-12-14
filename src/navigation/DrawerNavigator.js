import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HOME, PROFILE, ABOUT } from "../constants/routes/names";
import SideMenu from "./Drawer/SideMenu";
import { GlobalContext } from "../context/Provider";
import Tabs from "./Tabs";
import ProfileScreen from "../screens/Profile";
import AboutScreen from "../screens/About";
import { COLORS } from "../constants";

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const { authDispatch } = React.useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName={HOME}
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen
        name={HOME}
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          title: "Usuario",
        }}
      />
      <Drawer.Screen
        name={ABOUT}
        component={AboutScreen}
        options={{
          title: "Acerca de Fireload NB",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
