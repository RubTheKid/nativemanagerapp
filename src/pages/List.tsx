import { useCallback, useEffect, useState } from "react";
import { FlatList } from 'react-native'
import { SellerControlDTO } from "../storage/DTOs/SellerControlDTO";
import { getAllSellers } from "../storage/functions/getAllSellers";
import { useFocusEffect } from "@react-navigation/native";
import { Container, Transactions } from "../components/ui/.global/styles/contentStyles";
import { Header } from "../components/ui/.global/Header";
import { ListSells } from "../components/cards/cards";

export function ListExpenses(){
    const [dataExpenses, setListExpenses] = useState<SellerControlDTO[]>([]);

async function loadDataSells(){
    const data = await getAllSellers();
    setListExpenses(data)
}

useFocusEffect(
    useCallback(() => {
        loadDataSells();
    }, [])
  );



return(
    <Container>
        <Header title="Listagem de Vendas" />
        <Transactions>
            <FlatList data={dataExpenses} renderItem={({ item }) => <ListSells data={ item } />} showsVerticalScrollIndicator={false} />
        </Transactions>
    </Container>
)

}