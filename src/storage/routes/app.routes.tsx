import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ListByCode } from "../../pages/ListByCode";
import { SearchByCode } from "../../pages/SearchByCode";
import { MaterialIcons } from '@expo/vector-icons';
import { VehiclesDashboard } from "../../pages/VehiclesDashboard";
import { VehicleList } from "../../pages/VehicleList";
import { ByCodeWithTax } from "../../pages/ByCodeWithTax";

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
        <Screen name = "Cadastro" component={VehiclesDashboard} options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="add-circle" size={size} color={color} />
      ),
    }}/>
        <Screen name = "Lista" component={VehicleList} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="list" size={size} color={color} />
            ),
          }}/>
        <Screen name = "PorCodigo" component={ByCodeWithTax} 
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

