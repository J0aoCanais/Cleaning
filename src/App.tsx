import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Limpezas from "./components/limpezas";
import Servicos from "./components/servicos";
import Contacto from "./components/contacto";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/limpezas" element={<Limpezas />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/orcarlimpeza" element={<Home />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
