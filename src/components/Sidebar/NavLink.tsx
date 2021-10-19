import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react';
import React from 'react';
import { ElementType } from 'toasted-notes/node_modules/@types/react';
import ActiveLink from '../ActiveLink';

interface Props extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

const NavLink = ({ icon, children, href, ...rest }: Props) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
