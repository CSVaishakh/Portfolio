import React from "react";
import { Project } from "@/types/project";


const ProjectCard: React.FC<{project: Project}> = ({project}) => {
    return(
        <section>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <p>{project.duration}</p>
            <p>{project.description}</p>
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
            <div>
                <p>The application is live at : {project.url}</p>
            </div>
        </section>
    )
}

export default ProjectCard;