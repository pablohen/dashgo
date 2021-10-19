import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { ForwardRefRenderFunction } from 'toasted-notes/node_modules/@types/react';

interface Props extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        bg="gray.900"
        variant="filled"
        _hover={{ bg: 'gray.900' }}
        focusBorderColor="pink.500"
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default forwardRef(Input);
