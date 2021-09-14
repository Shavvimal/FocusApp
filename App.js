import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Platform, StatusBar } from 'react-native';
import { Focus } from './src/layout/Focus/Focus';
import { Timer } from './src/layout/Timer/Timer';
import { colors } from './src/utils/colors'




export default function App() {
  const [focusSubject, setFocusSubject] = useState("Gardening");

  return (
    <View style={styles.container}>
      {focusSubject ?
        <Text style={styles.text}><Timer focusSubject={focusSubject} /></Text>
        :
        <Focus addSubject={setFocusSubject} />
      }
      <Button title="Reset" onPress={() => setFocusSubject(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 30
  }
});
