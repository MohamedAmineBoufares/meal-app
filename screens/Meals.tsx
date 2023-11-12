import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Meals() {
  return (
    <View style={styles.container}>
      <Text>Meals</Text>
    </View>
  );
}

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
