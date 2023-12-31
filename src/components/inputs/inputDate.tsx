import { TextInputProps } from 'react-native'

import {
  Container,
  InputValueStyle
} from './inputStyles'

type InputProps = TextInputProps

export function InputDate({ ...rest }: InputProps) {
  return (
    <Container>
      <InputValueStyle
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        {...rest}
      />
    </Container>
  )
}

