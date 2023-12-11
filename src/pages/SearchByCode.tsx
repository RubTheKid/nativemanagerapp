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
import { ListCard } from "../components/cards/listCard";
// import { ListSells } from "../components/cards/cards";

export function SearchByCode() {
    const [code, setCode] = useState(""); 
    const [name, setName] = useState(""); 
    const [dataSells, setDataSells] = useState<VehicleDTO[]>([]);
    // const [addSupplier, setAddSupplier] = useState<number | null>(null);
    const [total, setTotal] = useState<number | null>(null);
    const [searchResult, setSearchResult] = useState<number | null>(null);

    async function handleSearchSpending() {
        if (code.trim() === "" && name.trim() === "") {
          return Alert.alert("Pesquisa de Vendas", "Insira o código ou o nome do veículo!");
        }
        
        if (code.trim() != "") {
          const codeValidated = ValidateCode(code);
    
          if (!codeValidated) {
            return Alert.alert(
              "Código inválido",
              "insira um código válido"
            );
          }
        }
    
        const data = await getAllVehicles();
        let newData;
        if (code.trim() != "" && name.trim() != "")
        {
          newData = data.filter(
            (item) =>
              item.code === code.trim() && item.name.toLowerCase().includes(name.trim().toLowerCase())
          );
        } else if (code.trim() != "")
        {
          newData = data.filter(
            (item) =>
              item.code === code.trim()
          );
        } else {
          newData = data.filter(
            (item) =>
            item.name.toLowerCase().includes(name.trim().toLowerCase())
          );
        }
    
        function Calculate(total: number, item: VehicleDTO) {
          return total + item.value;
        }
    
        const soma = newData.filter((item) => item.value).reduce(Calculate, 0);
        const total = newData.length;
    
        setSearchResult(soma)
        // setAddSupplier(soma);
        setTotal(total);
        setDataSells(newData);
        setCode("");
        setName("");
      }

      return (
        <Container>
          <Header title="Consulta" />
    
          <Input
            placeholder="CPF do Vendedor"
            placeholderTextColor="#363F5F"
            value={code}
            onChangeText={(value) => setCode(value)}
          />
    
          <Input
            placeholder="Nome do Produto"
            placeholderTextColor="#363F5F"
            value={name}
            onChangeText={(value) => setName(value)}
          />
    
          <Button title="Pesquisa" onPress={handleSearchSpending} />
    
          {searchResult != null ? (
            <TextCard>{`Total de ${total} resultados encontrados.`}</TextCard>
          ) : null}
          {searchResult! > 0 ? (
            <TextCard>{`Valor Total de Vendas: R$ ${searchResult}`}</TextCard>
          ) : null }
          {searchResult! > 0 ? (
              <Transactions>
              <FlatList
                data={dataSells}
                renderItem={({ item }) => <ListCard data={item} />}
                showsVerticalScrollIndicator={false}
              />
            </Transactions>
          ) : null }
        </Container>
      );
}