import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export function useThemeContext() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Данные темы не были найдены");
  }

  return theme;
}