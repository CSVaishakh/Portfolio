'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-100 via-white to-blue-300"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-black mb-2 tracking-tight drop-shadow-lg">
                        About Me
                    </h1>
                    <p className="text-lg text-black leading-relaxed">
                        👋 Hi, I'm C S Vaishakh — Full Stack Developer and a Third-year Artificial Intelligence & Data Science student. I'm passionate about building intelligent systems, exploring emerging technologies, and turning ideas into impactful solutions. With a focus on innovation and thoughtful design, I love creating experiences that matter. Let's connect and shape what's next. 🚀
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-black mb-4">Education</h3>
                    <ul>
                        <li className="mb-4">
                            <div>
                                <motion.button whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)" }}whileTap={{ scale: 0.98 }}className="flex items-center gap-6 px-6 py-4 text-blue-900 bg-gradient-to-r from-blue-100 via-white to-blue-300 rounded-xl shadow-lg transition-all duration-300 font-medium border border-blue-200 w-full">
                                    <Link href='https://sjcetpalai.ac.in/' className="flex items-center gap-6 w-full">
                                        <motion.div initial={{ scale: 0.8, opacity: 0 }}animate={{ scale: 1, opacity: 1 }}transition={{ duration: 0.7, delay: 0.3, type: "spring" }} className="flex-shrink-0">
                                            <Image src={'/sjcet.png'} alt={"SJCET"} height={100} width={100} className="rounded-lg border-2 border-blue-300 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300"/>
                                        </motion.div>
                                        <div className="flex flex-col items-start text-left">
                                            <div className="flex items-center justify-between w-full mb-2 gap-4">
                                                <h3 className="text-lg font-bold text-black">St Joseph's College Of Engineering & Technology</h3>
                                                <p className="text-base text-black font-medium">2023-2027</p>
                                            </div>
                                            <p className="text-base text-black font-semibold">B.Tech Artificial Intelligence & Data Science</p>
                                        </div>
                                    </Link>
                                </motion.button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default About;