import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import SwitchFab from "@paraboly/react-native-switch-fab";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.switchFabContainer}>
          <SwitchFab
            name="atom"
            type="Fontisto"
            rippleColor="transparent"
            activeBGColor="#00B1D2FF"
            inactiveBGColor="#FDDB27FF"
            onPress={isActive => console.log(isActive)}
          />
          <Text style={styles.textStyle}>React</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  switchFabContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    top: 8,
    fontSize: 13,
    color: "#757575"
  }
};

export default App;
