import { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { InputAmount } from "../../components/InputAmount";
import { InputDate } from "../../components/InputDate";
import { spendingCreate } from "../../storage/suplliers/supplierCreate";
import { supllierGetAll } from "../../storage/suplliers/supplierGetAll";
import { formatAmount } from "../../utils/formatAmount";
import { ValidateCode } from "../../utils/validateCode";

export function Dashboard() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  async function handleAddNewSpending() {
    //limpa o AsyncStorage no android
     //await AsyncStorage.clear();
     //alert("O programa sera finalizado");
     //return;

    const codeValidated = ValidateCode(code);

    if (!codeValidated) {
      return Alert.alert(
        "Código inválido!",
        "Digite um código válido."
      );
    }
    if (!name) {
      return Alert.alert(
        "Nome inválido!",
        "Digite o nome do veículo."
      );
    }
    if (!value) {
      return Alert.alert(
        "Valor inválido!",
        "Digite o valor da venda."
      );
    }
    if (!date) {
      return Alert.alert(
        "Data inválida",
        "Digite a data da entrada."
      );
    }

    const data = {
      code,
      value: formatAmount(value),
      name,
      date
    };
    await spendingCreate(data);
    setCode("");
    setName("");
    setValue("");
    setDate("");
    const result = await supllierGetAll();

    return Alert.alert("Veículo adicionado com sucesso!");
  }

  return (
    <Container>
      <Header title="Controle de Veículos" />

      <Input
        placeholder="Código do Cliente"
        placeholderTextColor="#363F5F"
        value={code}
        onChangeText={(value) => setCode(value)}
      />

      <Input
        placeholder="Nome"
        placeholderTextColor="#363F5F"
        value={name}
        onChangeText={(value) => setName(value)}
      />

      <InputAmount
        placeholder="Valor do Veículo"
        placeholderTextColor="#363F5F"
        value={value}
        onChangeText={(value) => setValue(value)}
      />

      <InputDate
        placeholder="Data da Entrada"
        placeholderTextColor="#363F5F"
        value={date}
        onChangeText={(value) => setDate(value)}
      />

      <Button title="Adicionar" onPress={handleAddNewSpending} />
    </Container>
  );
}
