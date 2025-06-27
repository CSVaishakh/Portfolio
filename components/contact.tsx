import React from "react";
import Link from "next/link";

const Contact: React.FC = () => {
    return(
        <section className="bg-gradient-to-r from-blue-100 via-white to-blue-300 pt-4 pb-20 px-8 min-h-screen flex items-center" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center space-y-8">
                    <div className="space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight animate-fade-in-up animate-delay-100">
                            Contact Me
                        </h1>
                        <div className="space-y-2 animate-fade-in-up animate-delay-200">
                            <p className="text-xl sm:text-2xl text-black font-medium">Want to Collaborate?</p>
                            <p className="text-lg text-black leading-relaxed">Just DM or send an email</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-slide-in-left animate-delay-300">
                        <Link href='https://api.whatsapp.com/send?phone=917511137620&text=Hello!' target="_blank" rel="noopener noreferrer">
                            <button className="group px-8 py-4 border-2 border-green-400 text-black bg-white hover:text-white hover:bg-green-500 hover:border-green-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[140px]">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="text-xl">💬</span>
                                    WhatsApp
                                </span>
                            </button>
                        </Link>
                        
                        <Link href='https://x.com/vaishakh_CS' target="_blank" rel="noopener noreferrer">
                            <button className="group px-8 py-4 border-2 border-blue-400 text-black bg-white hover:text-white hover:bg-blue-500 hover:border-blue-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[140px]">
                                <span className="flex items-center justify-center gap-2">
                                    Twitter (X)
                                </span>
                            </button>
                        </Link>
                        
                        <Link href='mailto:contactvaishakh@gmail.com' target="_blank" rel="noopener noreferrer">
                            <button className="group px-8 py-4 border-2 border-red-400 text-black bg-white hover:text-white hover:bg-red-500 hover:border-red-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[140px]">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="text-xl">✉️</span>
                                    Email
                                </span>
                            </button>
                        </Link>
                    </div>
                    
                    <div className="mt-16 p-8 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 animate-fade-in-up animate-delay-500">
                        <h3 className="text-2xl font-semibold text-black mb-4">Let's Connect! 🤝</h3>
                        <p className="text-lg text-black leading-relaxed">
                            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                            or just have a chat about technology and innovation. Feel free to reach out through 
                            any of the platforms above!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact