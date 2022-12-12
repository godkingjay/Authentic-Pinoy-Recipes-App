import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HorizontalCard({ navigation, route, food, color }) {
  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.6 } style={ styles.cardContainer } onPress={() => navigation.push("FoodView", food)}>
        <View style={ styles.foodImageContainer }>
          <Image source={ food.image } style={ styles.foodImage }/>
        </View>
        <View style={ styles.cardDeco1 }></View>
        <View
          style={[
            styles.cardDeco2,
            {
              backgroundColor: color,
            }
          ]}
        ></View>
        <View style={ styles.foodDetailsContainer }>
          <View style={ styles.foodDetails }>
            <Text style={{ fontWeight: "600", fontSize: 16, color: '#222' }}>{ food.name }</Text>
            <Text style={{ fontStyle: "italic", fontSize: 12, marginTop: -2, color: "#444" }}>{ food.tagalog }</Text>
          </View>
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
  foodDetailsContainer: {
  },
  cardDeco1: {
    position: "absolute",
    aspectRatio: 1,
    height: 48,
    backgroundColor: "#00000008",
    borderRadius: 100,
    right: -24,
    bottom: -24,
  },
  cardDeco2: {
    position: "absolute",
    height: 24,
    aspectRatio: 1,
    right: -12,
    bottom: -12,
    borderRadius: 100,
    elevation: 2,
  },
  foodDetails: {
    padding: 4,
    paddingHorizontal: 6,
    paddingBottom: 8,
  },
});