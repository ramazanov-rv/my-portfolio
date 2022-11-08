import { useInView } from "react-intersection-observer";

const About = ({aboutText}) => {
  const {ref, inView} = useInView({
    triggerOnce: true
  })

  return (
    <section className="about" id="about">
      <h1 className="about-title section-title">
        About Me
      </h1>
      <p ref={ref} className={!inView ? "about-me" : "about-me animate"}>
        {aboutText}
      </p>
    </section>
  );
};

export default About;
