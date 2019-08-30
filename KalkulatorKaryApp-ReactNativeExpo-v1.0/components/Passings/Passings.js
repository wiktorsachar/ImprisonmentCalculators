import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import ClearButton from "../Shared/ClearButton";

const styles = StyleSheet.create({
  textInput: {
    color: "#98c342"
  },
  container: {
    flexDirection: "row"
  },
  sideHeader: {
    color: "#51944b",
    fontWeight: "bold",
    fontSize: 20
  }
});

const Passings = props => {
  return (
    <View>
      <Text style={styles.sideHeader}>Zaliczenia:</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="dni"
          value={props.passings || ""}
          style={styles.textInput}
          onChangeText={text => props.handler(text, "passings")}
          keyboardType="numeric"
          maxLength={4}
          width={60}
        />
        <ClearButton
          value={props.passings}
          handler={() => props.handleClearButton("passings")}
        />
      </View>
    </View>
  );
};

export default Passings;
