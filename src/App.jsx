import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {

  const [color] = useState("#eb568f")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio" elemrnt={<Inicio />} />
    </Routes>
  )
}

export default App