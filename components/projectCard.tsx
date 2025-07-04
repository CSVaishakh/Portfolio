import React from "react";
import { Project } from "@/types/project";


const ProjectCard: React.FC<{project: Project}> = ({project}) => {
    return (
        <section className="flex flex-col justify-between bg-gradient-to-r from-blue-100 via-white to-blue-300 rounded-2xl shadow-xl border border-blue-200 p-4 sm:p-6 transition-all hover:shadow-2xl hover:-translate-y-1 h-full min-h-[450px] sm:min-h-[500px] w-full">
            <div className="flex-grow">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2 tracking-tight drop-shadow">{project.title}</h3>
                <p className="text-base sm:text-lg text-black/80 mb-1">{project.subtitle}</p>
                <p className="text-xs sm:text-sm text-blue-700 mb-3 sm:mb-4">{project.duration}</p>
                <p className="text-sm sm:text-base text-black mb-4 sm:mb-6">{project.description}</p>
                <div className="mb-3 sm:mb-4">
                    <p className="font-semibold text-black mb-1 text-sm sm:text-base">Key Features</p>
                    <ul className="list-disc list-inside ml-2 sm:ml-4 space-y-1">
                        {project.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-black/90 text-xs sm:text-sm">{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4 sm:mb-6">
                    <p className="font-semibold text-black mb-1 text-sm sm:text-base">Technologies Used</p>
                    <ul className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((technology, index) => (
                            <li
                                key={index}
                                className="bg-white/80 border border-blue-200 text-blue-900 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium shadow-sm hover:bg-blue-100 transition"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-auto">
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-6 py-2 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
                >
                    View Live Application
                </a>
            </div>
        </section>
    );
};

export default ProjectCard;