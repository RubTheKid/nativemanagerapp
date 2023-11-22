import { SellerControlDTO } from "../../storage/DTOs/SellerControlDTO"
// import { Amount, Category, Container, Description, Footer } from "../../ui/List/style"
import {
    Container,
    Description,
    Amount,
    Footer,
    Category,
    Date,
  } from '../ui/List/style';


type Props = {
    data: SellerControlDTO
}

export function ListSells ({ data }: Props){
    return(
        <Container>
            <Description>{data.product}</Description>
            <Amount>$ {data.value}</Amount>
            <Footer>
                <Category>CPF {data.cpf}</Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}