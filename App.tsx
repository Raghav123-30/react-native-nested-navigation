import { NavigationContainer } from "@react-navigation/native";
import { DrawerGroup } from "./navigation/DrawerGroup";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
