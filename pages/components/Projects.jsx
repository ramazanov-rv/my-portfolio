import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: FRef, inView: FInView, entry } = useInView();
  const { ref: SRef, inView: SinView } = useInView();
  const { ref: TRef, inView: TinView } = useInView();

  return (
    <section id="projects" className="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <div ref={FRef} className={!FInView ? "card" : "card animate"}>
          <div className="card-content">
            <h2 className="card-title">Something Awesome</h2>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              doloremque beatae iure neque similique unde ad
            </p>
            <Link href="/" target="_blanc">
              <button className="card-button">Check It Out</button>
            </Link>
          </div>
        </div>
        <div ref={SRef} className={!SinView ? "card" : "card animate"}>
          <div className="card-content">
            <h2 className="card-title">Something Awesome</h2>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              doloremque beatae iure neque similique unde ad
            </p>
            <Link href="/" target="_blanc">
              <button className="card-button">Check It Out</button>
            </Link>
          </div>
        </div>
        <div ref={TRef} className={!TinView ? "card" : "card animate"}>
          <div className="card-content">
            <h2 className="card-title">Something Awesome</h2>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              doloremque beatae iure neque similique unde ad
            </p>
            <Link href="/" target="_blanc">
              <button className="card-button">Check It Out</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
