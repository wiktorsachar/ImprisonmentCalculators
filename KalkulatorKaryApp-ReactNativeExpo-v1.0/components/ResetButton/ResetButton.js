import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    padding: 10,
    fontSize: 25,
    textAlign: "center",
    color: "#98c342"
  }
});

const ResetButton = props => {
  return (
    <TouchableOpacity onPress={props.handler}>
      <Text style={styles.button}>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetButton;
