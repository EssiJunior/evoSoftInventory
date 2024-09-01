// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGES
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;  