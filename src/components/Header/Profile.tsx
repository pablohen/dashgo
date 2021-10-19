import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  showProfileData: boolean;
}

const Profile = ({ showProfileData = true }: Props) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pablo Henrique</Text>
          <Text color="gray.300" fontSize="small">
            pablo_hen@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pablo Henrique"
        src="https://github.com/pablohen.png"
        border="2px"
        p="2px"
        bg="transparent"
      />
    </Flex>
  );
};

export default Profile;
