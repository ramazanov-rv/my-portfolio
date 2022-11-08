import Link from "next/link";
import { useInView } from "react-intersection-observer";

const ProjectCard = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  const { title, description, link } = props;
  return (
    <div ref={ref} className={!inView ? "card" : "card animate"}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Link href={link} target="_blanc">
          <button className="card-button">Check It Out</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
