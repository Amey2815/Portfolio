import { useState } from "react";
import Portfolio from "./pages/Portfolio"
import Navbar from "./components/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Portfolio isDarkMode={isDarkMode}  />
    </>
  )
}

export default App
