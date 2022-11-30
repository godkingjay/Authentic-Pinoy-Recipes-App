import React, { useContext } from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import globalStyles from "../assets/styles/globalStyles";
import AppContext from "../assets/globals/appContext";

export default function Settings() {

  const favorites = useContext(AppContext);

  const clearFav = () => {
    favorites.clearFavorites();
  }

  return(
    <ScrollView style={ globalStyles.screen }>
      <View style={ styles.settingsContainer }>
        <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.settingContainer }
          onPress={ clearFav }
        >
          <View style={ styles.settingIconContainer }>
            <Icon
              type="material-icons"
              name="delete"
              color="#ff4040"
            />
          </View>
          <Text style={ [ styles.settingLabel, { color: "#ff4040" } ] }>Clear Favorites</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    margin: 8,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingVertical: 4,
  },
  settingIconContainer: {
    padding: 4,
    paddingRight: 8,
  },
  settingLabel: {
    fontSize: 16,
    color: '#222',
  }
});