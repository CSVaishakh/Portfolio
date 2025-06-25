import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-200 via-white-700 to-blue-100 py-70 x-8 shadow-2xl border-4 border-blue-300 animate-fade-in font-sans" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-black animate-fade-in-up animate-delay-100">Hello, I'm</h3>
                    <h1 className="text-5xl md:text-7xl font-bold text-black font-[system-ui,-apple-system,'SF Pro Display'] animate-fade-in-up animate-delay-200">C S Vaishakh</h1>
                    <p className="text-lg text-gray-800 max-w-5xl animate-fade-in-up animate-delay-300 leading-relaxed">
                        Crafting innovative solutions through code. Currently exploring the fascinating world of Artificial Intelligence and Machine Learning while building robust full-stack applications that solve real-world problems.
                    </p>
                    <div className="flex gap-4 mt-8 animate-slide-in-left animate-delay-400">
                        <Link href='/projects'>
                            <button className="px-8 py-3 border-2 border-blue-400 text-black hover:text-white hover:bg-blue-500 hover:border-blue-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow-lg hover:shadow-xl">Projects</button>
                        </Link>
                        <Link href="#contact">
                            <button className="px-8 py-3 border-2 border-blue-400 text-black hover:text-white hover:bg-blue-500 hover:border-blue-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium font-[system-ui,-apple-system,'SF Pro Display'] shadow-lg hover:shadow-xl">Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;