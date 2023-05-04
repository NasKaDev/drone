import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Devis from "./components/DevisForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devis" element={<Devis />} />
      </Routes>
    </>
  );
}

export default App;
