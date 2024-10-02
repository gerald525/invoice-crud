import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
	mode: "dark" | "light";
	toggleMode: () => void;
}

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
	const [mode, setMode] = useState<"light" | "dark">("dark");
	const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

	return (
		<ThemeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
