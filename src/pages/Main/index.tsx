import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { Container } from '../../components/ui/.global/styles/contentStyles';
import { Header } from '../../components/ui/Header';

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
      <Container>
            <Header title="Fornecedores" />
        
        
          <Button
            title="Go to Sellers Dashboard"
            onPress={handleNavigateToSellers}
          />
          <Button
            title="Go to Suppliers Dashboard"
            onPress={handleNavigateToSuppliers}
          />
        </Container>
      </>
    );
  }
  