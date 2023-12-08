'use client'

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getThemeStatusFromLocalStorage = () => {
    {/** 서버 사이드는 localStorage X */}
    if (typeof window !== "undefined") {
      const status = localStorage.getItem("theme");
      return status;
    }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getThemeStatusFromLocalStorage();
  });

  const toggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
