import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'toasted-notes/node_modules/@types/react';

interface Props {
  title: string;
  children: ReactNode;
}

const NavSection = ({ title, children }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
