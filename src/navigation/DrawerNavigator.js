import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME, PROFILE, ABOUT } from "../constants/routes/names";
import SideMenu from "./Drawer/SideMenu";
import { GlobalContext } from "../context/Provider";
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
    </View>
  );
};

const DrawerNavigator = () => {
  const { authDispatch } = React.useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName={HOME}
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
      <Drawer.Screen name={PROFILE} component={ProfileScreen} />
      <Drawer.Screen name={ABOUT} component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
