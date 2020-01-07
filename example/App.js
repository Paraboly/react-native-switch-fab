import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import SwitchFab from "./lib/src/SwitchFab";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <SwitchFab
            name="atom"
            type="Fontisto"
            rippleColor="transparent"
            activeBGColor="#00B1D2FF"
            inactiveBGColor="#FDDB27FF"
            onPress={isActive => {
              alert(isActive);
            }}
          />
          <Text style={{ top: 8, color: "#757575", fontSize: 13 }}>React</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
