import { Flex, Icon, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

interface Props {}

const SearchBox = (props: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      px="8"
      py="4"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        px="4"
        mr="4"
        _placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
};

export default SearchBox;
