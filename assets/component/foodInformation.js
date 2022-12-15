import React, { useState } from "react";
import { Modal } from "react-native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import window from "../controller/window";

export default function FoodInformation({ information }){
  const [visible, isVisible] = useState(false);
  return(
    <View style={ styles.informationWrapper }>
      <TouchableOpacity
        activeOpacity={ 0.6 }
        style={ styles.informationContainer }
        onPress={() => isVisible(true)}
      >
        <View style={ styles.informationLabelContainer }>
          <Text style={ styles.informationLabel }>{ information.title }</Text>
        </View>
        <View style={ styles.informationIconContainer }>
          <Icon
            type="material-icons"
            name="navigate-next"
            color="white"
            size={ 40 }
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={ true }
        visible={ visible }
        onRequestClose={() => {
          isVisible(!visible);
        }}
      >
        <View style={ styles.viewport }>
          <View style={ styles.viewWrapper }>
            <View style={ styles.viewContainer }>
              <View style={ styles.header }>
                <View style={ styles.iconContainer }>
                  <Pressable
                    onPress={() => isVisible(!visible)}
                  >
                    <Icon
                      type="material-icons"
                      name="highlight-off"
                      size={ 28 }
                      color="#ff4040"
                    />
                  </Pressable>
                </View>
              </View>
              <ScrollView style={ styles.descriptionCOntainer }>
                <Text style={ styles.title }>{ information.title }</Text>
                <View style={ styles.divider }></View>
                <Text style={ styles.content }>{ information.content }</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  informationWrapper: {
    marginVertical: 4,
    marginHorizontal: 16,
  },
  informationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 8,
    height: 48,
    overflow: 'hidden',
    maxHeight: 64,
    backgroundColor: '#ffc0c0',
  },
  informationLabelContainer: {
    flex: 1,
    padding: 4,
    paddingHorizontal: 8,
  },
  informationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  informationIconContainer: {
    aspectRatio: 3/4,
    backgroundColor: '#ff8080',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewport: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#222c',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    overflow: 'hidden',
    maxWidth: window.width - 64,
    maxHeight: window.height - 64,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#4444',
    backgroundColor: '#f8f8f8',
  },
  iconContainer: {
    marginLeft: 'auto',
    aspectRatio: 1,
    padding: 4
  },
  descriptionCOntainer: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#444',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#2222',
    marginVertical: 16,
  },
  content: {
    textAlign: 'justify',
    fontSize: 16,
    color: '#222',
    paddingBottom: 32,
  }
});