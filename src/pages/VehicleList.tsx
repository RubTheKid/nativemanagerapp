import { useCallback, useEffect, useState } from "react";
import { FlatList } from 'react-native'
import { SellerControlDTO } from "../storage/DTOs/SellerControlDTO";
import { getAllSellers } from "../storage/functions/getAllSellers";
import { useFocusEffect } from "@react-navigation/native";
import { Container, Transactions } from "../components/ui/.global/styles/contentStyles";
import { Header } from "../components/ui/.global/Header";
import { ListCard } from "../components/cards/listCard";
import { VehicleDTO } from "../storage/DTOs/VehicleDTO";
import { getAllVehicles } from "../storage/functions/getAllVehicles";

export function VehicleList(){
    const [vehiclesData, setVehicleList] = useState<VehicleDTO[]>([]);

async function loadVehicleData(){
    const data = await getAllVehicles();
    setVehicleList(data)
}

useFocusEffect(
    useCallback(() => {
        loadVehicleData();
    }, [])
  );



return(
    <Container>
        <Header title="Listagem de Veículos" />
        <Transactions>
            <FlatList
            data={vehiclesData}
            renderItem={({ item }) => <ListCard data={ item } />}
            showsVerticalScrollIndicator={false}
            />
        </Transactions>
    </Container>
)

}
