import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(""); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;