import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from '../../routes/navigation';

import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../components/ui/.global/styles/theme';


import { SellersDashboard } from '../Sellers/Dashboard';
import { SuppliersDashboard } from '../suppliers/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';

export function MainComponent() {
    const navigation = useNavigation();
  
    const handleNavigateToSellers = () => {
      navigation.navigate('SellersDashboard');
    };
    const handleNavigateToSuppliers = () => {
      navigation.navigate('SuppliersDashboard');
    };
  
    return (
      <>
        <View>
          <Button
            title="Go to Sellers Dashboard"
            onPress={handleNavigateToSellers}
          />
          <Button
            title="Go to Suppliers Dashboard"
            onPress={handleNavigateToSuppliers}
          />
        </View>
      </>
    );
  }
  