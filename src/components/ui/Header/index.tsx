import { HeaderContainer, Title } from './styles';

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