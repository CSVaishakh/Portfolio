import React from "react";
import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/project";
import projectData from './projectData.json'

const Projects: React.FC = () => {
    const data: Project[] = Object.values(projectData.projects)

    return(
        <section>
            <div>
                {data.map((project, index) => (<ProjectCard key={index} project={project}/>))}
            </div>
        </section>
    )
}

export default Projects;