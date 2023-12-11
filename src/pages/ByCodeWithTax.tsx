import React, { useState } from "react";
import { SellerControlDTO } from "../storage/DTOs/SellerControlDTO";
import { Alert, Button, FlatList } from "react-native";
import { ValidateCpf } from "../storage/functions/validateCpf";
import { getAllSellers } from "../storage/functions/getAllSellers";
import { Container, TextCard, Transactions } from "../components/ui/.global/styles/contentStyles"
import { Header } from "../components/ui/.global/Header";
import { Input } from "../components/inputs/input";
import { ValidateCode } from "../storage/functions/validateCode";
import { getAllVehicles } from "../storage/functions/getAllVehicles";
import { VehicleDTO } from "../storage/DTOs/VehicleDTO";
import { VehicleList } from "./VehicleList";
import { ListCard, ListCardCode } from "../components/cards/listCard";
// import { ListSells } from "../components/cards/cards";

export function ByCodeWithTax() {
  const [code, setCode] = useState(""); 
const [dataVehicles, setDataVehicle] = useState<VehicleDTO[]>([]);
const [total, setTotal] = useState<number | null>(null);

async function handleSearchSpending() {
  if (code.trim() === "") {
    return Alert.alert("Pesquisa por Cliente", "Insira o código do cliente!");
  }
  
  if (code.trim() != "") {
    const codeValidated = ValidateCode(code);

    if (!codeValidated) {
      return Alert.alert(
        "Código inválido!",
        "Digite um código válido."
      );
    }
  }

  const data = await getAllVehicles();
  let newData;
  newData = data.filter(
      (item) =>  item.code === code.trim()
    );


  const total = newData.length;
    

  setTotal(total);
  setDataVehicle(
    newData.map(item => {
    const dto: VehicleDTO = {
      code: item.code,
      value: item.value,
      name: item.name,
      date: item.date,
      tax: item.value * 0.02,
      
      
    }
    return dto;
  }) );
  setCode("");
}



return (
  <Container>
    <Header title="Consulta" />

    <Input
      placeholder="Código do Cliente"
      placeholderTextColor="#363F5F"
      value={code}
      onChangeText={(value) => setCode(value)}
    />

    <Button title="Pesquisa" onPress={handleSearchSpending} />

    {total != null ? (
      <TextCard>{`Total de ${total} resultados encontrados.`}</TextCard>
    ) : null}

    {total! > 0 ? (
        <Transactions>
        <FlatList
          data={dataVehicles}
          renderItem={({ item }) => <ListCardCode data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Transactions>
    ) : null }
  </Container>
);
}
