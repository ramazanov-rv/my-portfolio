
const About = ({aboutText}) => {

  return (
    <section className="about" id="about">
      <h1 className="about-title section-title">
        About Me
      </h1>
      {/* <p className={!inView ? "about-me" : "about-me animate"}> */}
      <p className="about-me">
        {aboutText}
      </p>
    </section>
  );
};

export default About;
