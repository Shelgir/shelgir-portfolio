import React, { useState, useEffect, useContext, createContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  spruce,
  tokyoDark,
  matrix,
  blackAndWhite,
  redWine,
} from "react95/dist/themes";

const ThemeContext = createContext();
const themes = [spruce, tokyoDark, matrix, blackAndWhite, redWine];
console.log(themes[0]);

const ThemesProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(spruce);
  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        themes,
      }}
    >
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);

export { ThemesProvider, useTheme };
