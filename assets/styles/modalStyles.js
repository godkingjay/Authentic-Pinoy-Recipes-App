import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#222c',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 240,
  },
  modalButtons: {
    flexDirection: "row",
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 100,
    marginHorizontal: 16,
    padding: 8,
    elevation: 2,
    aspectRatio: 2/1,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#888",
  },
  buttonClear: {
    backgroundColor: "#ff4040"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default modalStyles;