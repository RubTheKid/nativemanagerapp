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


const SellersStack = createNativeStackNavigator();
const SuppliersStack = createNativeStackNavigator();


function SellersStackScreen() {
  return (
    <SellersStack.Navigator>
      <SellersStack.Screen name="SellersDashboard" component={SellersDashboard} />
      {/* Adicione outras telas do vendedor, se necessário */}
    </SellersStack.Navigator>
  );
}

function SuppliersStackScreen() {
  return (
    <SuppliersStack.Navigator>
      <SuppliersStack.Screen name="SuppliersDashboard" component={SuppliersDashboard} />
      {/* Adicione outras telas de fornecedores, se necessário */}
    </SuppliersStack.Navigator>
  );
}

const Drawer = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
            <Header title='Menu Principal' />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Vendedores" component={SellersStackScreen} />
          <Drawer.Screen name="Fornecedores" component={SuppliersStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      </Container>
    </ThemeProvider>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
