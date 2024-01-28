import { View, Text, StyleSheet } from "react-native";
import React from "react";

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Layouts Screen</Text>
    </View>
  );
};

export default LayoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbd5e1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
