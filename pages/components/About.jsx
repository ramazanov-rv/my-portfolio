
const About = ({aboutText, aboutRef, aboutInView}) => {
  return (
    <section className="about" id="about">
      <h1 className="about-title section-title">
        About Me
      </h1>
      <p ref={aboutRef} className={!aboutInView ? "about-me" : "about-me animate"}>
        {aboutText}
      </p>
    </section>
  );
};

export default About;
