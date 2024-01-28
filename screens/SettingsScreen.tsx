import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbd5e1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
