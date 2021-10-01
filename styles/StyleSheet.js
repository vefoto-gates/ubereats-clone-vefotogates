import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  AndroidSafeAreaView: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
