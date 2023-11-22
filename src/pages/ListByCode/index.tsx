import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Header } from "../../components/ui/Header";

import { Container, TextCard, Transactions } from "./styles";

import { validCpfs } from "../../storage/functions/validateCpf";
import { getAllSellers } from "../../storage/functions/getAllSellers";
import { ListCardByCode } from "../../components/ListByCode";
import { HeaderContainer } from "../../components/ui/Header/styles";
import { FlatList } from "react-native";


export function ListByCode(){
    const [dataSales, setListSales] = useState<{
        cpf: string,
        salesValue: number,
        comission:  number,
        salesQuantity: number,
        inss: number,
        liquidSalary:number,
        salary: number
    }[]>([]);

    async function loadDataSpending() {
        const data = await getAllSellers();
        let arr: {
          cpf: string,
          salesValue: number,
          comission:  number,
          salesQuantity: number,
          inss: number,
          liquidSalary: number,
          salary: number
        }[] = [] ; 
    
        validCpfs.forEach(cpf => {
          let salesValue = 0;
          let comission = 0;
          let salesQuantity = 0;
          let inss = 0;
          let liquidSalary = 0;
          const salary = 1300;
    
          data.forEach(d => {
            if (d.cpf == cpf) {
              salesValue += d.value;
              salesQuantity++;
    
              if (d.value < 100000) {
                comission += d.value * 0.01
              } else if (d.value >= 100000 && d.value < 200000) {
                comission += d.value * 0.02
              } else if (d.value >= 200000 && d.value < 300000) {
                comission += d.value * 0.03
              } else {
                comission += d.value * 0.05
              }
            }
    
    
        })
    
        inss = (salary + comission ) * 0.08
        liquidSalary = (salary + comission) - inss
        const dataExpense = {
          cpf: cpf,
          salesValue: salesValue,
          comission:  comission,
          salesQuantity: salesQuantity,
          inss: inss,
          liquidSalary: liquidSalary,
          salary: salary
        }
        console.log("VENDA:", dataExpense)
        arr.push(dataExpense)
        })
        setListSales(arr);
      }

      
  useFocusEffect(
    useCallback(() => {
      loadDataSpending();
    }, [])
  );

    
      return (
        <Container>
            <Header title="Listagem de vendas por CPF" />
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