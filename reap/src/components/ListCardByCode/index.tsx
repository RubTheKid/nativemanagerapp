import {
  Container,
  Description,
  Amount,
  Local,
  Footer,
  Category,
  Date,
} from "./styles";

export type Totals = { code: string, quantity: number, value: number };
type Props = {
  data: Totals
};

export function ListCardByCode({ data }: Props) {
  return (
    <Container>
      <Description>Código: {data.code}</Description>
      <Amount>Total de Veículos: {data.quantity}</Amount>
      <Local>Valor a Pagar: ${(Math.round(data.value)).toFixed(2)}</Local>
    </Container>
  );
}
