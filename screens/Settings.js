import React from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import globalStyles from "../assets/styles/globalStyles";

export default function Settings() {
  return(
    <ScrollView style={ globalStyles.screen }>
      <Text>Settings</Text>
    </ScrollView>
  );
}