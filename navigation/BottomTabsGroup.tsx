import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { Ionicons } from "@expo/vector-icons";
export default function BottomTabsGroup() {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#0f172b",
        },
        headerTintColor: "#ccc",
        tabBarStyle: {
          backgroundColor: "#0f172a",
        },
        tabBarActiveTintColor: "#f8fafc",

        tabBarInactiveTintColor: "#64748b",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "home" : "home-outline"}`}
              color={color}
              size={size}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "cart" : "cart-outline"}`}
              color={color}
              size={size}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`${focused ? "information" : "information-outline"}`}
              color={color}
              size={size}
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}
