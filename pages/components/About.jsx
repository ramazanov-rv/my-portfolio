import { useInView } from "react-intersection-observer";

const About = () => {
  const {ref, inView} = useInView()

  return (
    <section className="about" id="about">
      <h1 ref={ref} className="about-title section-title">About Me</h1>
      <p className={!inView ? "about-me" : "about-me animate"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga
        enim natus neque saepe nisi ad, quas nulla eos nesciunt nostrum veniam
        aliquam cum! Quod culpa rerum tenetur saepe. Exercitationem, ipsum.
        Atque voluptates adipisci aliquid sunt exercitationem. Labore,
        repellendus deserunt. Incidunt veritatis maiores repellendus vero magni
        placeat iusto voluptatibus veniam quam quidem, ratione qui blanditiis
        culpa odio, rem similique id ullam provident ducimus tempora a!
      </p>
    </section>
  );
};

export default About;
