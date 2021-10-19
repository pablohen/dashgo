import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Form/Input';
import Link from 'next/link';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {}

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'Mínimo de 8 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas devem ser iguais'),
});

const CreateUserPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(createUserFormSchema) });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                name="email"
                type="email"
                label="Email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register('password')}
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUserPage;
