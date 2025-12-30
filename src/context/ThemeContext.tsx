import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";

type ThemeContextType = {
    dark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [dark, setDark] = useLocalStorage("theme-dark", false);

    const toggleTheme = () => setDark((prev) => !prev);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);


    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
}
