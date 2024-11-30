import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Menu from "./Menu.js";
import About from "./About.js";
import Reservations from "./Reservations.js";
import NoPage from "./NoPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lotusCafe" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/lotusCafe/menu" element={<Menu />} />
          <Route path="/lotusCafe/reservations" element={<Reservations />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
