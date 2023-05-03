import { ExternalLink } from "react-external-link";

const About = () => {
  return (
    <section className="card text-center" id="about">
      <article className="card-body mt-3 mb-3">
        <h1 className="card-title title_color">Hi!, I am Joseph Olukunle</h1>
        <p className="card-text">
          I am a software engineer with sufficient expertise in designing and
          implementing scalable, maintainable and reliable solutions using best
          practices and development methodologies. <br />I currently reside in
          Lagos, Nigeria.
        </p>
        <ExternalLink
          className="btn button_color color_text"
          href="https://drive.google.com/file/d/1hAsk_sxe0euSxJfx4xPnzp34HM6OV9O7/view?usp=share_link"
        >
          Check me out
        </ExternalLink>
      </article>
    </section>
  );
};

export default About;
