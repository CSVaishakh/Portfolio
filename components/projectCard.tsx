import React from "react";

type Project = {
    title: string;
    subtitle:string;
    duration:string;
    descreption:string;
    keyfeatures: string[];
    technologies: string[];
}

const ProjectCard: React.FC<{project: Project}> = ({project}) => {
    return(
        <section>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <p>{project.duration}</p>
            <p>{project.descreption}</p>
            <div>
                <p>Key Features</p>
                <ul>
                    {project.keyfeatures.map((feature, index) => (<li key={index}>{feature}</li>))}
                </ul>
            </div>
            <div>
                <p>Technologies Useed</p>
                <ul>
                    {project.technologies.map((technology, index) => (<li key={index}>{technology}</li>))}
                </ul>
            </div>
        </section>
    )
}

export default ProjectCard;