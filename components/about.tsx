'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, BarChart3, DollarSign, TrendingUp, Network, Code } from "lucide-react";

const About: React.FC = () => {
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-100 via-white to-blue-300 px-4 sm:px-8 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 tracking-tight drop-shadow-lg">
                        About Me
                    </h1>
                    <p className="text-base sm:text-lg text-black leading-relaxed">
                        👋 Hi, I&apos;m C S Vaishakh — Full Stack Developer and a Third-year Artificial Intelligence &amp; Data Science student. I&apos;m passionate about building intelligent systems, exploring emerging technologies, and turning ideas into impactful solutions. With a focus on innovation and thoughtful design, I love creating experiences that matter. Let&apos;s connect and shape what&apos;s next. 🚀
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6">My Interests</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 2 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <Brain className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                                <span className="text-sm sm:text-base font-semibold text-blue-900 group-hover:text-blue-700">Artificial Intelligence</span>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: -2 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-green-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                                <span className="text-sm sm:text-base font-semibold text-green-900 group-hover:text-green-700">Data Science</span>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.1, rotate: 2 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
                                <span className="text-sm sm:text-base font-semibold text-yellow-900 group-hover:text-yellow-700">Finance</span>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.1, rotate: -2 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-purple-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-6 h-6 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" />
                                <span className="text-sm sm:text-base font-semibold text-purple-900 group-hover:text-purple-700">Quant Analytics</span>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.1, rotate: 2 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-red-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <Network className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                                <span className="text-sm sm:text-base font-semibold text-red-900 group-hover:text-red-700">System Design</span>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.1, rotate: -2 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-indigo-400 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <Code className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300" />
                                <span className="text-sm sm:text-base font-semibold text-indigo-900 group-hover:text-indigo-700">Software Engineering</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">Education</h3>
                    <ul>
                        <li className="mb-4">
                            <div>
                                <motion.button whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)" }} whileTap={{ scale: 0.98 }} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 text-blue-900 bg-gradient-to-r from-blue-100 via-white to-blue-300 rounded-xl shadow-lg transition-all duration-300 font-medium border border-blue-200 w-full">
                                    <Link href='https://sjcetpalai.ac.in/' className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3, type: "spring" }} className="flex-shrink-0">
                                            <Image src={'/sjcet.png'} alt={"SJCET"} height={80} width={80} className="rounded-lg border-2 border-blue-300 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 w-20 h-20 sm:w-24 sm:h-24 object-cover"/>
                                        </motion.div>
                                        <div className="flex flex-col items-start text-left w-full">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-2 gap-2 sm:gap-4">
                                                <h3 className="text-base sm:text-lg font-bold text-black">St Joseph&apos;s College Of Engineering &amp; Technology</h3>
                                                <p className="text-sm sm:text-base text-black font-medium">2023-2027</p>
                                            </div>
                                            <p className="text-sm sm:text-base text-black font-semibold">B.Tech Artificial Intelligence & Data Science</p>
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