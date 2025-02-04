import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MangaForm from "./components/Mangas/MangaForm";
import Mangasindex from "./components/Mangas/Mangasindex";
import HeaderApp from "./components/Layout/HeaderApp";
import FooterApp from "./components/Layout/FooterApp";
import NavbarApp from "./components/Layout/NavbarApp";
import Contacto from "./components/Mangas/Contacto";
import Bienvenida from "./pages/Bienvenida";

function App() {
  return (
    <Router>
      <HeaderApp/>
      <NavbarApp/>
      <main className="bg-zinc-800 h-screen text-white flex items-center justify-center">

        <Routes>
          <Route path="/inicio" element={<Bienvenida />} />
          <Route path="/servicios" element={<Mangasindex />} />
          <Route path="/proyectos" element={<MangaForm />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </main>
      <FooterApp/>
      
    </Router>
  );
}
export default App;
