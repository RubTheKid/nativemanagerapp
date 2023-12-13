import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Header } from "../../components/Header";

import { FlatList } from "react-native";

import { Container, Transactions } from "./styles";

import { VehicleDetails } from "../../components/VehicleDetails";

import { supllierGetAll } from "../../storage/suplliers/supplierGetAll";
import { VehicleDTO } from "../../storage/suplliers/VehicleDTO";

export function ListVehicles() {
  const [dataExpenses, setListExpenses] = useState<VehicleDTO[]>([]);

  async function loadDataSpending() {
    const data = await supllierGetAll();
    console.log("ee", data)
    setListExpenses(data);
  }

  useFocusEffect(
    useCallback(() => {
      loadDataSpending();
    }, [])
  );

  return (
    <Container>
      <Header title="Listagem de Veículos" />

      <Transactions>
        <FlatList
          data={dataExpenses}
          renderItem={({ item }) => <VehicleDetails data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Transactions>
    </Container>
  );
}
