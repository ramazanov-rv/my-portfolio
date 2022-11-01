import Link from "next/link";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h1 className="section-title">Projects</h1>
            <div className="projects-container">
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Something Awesome</h2>
                        <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque beatae iure neque similique unde ad</p>
                        <Link href="/" target="_blanc">
                            <button className="card-button">Check It Out</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Something Awesome</h2>
                        <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque beatae iure neque similique unde ad</p>
                        <Link href="/" target="_blanc">
                            <button className="card-button">Check It Out</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Something Awesome</h2>
                        <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque beatae iure neque similique unde ad</p>
                        <Link href="/" target="_blanc">
                            <button className="card-button">Check It Out</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Something Awesome</h2>
                        <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque beatae iure neque similique unde ad</p>
                        <Link href="/" target="_blanc">
                            <button className="card-button">Check Site Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
