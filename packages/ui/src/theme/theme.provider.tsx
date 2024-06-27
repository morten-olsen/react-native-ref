import { ThemeProvider } from "styled-components/native";
import { type Theme } from "./theme.types";

interface ProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const Provider: React.FC<ProviderProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Provider };
