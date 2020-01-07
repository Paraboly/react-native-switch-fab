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
            activeBGColor="#61DBFB"
            inactiveIconColor="#61DBFB"
            onPress={isActive => console.log(isActive)}
          />
          <Text style={styles.textStyle}>React</Text>
        </View>
        <View style={styles.switchFabContainer}>
          <SwitchFab onPress={isActive => console.log(isActive)} />
          <Text style={styles.textStyle}>Apple</Text>
        </View>
        <View style={styles.switchFabContainer}>
          <SwitchFab
            name="android"
            type="FontAwesome"
            activeBGColor="#A4C639"
            inactiveIconColor="#A4C639"
            onPress={isActive => console.log(isActive)}
          />
          <Text style={styles.textStyle}>Android</Text>
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
