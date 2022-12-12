import React from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import window from "../assets/controller/window";
import globalStyles from "../assets/styles/globalStyles";

const app = require(`../app.json`).expo;

export default function About(){
  return(
    <ScrollView style={ globalStyles.screen }>
      <View style={ styles.aboutWrapper }>
        <View style={ styles.aboutContainer }>
          <View style={ styles.imageContainer }>
            <Image
              style={ styles.image }
              source={ require(`../assets/images/icon-no-bg.png`) }
            />
          </View>
          <View style={ styles.appInfoContainer }>
            <Text style={ styles.appVersion }>V{ app.version }</Text>
            <Text style={ styles.appDescription }>
              Authentic Pinoy Recipes is a mobile application whereby it presents different Pinoy Foods and its recipe.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  aboutWrapper: {
    flex: 1,
    width: '100%',
    padding: 16,
  },
  aboutContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    aspectRatio: 1,
    width: window.width/2,
  },
  image: {
    aspectRatio: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  appInfoContainer: {
    width: `100%`,
    maxWidth: window.width/1.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appVersion: {
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#ccc',
    fontSize: window.width/20,
  },
  appDescription: {
    textAlign: 'center',
    fontSize: window.width/24,
    lineHeight: window.width/16,
    color: '#aaa'
  }
});