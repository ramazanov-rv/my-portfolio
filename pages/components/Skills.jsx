const Skills = ({ skillsArray, inViewSkill, refSkill }) => {
  return (
    <section className="skills">
      <h1 className="section-title">Skills</h1>
      <div
        ref={refSkill}
        className={
          !inViewSkill ? "skills-container" : "skills-container animate"
        }
      >
        {skillsArray}
      </div>
    </section>
  );
};

export default Skills;
