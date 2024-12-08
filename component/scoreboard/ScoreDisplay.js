import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScoreDisplay = ({ teamName, score, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ScoreDisplay;
