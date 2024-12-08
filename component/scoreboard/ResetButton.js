import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ResetButton = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onReset}>
      <Text style={styles.text}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ResetButton;
