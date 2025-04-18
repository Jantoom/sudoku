import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { useEffect, cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { useGamesState } from './lib/state';

const queryClient = new QueryClient();

const App = () => {
  const { pathname } = useLocation();
  const element = useOutlet();
  const { theme, setTheme } = useGamesState();

  useEffect(() => {
    setTheme(theme || 'dark-blue');
  }, [theme, setTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        {element && cloneElement(element, { key: pathname })}
      </AnimatePresence>
    </QueryClientProvider>
  );
};

export default App;
