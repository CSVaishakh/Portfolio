'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, BarChart3, DollarSign, TrendingUp, Network, Code, ExternalLink, GraduationCap, Briefcase } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    summary: string;
  };
  interests: {
    name: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    status: string;
    gpa: string;
    logo: string;
    website: string;
  }[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
    responsibilities: string[];
  }[];
}

const About: React.FC = () => {
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);

    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                const response = await fetch('/resume.json');
                const data = await response.json();
                setResumeData(data);
            } catch (error) {
                console.error('Error fetching resume data:', error);
            }
        };
        fetchResumeData();
    }, []);

    const getInterestIcon = (interestName: string) => {
        switch (interestName.toLowerCase()) {
            case 'artificial intelligence':
                return <Brain className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />;
            case 'data science':
                return <BarChart3 className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors duration-300" />;
            case 'finance':
                return <DollarSign className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />;
            case 'quant analytics':
                return <TrendingUp className="w-6 h-6 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" />;
            case 'system design':
                return <Network className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors duration-300" />;
            case 'software engineering':
                return <Code className="w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300" />;
            default:
                return <Code className="w-6 h-6 text-gray-500 group-hover:text-gray-600 transition-colors duration-300" />;
        }
    };

    const getInterestColor = (interestName: string) => {
        switch (interestName.toLowerCase()) {
            case 'artificial intelligence':
                return 'border-blue-400 text-blue-900 group-hover:text-blue-700';
            case 'data science':
                return 'border-green-400 text-green-900 group-hover:text-green-700';
            case 'finance':
                return 'border-yellow-400 text-yellow-900 group-hover:text-yellow-700';
            case 'quant analytics':
                return 'border-purple-400 text-purple-900 group-hover:text-purple-700';
            case 'system design':
                return 'border-red-400 text-red-900 group-hover:text-red-700';
            case 'software engineering':
                return 'border-indigo-400 text-indigo-900 group-hover:text-indigo-700';
            default:
                return 'border-gray-400 text-gray-900 group-hover:text-gray-700';
        }
    };

    if (!resumeData) {
        return (
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-300 px-4 sm:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-8"></div>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-100 via-white to-blue-300 px-4 sm:px-8 py-8">
            <div className="max-w-4xl mx-auto">
                {/* About Me Section */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 tracking-tight drop-shadow-lg">
                        About Me
                    </h1>
                    <p className="text-base sm:text-lg text-black leading-relaxed">
                        👋 Hi, I&apos;m {resumeData.personalInfo.name} — {resumeData.personalInfo.title} and a {resumeData.personalInfo.subtitle}. {resumeData.personalInfo.summary} 🚀
                    </p>
                </div>

                {/* Interests Section */}
                <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6">My Interests</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {resumeData.interests.map((interest, index) => (
                            <motion.div 
                                key={interest.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 2 : -2 }} 
                                whileTap={{ scale: 0.95 }}
                                className={`bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group ${getInterestColor(interest.name)}`}
                                title={interest.description}
                            >
                                <div className="flex items-center gap-2">
                                    {getInterestIcon(interest.name)}
                                    <span className="text-sm sm:text-base font-semibold">{interest.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        Education
                    </h3>
                    <ul className="space-y-4">
                        {resumeData.education.map((edu, index) => (
                            <li key={index} className="mb-4">
                                <motion.button 
                                    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)" }} 
                                    whileTap={{ scale: 0.98 }} 
                                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 text-blue-900 bg-gradient-to-r from-blue-100 via-white to-blue-300 rounded-xl shadow-lg transition-all duration-300 font-medium border border-blue-200 w-full"
                                >
                                    <Link href={edu.website} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full" target="_blank" rel="noopener noreferrer">
                                        <motion.div 
                                            initial={{ scale: 0.8, opacity: 0 }} 
                                            animate={{ scale: 1, opacity: 1 }} 
                                            transition={{ duration: 0.7, delay: 0.3, type: "spring" }} 
                                            className="flex-shrink-0"
                                        >
                                            <Image 
                                                src={edu.logo} 
                                                alt={edu.institution} 
                                                height={80} 
                                                width={80} 
                                                className="rounded-lg border-2 border-blue-300 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 w-20 h-20 sm:w-24 sm:h-24 object-cover"
                                            />
                                        </motion.div>
                                        <div className="flex flex-col items-start text-left w-full">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-2 gap-2 sm:gap-4">
                                                <h3 className="text-base sm:text-lg font-bold text-black flex items-center gap-2">
                                                    {edu.institution}
                                                    <ExternalLink className="w-4 h-4 text-blue-600" />
                                                </h3>
                                                <p className="text-sm sm:text-base text-black font-medium">{edu.duration}</p>
                                            </div>
                                            <p className="text-sm sm:text-base text-black font-semibold">{edu.degree}</p>
                                            <div className="flex items-center gap-4 mt-1">
                                                <span className="text-xs sm:text-sm text-gray-700">Status: {edu.status}</span>
                                                <span className="text-xs sm:text-sm text-gray-700">GPA: {edu.gpa}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Experience Section */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-green-600" />
                        Experience
                    </h3>
                    <ul className="space-y-6">
                        {resumeData.experience.map((exp, index) => (
                            <li key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-5 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                        <h4 className="text-lg sm:text-xl font-bold text-black">{exp.title}</h4>
                                        <span className="text-sm sm:text-base text-gray-600 font-medium">{exp.duration}</span>
                                    </div>
                                    <h5 className="text-base sm:text-lg font-semibold text-blue-600 mb-3">{exp.company}</h5>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{exp.description}</p>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default About;