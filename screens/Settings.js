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
import { Modal } from "react-native";
import { Pressable } from "react-native";
import window from "../assets/controller/window";
import modalStyles from "../assets/styles/modalStyles";

export default function Settings({ navigation, routes }) {
  const favorites = useContext(AppContext);
  const [clearFavoritesModal, setClearFavoritesModal] = useState(false);
  
  return(
    <ScrollView style={ globalStyles.screen }>
      <View style={ styles.settingsContainer }>
        <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.settingContainer }
          onPress={() => setClearFavoritesModal(true)}
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
        <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ styles.settingContainer }
          onPress={() => navigation.navigate("About")}
        >
          <View style={ styles.settingIconContainer }>
            <Icon
              type="material-icons"
              name="info-outline"
              color="#444"
            />
          </View>
          <Text style={ styles.settingLabel }>About</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={ true }
        visible={ clearFavoritesModal }
        onRequestClose={() => {
          setClearFavoritesModal(!clearFavoritesModal);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>Are you sure you want to clear your favorites?</Text>
            <View style={ modalStyles.modalButtons }>
              <Pressable
                style={[modalStyles.button, modalStyles.buttonClear]}
                onPress={() => {
                  setClearFavoritesModal(!clearFavoritesModal);
                  favorites.clearFavorites();
                }}
              >
                <Text style={modalStyles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[modalStyles.button, modalStyles.buttonClose]}
                onPress={() => setClearFavoritesModal(!clearFavoritesModal)}
              >
                <Text style={modalStyles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    borderBottomColor: '#4444',
    paddingVertical: 4,
  },
  settingIconContainer: {
    padding: 4,
    paddingRight: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: '#222',
  },
});