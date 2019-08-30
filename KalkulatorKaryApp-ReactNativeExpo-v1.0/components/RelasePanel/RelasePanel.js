import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  relaseDatePanel: {
    backgroundColor: "#242422",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 3,
    paddingRight: 3
  },
  relaseDate: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    color: "#98c342",
    textAlign: "center"
  }
});

const RelasePanel = props => {
  const day = 86400000;
  const period =
    props.days * 1 +
    props.weeks * 7 +
    props.months * 30 +
    props.years * 365 -
    props.passings;
  const currentDate = new Date(
    props.currentDate.year,
    props.currentDate.month,
    props.currentDate.day
  );
  const date = new Date(currentDate.valueOf() + period * day);
  const displayDate = (() => {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    console.log("day:" + day + " month:" + month + " year:" + year);
    if (day.length < 2) {
      day = `0${day}`;
    }
    if (month.length < 2) {
      month = `0${month}`;
    }
    return day + "." + month + "." + year + " r.";
  })();
  if (
    (props.days || props.weeks || props.months || props.years) &&
    props.currentDate
  ) {
    return (
      <View style={styles.relaseDatePanel}>
        <Text style={styles.paragraph}>Okres kary zakończy się:</Text>
        <Text style={styles.relaseDate}>{displayDate}</Text>
        <Text style={styles.paragraph}>(dodano: {period} dni)</Text>
      </View>
    );
  } else if (props.days || props.weeks || props.months || props.years) {
    return <Text style={styles.paragraph}>(uzupełnij datę)</Text>;
  } else if (props.currentDate) {
    return <Text style={styles.paragraph}>(uzupełnij wyrok)</Text>;
  } else {
    return <Text style={styles.paragraph}>(uzupełnij datę i wyrok)</Text>;
  }
};

export default RelasePanel;
