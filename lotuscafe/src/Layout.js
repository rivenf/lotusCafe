import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  const [dropIsActive, setDropIsActive] = useState(false);

  function toggleDrop() {
    dropIsActive ? setDropIsActive(false) : setDropIsActive(true);
  }

  return dropIsActive ? (
    <>
      <button className="dropBtn" onClick={toggleDrop}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <Link to="/">About us</Link>
      <Link to="/menu">View the menu</Link>
      <Link to="/reservations">Make a reservation</Link>
    </>
  ) : (
    <>
      <button className="dropBtn" onClick={toggleDrop}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
}

function DesktopNav() {
  return (
    <>
      <Link to="/">About us</Link>
      <Link to="/menu">View the menu</Link>
      <Link to="/reservations">Make a reservation</Link>
    </>
  );
}

function Header() {
  return (
    <header>
      <img src="images/pink_lotus.jpg" alt="Lotus Cafe" className="headerBg" />
      <div className="gradient"></div>
      <div className="headerText">
        <img
          src="images/lotusLogo.png"
          alt="Lotus Cafe logo"
          className="logo"
        />
        <Link to="/">
          <h1>The Lotus Cafe</h1>
        </Link>
      </div>
    </header>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <nav className="mobileNav">
        <MobileNav />
      </nav>
      <nav className="desktopNav">
        <DesktopNav />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
