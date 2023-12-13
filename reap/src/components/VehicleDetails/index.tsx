import {
  Container,
  Description,
  Amount,
  Footer,
  Category,
  Date,
} from "./styles";

import { VehicleDTO } from "../../storage/suplliers/VehicleDTO";
type Props = {
  data: VehicleDTO;
};

export function VehicleDetails({ data }: Props) {
  return (
    <Container>
      <Description>{data.name}</Description>
      <Amount>${data.value}</Amount>
      {data.tax != null ? (
        <Amount>{`Imposto: ${data.tax}`}</Amount>
      ) : null}

      <Footer>
        <Category>Código: {data.code}</Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
