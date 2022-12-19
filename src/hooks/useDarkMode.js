import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.setItem("theme", theme);
    const getTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(getTheme);
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
