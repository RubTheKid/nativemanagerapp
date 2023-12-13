import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Dashboard } from "../pages/Dashboard";
import { ListVehicles } from "../pages/Lista";
import { SearchExpenses } from "../pages/SearchExpenses";
import { ListByCode } from "../pages/ListaPorCodigo";

type AppRoutes = {
  Cadastro: undefined;
  Lista: undefined;
  Search: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Cadastro" component={Dashboard} />

      <Screen name="Lista" component={ListVehicles} />

      <Screen name="Search" component={SearchExpenses} />

      <Screen name="Por Código" component={ListByCode} />
    </Navigator>
  );
}
