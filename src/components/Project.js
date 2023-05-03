import { ExternalLink } from "react-external-link";

const Project = () => {
  return (
    <section className="row projects_background" id="projects">
      <h1 className="text-center mt-3">My Projects</h1>
      <section className="col-sm-6 mb-3">
        <section className="card h-100">
          <article className="card-body">
            <h5 className="card-title">A Bank's website</h5>
            <p className="card-text">
              This is a website I developed for Nigerian Navy Microfinance Bank
              Limited which also uses a sanity cms to display dynamic content.
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
              This was a project to simply recreate the landing page and another
              of a metabnb design.
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
              style={{ marginLeft: "5px" }}
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
              An application to improve employee collaboration and transparency
              in an organization.
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
  );
};

export default Project;
