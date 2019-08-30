import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ClearButton = props => {
  return (
    <TouchableOpacity onPress={props.handler}>
      <Text
        style={{
          color: "#98c342",
          fontSize: 20,
          display: props.value ? "flex" : "none"
        }}
      >
        &#x2716;
      </Text>
    </TouchableOpacity>
  );
};

export default ClearButton;
