import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./contexts/themeContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</StrictMode>
);
