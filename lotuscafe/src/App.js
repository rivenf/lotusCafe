import "./App.css";
import Header from "./Header.js";
import Menu from "./Menu.js";
import About from "./About.js";
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Menu />
      </main>
      <Footer />
    </>
  );
}

export default App;
