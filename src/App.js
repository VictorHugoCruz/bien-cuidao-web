import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom'
import Inicio from "./pages/Inicio";
import Servicio from "./pages/Servicio";
import Parqueos from "./pages/Parqueos";
import Contactanos from "./pages/Contactanos";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicio" element={<Servicio />} />
          <Route path="/parqueos" element={<Parqueos />} />
          <Route path="/contactanos" element={<Contactanos />} />   
        </Routes>
      </Router>      
    </>
  );
}

export default App;
