import { Button } from '@chakra-ui/react';

interface Props {
  number: number;
  isCurrent?: boolean;
}

const PaginationItem = ({ number, isCurrent = false }: Props) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
