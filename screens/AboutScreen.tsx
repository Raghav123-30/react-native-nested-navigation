import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbd5e1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
