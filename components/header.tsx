import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
    return(
        <section className="bg-gradient-to-r from-blue-300 via-white-800 to-blue-200 py-6 px-8 shadow-lg">
            <div className="max-w-8xl flex justify-between items-center ml-20 mr-20">
                <div className="text-3xl font-bold text-black font-[system-ui,-apple-system,'SF Pro Display',sans-serif]">C S Vaishakh</div>
                <div className="flex items-center">
                    <div className="flex gap-2">
                        <button className="px-5 py-2 border-2 border-blue-400 text-black hover:text-black hover:bg-blue-300 hover:border-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium font-[system-ui,-apple-system,'SF Pro Display',sans-serif]">
                            <Link href='#about'>About</Link>
                        </button>
                        <button className="px-5 py-2 border-2 border-blue-400 text-black hover:text-black hover:bg-blue-300 hover:border-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium font-[system-ui,-apple-system,'SF Pro Display',sans-serif]">
                            <Link href='/projects'>Projects</Link>
                        </button>
                        <button className="px-5 py-2 border-2 border-blue-400 text-black hover:text-black hover:bg-blue-300 hover:border-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium font-[system-ui,-apple-system,'SF Pro Display',sans-serif]">
                            <Link href='#contact'>Contact</Link>
                        </button>
                    </div>
                    <div className="flex gap-1 items-center border-l border-blue-300 pl-6">
                        <Link href='https://x.com/vaishakh_CS' className="p-2 hover:bg-blue-200 rounded-full transition-all duration-300">
                            <Image src={'x.svg'} alt="X/Twitter" width={20} height={20} className="filter brightness-0 saturate-100 opacity-70 hover:opacity-100"/>
                        </Link>
                        <Link href='https://github.com/CSVaishakh' className="p-2 hover:bg-blue-200 rounded-full transition-all duration-300">
                            <Image src={'github.svg'} alt="GitHub" width={20} height={20} className="filter brightness-0 saturate-100 opacity-70 hover:opacity-100"/>
                        </Link>
                        <Link href='https://linkedin.com/in/csvaishakh' className="p-2 hover:bg-blue-200 rounded-full transition-all duration-300">
                            <Image src={'linkedin.svg'} alt="LinkedIn" width={20} height={20} className="filter brightness-0 saturate-100 opacity-70 hover:opacity-100"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;