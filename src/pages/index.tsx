import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import Input from '../components/Form/Input';

const Home = () => {
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
        >
          <Stack spacing="4">
            <Input name="email" label="Email" placeholder="email" />

            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="password"
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
