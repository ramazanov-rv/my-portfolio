import Link from "next/link";

const ProjectCard = (props) => {
  const { title, description, link } = props;
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <Link href={link} target="_blanc">
            <button className="card-button">Check It Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
