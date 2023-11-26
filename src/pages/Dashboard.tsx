import React, { useState } from "react";
import { Header } from "../components/ui/Header";
import { Container } from '../components/ui/.global/styles/contentStyles'

import { ValidateCpf } from "../storage/functions/validateCpf";
import { Alert, Button } from "react-native";
import { formatAmount } from "../storage/functions/formatAmount";
import { spendingCreate } from "../storage/functions/spendingCreate";
import { getAllSellers } from "../storage/functions/getAllSellers";
import { Input } from "../components/Input";
import { InputAmount } from "../components/InputAmount";
import { InputDate } from "../components/InputDate";

import { MyButton } from '../components/ui/.global/Button/index'

export function SellersDashboard(){

    const [cpf, setCpf] = useState("");
    const [product, setProduct] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    
    async function handleAddNewSpending() {

        const validatedCpf = ValidateCpf(cpf)

        if(!validatedCpf){
            return Alert.alert("CPF Inválido.")
        }
        if(!product){
            return Alert.alert("Digite o nome do produto.")
        }
        if(!value){
            return Alert.alert("Insira o valor da venda.")
        }
        if(!date){
            return Alert.alert("Insira uma data válida.")
        }
        
        const data = {
            cpf,
            value: formatAmount(value),
            product,
            date
        }

        await spendingCreate(data)
        setCpf("")
        setProduct("")
        setValue("")
        setDate("")
        const result = await getAllSellers()
        console.log(result)
        return Alert.alert("Venda adicionada com sucesso")
    }
    
    return(
        <Container>
            <Header title="Controle de vendas" />

            <Input placeholder="CPF do Vendedor"
                placeholderTextColor="#363F5F"
                value={cpf}
                onChangeText={(value) => setCpf(value)}
            />

            <Input
                placeholder="Produto"
                placeholderTextColor="#363F5F"
                value={product}
                onChangeText={(value) => setProduct(value)}
            />

            <InputAmount
                placeholder="Valor da Venda"
                placeholderTextColor="#363F5F"
                value={value}
                onChangeText={(value) => setValue(value)}
            />

            <InputDate
                placeholder="Data da Venda"
                placeholderTextColor="#363F5F"
                value={date}
                onChangeText={(value) => setDate(value)}
            />

        <Button title="Adicionar" onPress={handleAddNewSpending} />

            
        </Container>
        
    )
}