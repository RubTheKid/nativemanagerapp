import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../components/ui/.global/styles/theme';


import { SellersDashboard } from '../Sellers/Dashboard';
import { SuppliersDashboard } from '../suppliers/Dashboard';


const Stack = createNativeStackNavigator();

export function Main() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SellersDashboard" component={SellersDashboard} />
        <Stack.Screen name="SuppliersDashboard" component={SuppliersDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}