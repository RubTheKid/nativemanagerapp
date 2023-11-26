import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { StyleSheet, View, Text, StatusBar } from 'react-native'

import theme from './src/components/ui/.global/styles/theme'
import { AppRoutes } from './src/storage/routes/app.routes';
import { RootRoutes } from './src/storage/routes';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';


function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    )
  }
  return (
    
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content'
        backgroundColor="transparent"
        translucent />
      <RootRoutes />
    </ThemeProvider>
  );
}

export default App;

