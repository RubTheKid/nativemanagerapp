
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
interface HeaderProps {
    title: string;
};

export function Header({title} : HeaderProps) {
    return(
        <HeaderContainer>
            <Title> {title} </Title>
        </HeaderContainer>
    );
};




const HeaderContainer = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-weight: bold;
    font-size: ${RFValue(24)}px;
`