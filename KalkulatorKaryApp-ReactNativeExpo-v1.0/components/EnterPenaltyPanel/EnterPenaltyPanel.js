import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import ClearButton from "../Shared/ClearButton";

const styles = StyleSheet.create({
  textInput: {
    color: "#98c342"
  },
  sideHeader: {
    color: "#51944b",
    fontWeight: "bold",
    fontSize: 20
  }
});

const EnterPenaltyPanel = props => {
  return (
    <View>
      <Text style={styles.sideHeader}>Wyrok:</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={props.years || ""}
          placeholder="lata"
          style={styles.textInput}
          onChangeText={text => props.handler(text, "years")}
          keyboardType="numeric"
          maxLength={2}
          width={60}
        />
        <ClearButton
          value={props.years}
          handler={() => props.handleClearButton("years")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={props.months || ""}
          placeholder="miesiące"
          style={styles.textInput}
          onChangeText={text => props.handler(text, "months")}
          keyboardType="numeric"
          maxLength={3}
          width={60}
        />
        <ClearButton
          value={props.months}
          handler={() => props.handleClearButton("months")}
        />
      </View>
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TextInput
          value={props.weeks || ""}
          placeholder="tygodnie"
          style={styles.textInput}
          onChangeText={text => props.handler(text, "weeks")}
          keyboardType="numeric"
          maxLength={4}
          width={60}
        />
        <ClearButton
          value={props.weeks}
          handler={() => props.handleClearButton("weeks")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={props.days || ""}
          placeholder="dni"
          style={styles.textInput}
          onChangeText={text => props.handler(text, "days")}
          keyboardType="numeric"
          maxLength={4}
          width={60}
        />
        <ClearButton
          value={props.days}
          handler={() => props.handleClearButton("days")}
        />
      </View>
    </View>
  );
};
export default EnterPenaltyPanel;
