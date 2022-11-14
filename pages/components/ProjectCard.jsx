import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ProjectCard = (props) => {
  const { title, description, link, img } = props;
  const { ref: proRef, inView: proInView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={proRef} className={!proInView ? "card" : "card animate"}>
      <div className="project-img">
        <Image width={620} height={380} src={img} alt="project image" blurDataURL="blur"/>
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} target="_blanc">
          <button className="card-button">Check It Out</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
