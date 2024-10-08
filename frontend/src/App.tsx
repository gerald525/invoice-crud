import Router from "./routers";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config";
import { useTheme } from "./contexts/themeContext";
import "./App.css";

function App() {
	const mode = useTheme().mode;
	return (
		<ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
			<Router />
		</ThemeProvider>
	);
}

export default App;
