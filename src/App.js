import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./App.css";
import Joseph from "./images/joseph.jpg";

function App() {
  return (
    <section>
    {/* <section className="container"> */}
      {/* The navbar */}
      <nav className="navbar sticky-top navbar-expand-lg navbar_background">
        <section className="container-fluid content_margin">
          <Link className="navbar-brand" to="/">
            <img
              width="60"
              height="48"
              src={Joseph}
              alt="My profile thumbnail"
            />
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
          <section
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

      {/* About me */}
      <section className="card text-center" id="about">
        <article className="card-body mt-3 mb-3">
          <h5 className="card-title">Hi!, I am Joseph Olukunle</h5>
          <p className="card-text">
            I am a software engineer with sufficient expertise in designing and
            implementing scalable, maintainable and reliable solutions using
            best practices and development methodologies. <br />I currently
            reside in Lagos, Nigeria.
          </p>
          <ExternalLink
            className="btn button_color color_text"
            href="https://drive.google.com/file/d/1hAsk_sxe0euSxJfx4xPnzp34HM6OV9O7/view?usp=share_link"
          >
            Check me out
          </ExternalLink>
        </article>
      </section>

      {/* My projects */}
      <section className="row projects_background" id="projects">
        <h1 className="text-center mt-3">My Projects</h1>
        <section className="col-sm-6 mb-3">
          <section className="card h-100">
            <article className="card-body">
              <h5 className="card-title">A Bank's website</h5>
              <p className="card-text">
                This is a website I developed for Nigerian Navy Microfinance
                Bank Limited which also uses a sanity cms to display dynamic
                content.
              </p>
              <ExternalLink
                href="https://www.navymfb.com/"
                className="btn button_color color_text"
              >
                Go to website
              </ExternalLink>
            </article>
          </section>
        </section>
        <section className="col-sm-6 mb-3">
          <section className="card h-100">
            <article className="card-body">
              <h5 className="card-title">Demo Metabnb site</h5>
              <p className="card-text">
                This was a project to simply recreate the landing page and
                another of a metabnb design.
              </p>
              <ExternalLink
                href="https://lerderl-metabnb.netlify.app/"
                className="btn button_color color_text"
              >
                Go to live site
              </ExternalLink>
              <ExternalLink
                href="https://github.com/lerderl/metabnb"
                className="btn button_color color_text"
                style={{ marginLeft: '5px' }}
              >
                Go to github repo
              </ExternalLink>
            </article>
          </section>
        </section>
        <section className="col-sm-6 mb-3">
          <section className="card h-100">
            <article className="card-body">
              <h5 className="card-title">Employee-poll</h5>
              <p className="card-text">
                An application to improve employee collaboration and
                transparency in an organization.
              </p>
              <ExternalLink
                href="https://github.com/lerderl/Employee-poll"
                className="btn button_color color_text"
              >
                Go github repo
              </ExternalLink>
            </article>
          </section>
        </section>
        <section className="col-sm-6 mb-3">
          <section className="card h-100">
            <article className="card-body">
              <h5 className="card-title">MyReads</h5>
              <p className="card-text">
                This project's aim is to enable a user be able to move books
                between the three shelves in the application. A user can also
                search for a book.
              </p>
              <ExternalLink
                href="https://github.com/lerderl/MyReads"
                className="btn button_color color_text"
              >
                Go to github repo
              </ExternalLink>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default App;
