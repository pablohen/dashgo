import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signInFormSchema) });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, e) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
    errors;
  };

  return (
    <div>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW="360"
          bg="gray.800"
          p="8"
          borderRadius="8"
          direction="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              name="email"
              label="Email"
              placeholder="email"
              error={errors.email}
              {...register('email')}
            />

            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="password"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default SignIn;
