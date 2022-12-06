import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HorizontalCard({ navigation, route, food }) {
  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.6 } style={ styles.cardContainer } onPress={() => navigation.navigate("FoodView", food)}>
        <View style={ styles.foodImageContainer }>
          <Image source={ food.image } style={ styles.foodImage }/>
        </View>
        <View style={ styles.foodDetails }>
          <Text style={{ fontWeight: "600", fontSize: 16, color: '#222' }}>{ food.name }</Text>
          <Text style={{ fontStyle: "italic", fontSize: 12, marginTop: -2, color: "#444" }}>{ food.tagalog }</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 8,
    paddingVertical: 4
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  foodImageContainer: {
    width: 144,
    height: 72
  },
  foodImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover"
  },
  foodDetails: {
    padding: 4,
    paddingHorizontal: 6,
    paddingBottom: 8,
  }
});