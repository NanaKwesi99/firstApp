import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Image source={require("./assets/photo.jpeg")} style={styles.image} />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Name" style={styles.inputContainer} />
        <TextInput placeholder="Email" style={styles.inputContainer} />
        <TextInput placeholder="Password" style={styles.inputContainer} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  profileContainer: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    width: 350,
    justifyContent: "center",
    borderRadius: 25,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,

  }
});
