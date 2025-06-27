import React from "react";
import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/project";
import projectData from './projectData.json'
import Sidebar from "@/components/projectSidebar";

const Projects: React.FC = () => {
    const data: Project[] = Object.values(projectData.projects)
    // Prepare rows of two cards each
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
        rows.push(data.slice(i, i + 2));
    }

    return(
        <section className="py-8 px-2 flex justify-center">
            <div className="w-full max-w-6xl flex flex-col items-center">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="w-full flex flex-row justify-center items-stretch gap-8 mb-8">
                        <ProjectCard project={row[0]} key={rowIndex * 2} />
                        {row.length === 2 ? (
                            <ProjectCard project={row[1]} key={rowIndex * 2 + 1} />
                        ) : (
                            // If only one card in the last row, fill space
                            <div className="flex-1" />
                        )}
                        {rowIndex === Math.floor(rows.length / 2) && <Sidebar />}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;