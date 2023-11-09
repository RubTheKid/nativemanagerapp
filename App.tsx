import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SellersDashboard } from './src/pages/Sellers/Dashboard';
import { SuppliersDashboard } from './src/pages/suppliers/Dashboard';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/components/ui/.global/styles/theme'
import { Container } from './src/components/ui/.global/styles/contentStyles';
import { Header } from './src/components/ui/Header';
import { MainComponent,  } from './src/pages/Main';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainComponent} />
        <Stack.Screen name="SellersDashboard" component={SellersDashboard} />
        <Stack.Screen name="SuppliersDashboard" component={SuppliersDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
