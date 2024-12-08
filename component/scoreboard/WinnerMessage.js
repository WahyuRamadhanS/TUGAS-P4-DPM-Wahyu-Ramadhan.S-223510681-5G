import React from "react";
import { Alert } from "react-native";

const WinnerMessage = ({ winner }) => {
  if (winner) {
    Alert.alert("Congratulations!", `${winner} wins!`);
  }
  return null;
};

export default WinnerMessage;
