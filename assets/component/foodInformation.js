import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export default function FoodInformation({ information }){
  const [visible, isVisible] = useState(false);
  return(
    <View style={ styles.informationWrapper }>
      <TouchableOpacity
        activeOpacity={ 0.75 }
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
            size={ 48 }
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  informationWrapper: {
    width: '100%',
    marginVertical: 4
  },
  informationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
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
  },
  informationIconContainer: {
    aspectRatio: 1,
    backgroundColor: '#ff8080',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});