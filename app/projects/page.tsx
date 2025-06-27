import React from "react";
import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/project";
import projectData from './projectData.json'

const Projects: React.FC = () => {
    const data: Project[] = Object.values(projectData.projects)

    return(
        <section className="py-8 px-2 flex justify-center">
            <div className="w-full max-w-6xl flex justify-center">
                <div
                    className={`
                        grid gap-8 place-items-strech
                        ${data.length === 1 ? "grid-cols-1" : ""}
                        ${data.length === 2 ? "grid-cols-2" : ""}
                        ${data.length >= 3 ? "grid-cols-3" : ""}
                    `}
                >
                    {data.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;