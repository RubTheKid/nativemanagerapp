import { TextInputProps } from 'react-native'

import {
  Container,
  InputValueStyle
} from './inputStyles'

type InputProps = TextInputProps

export function InputAmount({ ...rest }: InputProps) {
  return (
    <Container>
      <InputValueStyle
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
        }}
        {...rest}
      />
    </Container>
  )
}

