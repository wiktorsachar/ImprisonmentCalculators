import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  paragraph: {
    color: "#98c342",
    fontSize: 10,
    fontStyle: "italic",
    textAlign: "center",
    paddingBottom: 10
  },
  credits: {
    color: "#98c342",
    fontSize: 10,
    textAlign: "center"
  }
});

const Footer = () => {
  return (
    <View>
      <Text style={styles.paragraph}>
        Dz.U.2019.0.676 t.j. - Ustawa z dnia 6 czerwca 1997 r. - Kodeks karny
        wykonawczy, art. 12c.
      </Text>
      <Text style={styles.credits}>&#x24B8; Wiktor Sacharczuk 2019</Text>
      <Text style={styles.credits}>v.1.0</Text>
    </View>
  );
};

export default Footer;
