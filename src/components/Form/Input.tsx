import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface Props extends ChakraInputProps {
  name: string;
  label?: string;
}

const Input = ({ name, label, ...rest }: Props) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        bg="gray.900"
        variant="filled"
        _hover={{ bg: 'gray.900' }}
        focusBorderColor="pink.500"
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
