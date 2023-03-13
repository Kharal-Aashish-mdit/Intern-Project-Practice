import React from "react";

type ThemeMode = "dark" | "light"

type ThemeType = {
  theme: ThemeMode;
  themeToggler: () => void;
};

// Step 1: Create Context
export const ThemeContext = React.createContext<ThemeType>({
  theme: "light",
  themeToggler:()=>{}
});

// Step 2: Create Context Provider (Theme Provider)
type ThemeContextProp = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeContextProp) => {
  const [theme, setTheme] = React.useState<ThemeMode>("light");

  console.log("working")
  const themeToggler = () => {
    console.log("working")
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{theme, themeToggler:themeToggler}}>
      {children}
    </ThemeContext.Provider>
  );
};
