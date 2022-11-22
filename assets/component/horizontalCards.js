import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HorizontalCard({ food }) {
  return(
    <View style={ styles.cardWrapper }>
      <TouchableOpacity activeOpacity={ 0.6 } style={ styles.cardContainer }>
        <View style={ styles.foodImageContainer }>
          <Image source={ food.image } style={ styles.foodImage }/>
        </View>
        <View style={ styles.foodDetails }>
          <Text style={{ fontWeight: "600" }}>{ food.name }</Text>
          <Text style={{ fontStyle: "italic", fontSize: 10, marginTop: -2 }}>{ food.tagalog }</Text>
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
    width: 128,
    aspectRatio: 1,
    elevation: 6,
    borderRadius: 8,
    overflow: "hidden"
  },
  foodImageContainer: {
    width: 128,
    height: 64
  },
  foodImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover"
  },
  foodDetails: {
    padding: 4,
    paddingHorizontal: 6
  }
});