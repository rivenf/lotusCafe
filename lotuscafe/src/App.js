import "./App.css";
import Header from "./Header.js";
import Menu from "./Menu.js";
import About from "./About.js";
import Reservations from "./Reservations.js";
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Menu />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}

export default App;
