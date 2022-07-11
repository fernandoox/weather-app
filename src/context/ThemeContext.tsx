import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
interface Theme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
export const ThemeContext = createContext<Theme>({
  theme: 'light',
  setTheme: () => {}
});

interface child {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<child> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
