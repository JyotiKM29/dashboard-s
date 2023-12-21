import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import Router from './Router/Router';

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
