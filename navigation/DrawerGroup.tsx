import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabsGroup from "./BottomTabsGroup";
import SettingsScreen from "../screens/SettingsScreen";
import LayoutScreen from "../screens/LayoutsScreen";
import { Ionicons } from "@expo/vector-icons";
export const DrawerGroup = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0f172b",
        },
        headerTintColor: "#ccc",

        drawerContentStyle: {
          backgroundColor: "#0f172a",
        },
        drawerItemStyle: {
          backgroundColor: "#0f172a",
        },
        drawerActiveTintColor: "#f8fafc",
        drawerInactiveTintColor: "#64748b",
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabsGroup}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "hammer" : "hammer-outline"}`}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Layout"
        component={LayoutScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "layers" : "layers-outline"}`}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "settings" : "settings-outline"}`}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Logout"
        component={BottomTabsGroup}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "log-out" : "log-out-outline"}`}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
