import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ScoreDisplay from "./component/scoreboard/ScoreDisplay";
import ScoreButton from "./component/scoreboard/ScoreButtons";
import WinnerMessage from "./component/scoreboard/WinnerMessage";
import ResetButton from "./component/scoreboard/ResetButton";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleAddScore = (team) => {
    if (team === "A") {
      const newScore = scoreA + 1;
      if (newScore === 10) {
        setWinner("Team A");
      }
      setScoreA(newScore);
    } else {
      const newScore = scoreB + 1;
      if (newScore === 10) {
        setWinner("Team B");
      }
      setScoreB(newScore);
    }
  };

  const handleSubtractScore = (team) => {
    if (team === "A" && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === "B" && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score</Text>

      <ScoreDisplay teamName="Team A" score={scoreA} backgroundColor="#FFC0CB" />
      <ScoreButton
        onAdd={() => handleAddScore("A")}
        onSubtract={() => handleSubtractScore("A")}
      />

      <ScoreDisplay teamName="Team B" score={scoreB} backgroundColor="#87CEFA" />
      <ScoreButton
        onAdd={() => handleAddScore("B")}
        onSubtract={() => handleSubtractScore("B")}
      />

      <View style={styles.actionContainer}>
        <ResetButton onReset={handleReset} />
        <TouchableOpacity
          style={[styles.finishButton, { backgroundColor: "#32CD32" }]}
          onPress={() => {
            const result =
              scoreA === scoreB
                ? "It's a draw!"
                : scoreA > scoreB
                ? "Team A wins!"
                : "Team B wins!";
            alert(result);
          }}
        >
          <Text style={styles.actionText}>Finish</Text>
        </TouchableOpacity>
      </View>

      <WinnerMessage winner={winner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  finishButton: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  actionText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;