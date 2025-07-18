'use client';
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "Java", "TypeScript", "SQL", "Go"]
        },
        {
            title: "Libraries",
            skills: ["React.js", "Express.js", "TailwindCSS", "Shadcn"]
        },
        {
            title: "Frameworks",
            skills: ["FastAPI", "Next.js", "Node.js"]
        },
        {
            title: "Tools",
            skills: ["VS Code", "Git", "Figma", "PostgreSQL"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-100 via-white to-blue-300 py-10 sm:py-16 px-4 sm:px-8 "
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 sm:mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 tracking-tight drop-shadow-lg">
                        Skills & Technologies
                    </h1>
                    <p className="text-base sm:text-lg text-black leading-relaxed">
                        🛠️ A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center md:items-center text-center md:text-left"
                        >
                            <motion.span
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 bg-blue-100 hover:bg-blue-200 border-2 border-blue-300 hover:border-blue-400 text-black font-semibold text-sm sm:text-base min-w-[100px] sm:min-w-[120px] flex-shrink-0 shadow-sm mb-2 md:mb-0"
                            >
                                {category.title}
                            </motion.span>
                            <motion.div variants={containerVariants} className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={skillVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(59, 130, 246, 0.1)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center px-2 sm:px-3 py-1 rounded-lg cursor-pointer transition-all duration-200 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
                                    >
                                        <span className="text-black font-medium hover:text-gray-800 text-xs sm:text-sm">
                                            {skill}
                                        </span>
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Skills;