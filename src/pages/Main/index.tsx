import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { Container } from '../../components/ui/.global/styles/contentStyles';
import { Header } from '../../components/ui/Header';
import { ThemeProvider } from 'styled-components/native';

import { MyButton } from '../../components/ui/.global/Button'


export function MainComponent() {
    const navigation = useNavigation();
  
    const handleNavigateToSellers = () => {
      navigation.navigate('SellersDashboard');
    };
    const handleNavigateToSuppliers = () => {
      navigation.navigate('SuppliersDashboard');
    };
  
    return (
    
      <Container>
        <Header title="Fornecedores" />

        <MyButton
          title="Gerenciar Vendedores"
          onPress={handleNavigateToSellers}
          theme="primary" />
      <MyButton
          title="Gerenciar Fornecedores"
          onPress={handleNavigateToSuppliers} 
          theme="secondary"/>
        </Container>
      
    );
  }
  