import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import globalStyles from "../assets/styles/globalStyles";
import window from "../assets/controller/window";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import FoodViewType from "../assets/component/foodViewType";

export default function FoodView({ navigation, route }) {
  let typeNum = 1;
  const [food, setFood] = useState(route.params);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: food.name,
    });
  }, [navigation]);

  return (
    <ScrollView style={globalStyles.screen}>
      <Image source={food.image} style={styles.image} />
      <View style={styles.articleContainer}>
        <View style={styles.article}>
          <Text style={styles.foodName}>{ food.name }</Text>
          <Text style={styles.foodTagalog}>({ food.tagalog })</Text>
          <View style={ styles.divider }></View>
          <Text style={ styles.foodDescription }>{ food.description }</Text>
          <View style={ styles.divider }></View>
          <ScrollView
            horizontal={ true }
          >
            { food.type.map((type, value) => {
              return(
                <FoodViewType key={ typeNum++ } foodType={ type }/>
              )
            })}
          </ScrollView>
          <View style={ styles.divider }></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: window.width / 1.5,
    width: window.width,
    maxHeight: window.height / 2,
    resizeMode: "cover",
  },
  articleContainer: {
    marginTop: -64,
    paddingTop: 32,
    flex: 1,
  },
  article: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 32,
    flex: 1,
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },
  foodTagalog: {
    fontStyle: "italic",
    textAlign: "center",
    marginTop: -4,
    color: "#444",
  },
  divider: {
    backgroundColor: "#0002",
    height: 1,
    width: "100%",
    marginVertical: 8,
  },
  foodDescription: {
    textAlign: "justify",
  }
});
