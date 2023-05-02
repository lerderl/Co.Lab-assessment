import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./App.css";
import Joseph from "./images/joseph.jpg";

function App() {
  return (
    <>
      {/* The navbar */}
      <nav className="navbar sticky-top navbar-expand-lg navbar_background">
        <section className="container-fluid content_margin">
          <Link className="navbar-brand" to="/">
            <img
              src={Joseph}
              alt="My profile thumbnail"
              width="60"
              height="48"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link color_text" to="#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link color_text" to="/">
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

      {/* About me */}
      <section className="card text-center" id="about">
        <article className="card-body">
          <h5 className="card-title">Hi!, I am Joseph Olukunle</h5>
          <p className="card-text">
            I am a software engineer with sufficient expertise in designing and
            implementing scalable, maintainable and reliable solutions using
            best practices and development methodologies. <br />I currently
            reside in Lagos, Nigeria.
          </p>
          <ExternalLink
            href="https://drive.google.com/file/d/1hAsk_sxe0euSxJfx4xPnzp34HM6OV9O7/view?usp=share_link"
            className="btn button_color color_text"
          >
            Check me out
          </ExternalLink>
        </article>
      </section>
    </>
  );
}

export default App;
