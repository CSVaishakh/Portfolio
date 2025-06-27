import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 via-white to-blue-300 py-20 px-8 font-sans min-h-screen flex items-center" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex-1 space-y-8 lg:text-left">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-black animate-fade-in-up animate-delay-100">👋Hello, I'm</h3>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black font-[system-ui,-apple-system,'SF Pro Display'] animate-fade-in-up animate-delay-200 leading-tight">C S Vaishakh</h1>
                            <p className="text-xl text-black animate-fade-in-up animate-delay-300 leading-relaxed">🧑‍💻Full Stack Developer | 📚Artificial Intelligence Student</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start mt-8 animate-slide-in-left animate-delay-400">
                            <div className="flex gap-4 w-full justify-center lg:justify-start">
                                <Link href='/projects'>
                                    <button className="px-8 py-3 border-2 border-blue-300 text-black bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow hover:shadow-lg">Projects</button></Link>
                                <Link href="#contact">
                                    <button className="px-8 py-3 border-2 border-blue-300 text-black bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow hover:shadow-lg">Contact</button></Link>
                                <Link href={'/Resume.pdf'} target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-3 border-2 border-blue-300 text-black bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow hover:shadow-lg">Resume</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 lg:ml-8 animate-fade-in-up animate-delay-500">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-lg opacity-10"></div>
                            <Image 
                                src={'/myself.png'} 
                                alt={"C S Vaishakh"} 
                                width={450} 
                                height={450}
                                className="relative rounded-full border-2 border-white shadow transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-float ring-2 ring-blue-200 ring-opacity-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;