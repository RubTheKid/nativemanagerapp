import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SellersDashboard } from "../pages/Dashboard";
import { ListExpenses } from "../pages/List";
import { ListByCode } from "../pages/ListByCode";
import { SearchByCode } from "../pages/SearchByCode";
import { MaterialIcons } from '@expo/vector-icons';

type AppRoutes = {
    Cadastro: undefined;
    Lista: undefined;
    PorCodigo: undefined;
    Search: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>
const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){
    return(
      
        <Navigator screenOptions={{
            headerShown: false,
          }}>
        <Screen name = "Cadastro" component={SellersDashboard} options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="add-circle" size={size} color={color} />
      ),
    }}/>
        <Screen name = "Lista" component={ListExpenses} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="list" size={size} color={color} />
            ),
          }}/>
        <Screen name = "PorCodigo" component={ListByCode} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="code" size={size} color={color} />
            ),
          }}/>
        <Screen name = "Search" component={SearchByCode} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="search" size={size} color={color} />
            ),
          }}/>
        </Navigator>
        
    )
}

