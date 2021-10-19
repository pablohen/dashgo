import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface ContextData extends UseDisclosureReturn {}

interface ProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as ContextData);

export const SidebarDrawerProvider = ({ children }: ProviderProps) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext);
  return context;
};
