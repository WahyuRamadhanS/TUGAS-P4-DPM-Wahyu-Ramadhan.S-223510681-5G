import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ScoreButton = ({ onAdd, onSubtract }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSubtract}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
});

export default ScoreButton;
