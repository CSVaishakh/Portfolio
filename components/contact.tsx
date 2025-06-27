import React from "react";
import Link from "next/link";
import Image from "next/image";

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
                    
                    <div className="inline-flex flex-row justify-center items-center mt-5 mb-3 animate-slide-in-left animate-delay-300 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-2 py-2 gap-0 border border-blue-200">
                        <Link href='https://api.whatsapp.com/send?phone=917511137620&text=Hello!' target="_blank" rel="noopener noreferrer">
                            <button className="group flex items-center justify-center px-4 py-3 text-black bg-white hover:text-white hover:bg-green-500 rounded-l-xl transition-all duration-300 font-medium shadow-none min-w-[48px] border-r border-blue-200">
                                <Image src={'/whatsapp.svg'} alt="WhatsApp" height={22} width={22}/>
                            </button>
                        </Link>
                        <Link href='https://x.com/vaishakh_CS' target="_blank" rel="noopener noreferrer">
                            <button className="group flex items-center justify-center px-4 py-3 text-black bg-white hover:text-white hover:bg-blue-500 transition-all duration-300 font-medium shadow-none min-w-[48px] border-r border-blue-200">
                                <Image src={'/x.svg'} alt="X" height={22} width={22}/>
                            </button>
                        </Link>
                        <Link href='mailto:contactvaishakh@gmail.com' target="_blank" rel="noopener noreferrer">
                            <button className="group flex items-center justify-center px-4 py-3 text-black bg-white hover:text-white hover:bg-red-500 rounded-r-xl transition-all duration-300 font-medium shadow-none min-w-[48px]">
                                <Image src={'/gmail.svg'} alt="Email" height={22} width={22}/>
                            </button>
                        </Link>
                    </div>
                    
                    <div className="mt-16 p-8 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 animate-fade-in-up animate-delay-500">
                        <h3 className="text-2xl font-semibold text-black mb-4">Let&apos;s Connect! 🤝</h3>
                        <p className="text-lg text-black leading-relaxed">
                            I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
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