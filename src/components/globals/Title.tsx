import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const TitleGlobal = ({ children }: { children: string }) => {

    // Step 3: Consume Context
    const {theme} = useContext(ThemeContext);

  return <h2 className={`text-xl ${theme ==="dark" ? "text-pink-400":"text-red-700"}`}>{children} {theme}</h2>;
};

export default TitleGlobal;
