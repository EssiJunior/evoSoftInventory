// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGES
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;  