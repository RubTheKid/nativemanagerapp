import { SellerControlDTO } from "../../storage/DTOs/SellerControlDTO"
import { VehicleDTO } from "../../storage/DTOs/VehicleDTO";

import { Container, Description, Amount, Footer, Category, Date } from './cardStyles';


type Props = {
    data: VehicleDTO
}

export function ListCard ({ data }: Props){
    return(
        <Container>
            <Description>{data.name}</Description>
            <Amount>$ {data.value}</Amount>
            <Footer>
                <Category>Codigo {data.code}</Category>
                <Date>{data.tax?.toFixed(2)}</Date>
            </Footer>
        </Container>
    )
}

export function ListCardCode({data} : Props){
    return(
        <Container>
             <Description>{data.name}</Description>
            <Amount>$ {data.value}</Amount>
            <Footer>
                <Category>Codigo {data.code}</Category>
                <Date>Imposto: {data.tax?.toFixed(2)}</Date>
                
            </Footer>
            <Footer>
            <Category>Valor com imposto: R$ {data.totalValue?.toFixed(2)}</Category>
            </Footer>
        </Container>
    )
}