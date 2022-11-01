const Skills = ({skillsArray}) => {

    return (
        <section className="skills">
            <h1 className="section-title">Skills</h1>
            <div className="skills-container">
                {skillsArray}
            </div>
        </section>
    );
}

export default Skills;
