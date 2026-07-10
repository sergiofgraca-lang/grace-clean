import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;