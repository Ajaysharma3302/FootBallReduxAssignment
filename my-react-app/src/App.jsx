import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MatchesList from './components/MatchesList';
function App() {
  return (
    <ChakraProvider>
      <>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Football Match Tracker</h1>
        <MatchesList />
      </>
    </ChakraProvider>
  );
}

export default App;