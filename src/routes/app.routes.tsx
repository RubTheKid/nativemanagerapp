import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SellersDashboard } from "../pages/Dashboard";
import { ListExpenses } from "../pages/List";
import { ListByCode } from "../pages/ListByCode";
import { SearchByCode } from "../pages/SearchByCode";

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
            <Screen name = "Cadastro" component={SellersDashboard} />
            <Screen name = "Lista" component={ListExpenses} />
            <Screen name = "PorCodigo" component={ListByCode} />
            <Screen name = "Search" component={SearchByCode} />
            </Navigator>
        
    )
}

