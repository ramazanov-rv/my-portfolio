import { nanoid } from 'nanoid'

const Skills = () => {
    const skills = [
        {name: "HTML",},
        {name: "NextJs"},
        {name: "CSS/SCSS"},
        {name: "Strapi"},
        {name: "Javascript"},
        {name: "Git"},
        {name: "React"}

    ]

    let skillsArray = skills.map((skill) => {
        return (
            <div key={nanoid()} className="skill">
                <h4>{skill.name}</h4>
            </div>
        )
    })

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
