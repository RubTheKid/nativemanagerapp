import { Amount, Container, Description, Local } from './cardStyles'


type Props = {
    data: {
        cpf: string,
        salesValue: number,
        comission:  number,
        salesQuantity: number,
        inss: number,
        liquidSalary: number,
        salary: number
    }};

    export function ListCardByCode({ data }: Props) {
        return (
          <Container>
            <Description>CPF: {data.cpf}</Description>
            <Amount>Total de Vendas: ${(Math.round(data.salesValue * 100) / 100).toFixed(2)}</Amount>
            <Local>Total de Comissões: ${(Math.round(data.comission * 100) / 100).toFixed(2)}</Local>
            <Local>Salário + Comissões: ${(Math.round((data.comission + data.salary) * 100) / 100).toFixed(2)}</Local>
            <Local>INSS: ${(Math.round((data.inss) * 100) / 100).toFixed(2)}</Local>
            <Local>Salário Líquido: ${(Math.round((data.liquidSalary) * 100) / 100).toFixed(2)}</Local>
          </Container>
        );
      }