import React, { useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const App = () => {
  const [randomColor, setRandomColor] = useState("rgb(32,0,126)");
  const changeBackground = () => {
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setRandomColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: "#BB2CD9",
    textTransform: "uppercase",
  },
});
