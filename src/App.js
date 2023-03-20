import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

import { useEffect, useState } from "react";

function App() {
  const [themes, setTheme] = useState(lightTheme);
  const [chosenTheme, setChosenTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    sessionStorage.setItem("theme", chosenTheme);
    setTheme(chosenTheme === "light" ? lightTheme : darkTheme);
  }, [chosenTheme]);

  return (
    <ThemeProvider theme={themes}>
      <AppRouter chosenTheme={chosenTheme} setChosenTheme={setChosenTheme} />
    </ThemeProvider>
  );
}

export default App;
