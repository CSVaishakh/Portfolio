import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-200 via-white-700 to-blue-100 py-20 px-8 shadow-2xl border-4 border-blue-300 animate-fade-in font-sans min-h-screen flex items-center" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-black animate-fade-in-up animate-delay-100">Hello, I'm</h3>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black font-[system-ui,-apple-system,'SF Pro Display'] animate-fade-in-up animate-delay-200 leading-tight">C S Vaishakh</h1>
                            <p className="text-xl text-gray-800 animate-fade-in-up animate-delay-300 leading-relaxed">Full Stack Developer | Artificial Intelligence Student</p>
                        </div>
                        <div className="flex gap-4 mt-8 animate-slide-in-left animate-delay-400">
                            <Link href='/projects'>
                                <button className="px-8 py-3 border-2 border-blue-400 text-black hover:text-white hover:bg-blue-500 hover:border-blue-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow-lg hover:shadow-xl">Projects</button>
                            </Link>
                            <Link href="#contact">
                                <button className="px-8 py-3 border-2 border-blue-400 text-black hover:text-white hover:bg-blue-500 hover:border-blue-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow-lg hover:shadow-xl">Contact</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-shrink-0 lg:ml-8 animate-fade-in-up animate-delay-500">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                            <Image 
                                src={'/myself.png'} 
                                alt={"C S Vaishakh"} 
                                width={450} 
                                height={450}
                                className="relative rounded-full border-4 border-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:rotate-3 animate-float ring-4 ring-blue-200 ring-opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;