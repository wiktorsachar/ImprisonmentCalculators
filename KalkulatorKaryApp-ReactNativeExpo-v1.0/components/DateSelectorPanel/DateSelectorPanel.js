import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sideHeader: {
    color: "#51944b",
    fontWeight: "bold",
    fontSize: 20
  },
  emptyCalendar: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginBottom: 5
  },
  filledCalendar: {
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 25,
    color: "#98c342"
  }
});

const DateSelectorPanel = props => {
  const currentDate = (() => {
    const checkLength = number =>
      number.toString().length < 2 ? `0${number}` : number;
    if (props.currentDate) {
      return (
        <Text style={styles.filledCalendar}>
          {checkLength(props.currentDate.day) +
            "." +
            checkLength(props.currentDate.month + 1) +
            "." +
            props.currentDate.year +
            " r."}
        </Text>
      );
    } else {
      return (
        <Image
          source={require("../../assets/calendar.png")}
          style={styles.emptyCalendar}
        />
      );
    }
  })();
  return (
    <View>
      <Text style={styles.sideHeader}>Rozpoczęcie:</Text>
      <TouchableOpacity onPress={props.handler}>{currentDate}</TouchableOpacity>
      <View />
    </View>
  );
};

export default DateSelectorPanel;
