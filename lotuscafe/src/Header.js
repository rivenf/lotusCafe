import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [dropIsActive, setDropIsActive] = useState(false);

  function toggleDrop() {
    dropIsActive ? setDropIsActive(false) : setDropIsActive(true);
  }

  return dropIsActive ? (
    <nav>
      <button className="dropBtn" onClick={toggleDrop}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <a href="#">About Us</a>
      <a href="#">View Menu</a>
      <a href="#">Make a Reservation</a>
    </nav>
  ) : (
    <nav>
      <button className="dropBtn" onClick={toggleDrop}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}

export default function Header() {
  return (
    <>
      <header>
        <img
          src="images/pink_lotus.jpg"
          alt="Lotus Cafe"
          className="headerBg"
        />
        <div className="gradient"></div>
        <div className="headerText">
          <img
            src="images/lotusLogo.png"
            alt="Lotus Cafe logo"
            className="logo"
          />
          <h1>The Lotus Cafe</h1>
        </div>
      </header>
      <Navigation />
    </>
  );
}
