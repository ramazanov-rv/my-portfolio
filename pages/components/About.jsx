import { useInView } from "react-intersection-observer";

const About = ({aboutText}) => {
  const { ref, inView } = useInView();

  return (
    <section className="about" id="about">
      <h1 ref={ref} className="about-title section-title">
        About Me
      </h1>
      <p className={!inView ? "about-me" : "about-me animate"}>
        {aboutText}
      </p>
    </section>
  );
};

export default About;
