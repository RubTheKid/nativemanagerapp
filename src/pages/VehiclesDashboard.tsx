import React, { useState } from "react";
import { Header } from "../components/ui/.global/Header";
import { Container } from '../components/ui/.global/styles/contentStyles'

import { ValidateCpf } from "../storage/functions/validateCpf";
import { Alert, Button } from "react-native";
import { formatAmount } from "../storage/functions/formatAmount";
import { spendingCreate } from "../storage/functions/spendingCreate";
import { getAllSellers } from "../storage/functions/getAllSellers";
import { Input } from "../components/inputs/input";
import { InputAmount } from "../components/inputs/inputAmount";
import { InputDate } from "../components/inputs/inputDate";

import { MyButton } from '../components/ui/.global/Button/index'
import { ValidateCode } from "../storage/functions/validateCode";
import { getAllVehicles } from "../storage/functions/getAllVehicles";
import { CreateVehicle } from "../storage/functions/createVehicle";

export function VehiclesDashboard(){

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    
    async function handleAddNewSpending() {

        const validatedCode = ValidateCode(code)

        if(!validatedCode){
            return Alert.alert("Codigo Inválido.")
        }
        if(!name){
            return Alert.alert("Digite o nome do veículo.")
        }
        if(!value){
            return Alert.alert("Insira o valor da venda.")
        }
        if(!date){
            return Alert.alert("Insira uma data válida.")
        }
        
        const data = {
            code,
            value: formatAmount(value),
            name,
            date
        }

        await CreateVehicle(data)
        setCode("")
        setName("")
        setValue("")
        setDate("")
        const result = await getAllVehicles()
        console.log(result)
        return Alert.alert("Veículo adicionado com sucesso")
    }
    
    return(
        <Container>
            <Header title="Controle de veículos" />

            <Input placeholder="Código do veículo"
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
        
    )
}