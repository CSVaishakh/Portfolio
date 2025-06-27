import React from "react";
import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/project";
import projectData from './projectData.json'
import Sidebar from "@/components/projectSidebar";

const Projects: React.FC = () => {
    const data: Project[] = Object.values(projectData.projects)

    return(
        <section className="py-8 px-2 flex flex-col items-center">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-black font-[system-ui,-apple-system,'SF Pro Display'] animate-fade-in-up animate-delay-200 leading-tight tracking-tight drop-shadow-lg">
                        Projects
                    </h1>
                    <p className="text-base sm:text-lg text-black/80 mt-4 leading-relaxed">
                        🚀 A showcase of my work and the technologies I&apos;ve used to bring ideas to life.
                    </p>
                </div>
                
                {/* Mobile Layout: Single Column */}
                <div className="block sm:hidden w-full space-y-6">
                    {data.map((project, index) => (
                        <div key={index} className="w-full">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                    <Sidebar />
                </div>
                
                {/* Desktop Layout: Two Columns */}
                <div className="hidden sm:block w-full">
                    {(() => {
                        const rows = [];
                        for (let i = 0; i < data.length; i += 2) {
                            rows.push(data.slice(i, i + 2));
                        }
                        return rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="w-full flex flex-row justify-center items-stretch gap-8 mb-8">
                                <div className="flex-1 max-w-xl">
                                    <ProjectCard project={row[0]} />
                                </div>
                                {row.length === 2 ? (
                                    <div className="flex-1 max-w-xl">
                                        <ProjectCard project={row[1]} />
                                    </div>
                                ) : (
                                    // If only one card in the last row, fill space
                                    <div className="flex-1 max-w-xl" />
                                )}
                                {rowIndex === Math.floor(rows.length / 2) && <Sidebar />}
                            </div>
                        ));
                    })()}
                </div>
            </div>
        </section>
    )
}

export default Projects;