function Navigation() {
  return (
    <nav>
      <a href="#">About Us</a>
      <a href="#">View Menu</a>
      <a href="#">Make a Reservation</a>
    </nav>
  );
}

export default function Header() {
  return (
    <>
      <header>
        <img src="images/patio.jpg" alt="Lotus Cafe" className="headerBg" />
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
