import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Contacto from "./componentes/Contacto/Contacto";
import Inicio from "./componentes/Inicio/Inicio";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />



      </Routes>
 


    </Router>
  );
}

export default App;
