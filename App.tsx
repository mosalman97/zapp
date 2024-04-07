import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components';
import * as Font from 'expo-font';

let customFonts = {
  'Nunito-Bold': require("./src/assets/fonts/Nunito-Bold.ttf"),
  'Nunito-ExtraBold': require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
  'Nunito-ExtraLight': require("./src/assets/fonts/Nunito-ExtraLight.ttf"),
  'Nunito-Light': require("./src/assets/fonts/Nunito-Light.ttf"),
  'Nunito-Medium': require("./src/assets/fonts/Nunito-Medium.ttf"),
  'Nunito-Regular': require("./src/assets/fonts/Nunito-Regular.ttf"),
  'Nunito-SemiBold': require("./src/assets/fonts/Nunito-SemiBold.ttf"),
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }
  useEffect(() => {
    _loadFontsAsync();
  }, [])
  return (
    (fontsLoaded ? <View style={styles.container}>
      <Button backgroundColor={"green"} title={"Create new Account"} />
    </View> : null)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
