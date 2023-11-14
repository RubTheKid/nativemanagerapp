import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const themes = {
  primary: {
    backgroundColor: '#3498db',
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: '#2ecc71',
    color: '#ffffff',
  },
};

const StyledButton = styled(TouchableOpacity)`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 16px;
`;

export const MyButton = ({ title, onPress, theme }) => (
    <ThemeProvider theme={themes[theme]}>
      <StyledButton onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </StyledButton>
    </ThemeProvider>
  );