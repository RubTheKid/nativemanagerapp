import React, { useState } from "react";
import { SellerControlDTO } from "../../storage/DTOs/SellerControlDTO";
import { Alert, Button, FlatList } from "react-native";
import { ValidateCpf } from "../../storage/functions/validateCpf";
import { getAllSellers } from "../../storage/functions/getAllSellers";
import { Container, TextCard, Transactions } from "./styles";
import { Header } from "../../components/ui/Header";
import { Input } from "../../components/Input";
import { ListSells } from "../../components/Card";

export function SearchByCode() {
    const [cpf, setCpf] = useState(""); 
    const [product, setProduct] = useState(""); 
    const [dataSells, setDataSells] = useState<SellerControlDTO[]>([]);
    const [addSupplier, setAddSupplier] = useState<number | null>(null);
    const [total, setTotal] = useState<number | null>(null);
    const [searchResult, setSearchResult] = useState<number | null>(null);

    async function handleSearchSpending() {
        if (cpf.trim() === "" && product.trim() === "") {
          return Alert.alert("Pesquisa de Vendas", "Insira ao menos o cpf e produto!");
        }
        
        if (cpf.trim() != "") {
          const cpfValidated = ValidateCpf(cpf);
    
          if (!cpfValidated) {
            return Alert.alert(
              "CPF inválido!",
              "Digite um CPF válido."
            );
          }
        }
    
        const data = await getAllSellers();
        let newData;
        if (cpf.trim() != "" && product.trim() != "")
        {
          newData = data.filter(
            (item) =>
              item.cpf === cpf.trim() && item.product.toLowerCase().includes(product.trim().toLowerCase())
          );
        } else if (cpf.trim() != "")
        {
          newData = data.filter(
            (item) =>
              item.cpf === cpf.trim()
          );
        } else {
          newData = data.filter(
            (item) =>
            item.product.toLowerCase().includes(product.trim().toLowerCase())
          );
        }
    
        function Calculate(total: number, item: SellerControlDTO) {
          return total + item.value;
        }
    
        const soma = newData.filter((item) => item.value).reduce(Calculate, 0);
        const total = newData.length;
    
        setSearchResult(soma)
        setAddSupplier(soma);
        setTotal(total);
        setDataSells(newData);
        setCpf("");
        setProduct("");
      }

      return (
        <Container>
          <Header title="Consulta" />
    
          <Input
            placeholder="CPF do Vendedor"
            placeholderTextColor="#363F5F"
            value={cpf}
            onChangeText={(value) => setCpf(value)}
          />
    
          <Input
            placeholder="Nome do Produto"
            placeholderTextColor="#363F5F"
            value={product}
            onChangeText={(value) => setProduct(value)}
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
                renderItem={({ item }) => <ListSells data={item} />}
                showsVerticalScrollIndicator={false}
              />
            </Transactions>
          ) : null }
        </Container>
      );
}