import React, { createContext, useState } from 'react';

export const ThemeContext = createContext<any>({ theme: 'light', undefined });

interface child {
    children?: React.ReactNode;
}

export const ThemeProvider: React.FC<child> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}
