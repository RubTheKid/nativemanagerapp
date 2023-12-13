import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Header } from "../components/ui/.global/Header";

import { Container, TextCard, Transactions } from "../components/ui/.global/styles/contentStyles";

import { validCpfs } from "../storage/functions/validateCpf";
import { getAllVehicles } from "../storage/functions/getAllVehicles";
import { ListCardByCode, Totals } from "../components/cards/byCodeCard";
import { validCodes } from "../storage/functions/validateCode";
import { FlatList } from "react-native";


export function ListByCode(){

  const [dataSales, setDataSales] = useState<Totals[]>([])


  async function loadDataSpending() {
    const data= await getAllVehicles();


  let arr: Totals[] = [] ; 
    let joinFlag: Totals = { code: "001020 + 003040", quantity: 0, value: 0}


    validCodes.forEach(code => {
 
      const currentCode = code;
      let quantity = 0;
      let value = 0;

      data.forEach(d => {
        if (d.code == code) {
          quantity++;
          const tax = d.value * 0.02
          value += d.value + tax
        }
    })

    if (code != "001020" && code!= "003040") {
      const dataExpense = { code: currentCode, quantity: quantity, value: value}
      arr.push(dataExpense)
    } else {
      joinFlag = { code : joinFlag.code, quantity: joinFlag.quantity + quantity, value: joinFlag.value + value}
    }
  })
    arr.push(joinFlag)
    setDataSales(arr);
  }

  useFocusEffect(
    useCallback(() => {
      loadDataSpending();
    }, [])
  );

    
      return (
        <Container>
      <Header title="Listagem de Veículos por Cliente" />


        <Transactions>
        <FlatList
          data={dataSales}
          renderItem={({ item }) => <ListCardByCode data={item} />}
          showsVerticalScrollIndicator={false}
        />
    </Transactions>
 
    </Container>
      )

}