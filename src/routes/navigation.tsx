import { createStackNavigator } from '@react-navigation/stack';
// import SellersDashboard from './src/pages/Sellers/Dashboard';
import { SellersDashboard } from '../pages/Sellers/Dashboard';
import { SuppliersDashboard } from '../pages/suppliers/Dashboard';
import { MainComponent } from '../pages/Main';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainComponent} />
      <Stack.Screen name="SellersDashboard" component={SellersDashboard} />
      <Stack.Screen name="SuppliersDashboard" component={SuppliersDashboard} />
    </Stack.Navigator>
  );
}

export default Navigation;