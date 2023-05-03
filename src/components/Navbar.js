import { Link } from "react-router-dom";

import Joseph from "../images/joseph.jpg";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar_background">
      <section className="container-fluid content_margin">
        <Link className="navbar-brand" to="/">
          <img width="60" height="48" src={Joseph} alt="My profile thumbnail" />
        </Link>
        <button
          type="button"
          aria-expanded="false"
          data-bs-toggle="collapse"
          className="navbar-toggler"
          aria-label="Toggle navigation"
          aria-controls="navbarTogglerDemo02"
          data-bs-target="#navbarTogglerDemo02"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link color_text" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color_text" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color_text" to="#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color_text" to="/">
                Hobby
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
