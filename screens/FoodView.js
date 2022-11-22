import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import globalStyles from "../assets/styles/globalStyles";
import window from "../assets/controller/window";

export default function FoodView({ navigation, route }){
  const [food, setFood] = useState(route.params);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: food.name
    });
  }, [navigation])
  
  return(
    <View style={ globalStyles.screen }>
      <Image source={ food.image } style={ styles.image }/>
      <Text>{ food.name }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: window.width/2,
    width: window.width,
    resizeMode: 'cover'
  }
});