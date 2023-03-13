import { ThemeProvider } from "./ThemeContext";

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
