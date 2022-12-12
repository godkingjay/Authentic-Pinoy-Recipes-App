import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import globalStyles from "../assets/styles/globalStyles";

export default function About(){
  return(
    <View style={ globalStyles.screen }>
      <Text>About</Text>
    </View>
  );
}