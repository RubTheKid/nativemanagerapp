import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, Transactions, TextCard } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Alert, FlatList } from "react-native";
import { supllierGetAll } from "../../storage/suplliers/supplierGetAll";
import { VehicleDTO } from "../../storage/suplliers/VehicleDTO";
import { VehicleDetails } from "../../components/VehicleDetails";
import React from "react";
import { ValidateCode } from "../../utils/validateCode";

export function SearchExpenses() {
  const [code, setCode] = useState(""); 
  const [dataExpenses, setDataExpenses] = useState<VehicleDTO[]>([]);
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

    const data = await supllierGetAll();
    let newData;
    newData = data.filter(
        (item) =>
          item.code === code.trim()
      );


    const total = newData.length;

    setTotal(total);
    setDataExpenses(    newData.map(vehicle => {
      const dto: VehicleDTO = {
        code: vehicle.code,
        value: vehicle.value,
        name: vehicle.name,
        date: vehicle.date,
        tax: vehicle.value * 0.02
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
            data={dataExpenses}
            renderItem={({ item }) => <VehicleDetails data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </Transactions>
      ) : null }
    </Container>
  );
}
