import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
    return(
        <section className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-6 bg-gradient-to-r from-blue-100 via-white to-blue-100 backdrop-blur-md rounded-2xl shadow-xl px-8 py-4 animate-float-bar">
            <button className="text-black font-medium rounded-lg px-1 py-1 text-xl transition-all hover:bg-blue-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <Link href='#about'>About</Link>
            </button>
            <button className="text-black font-medium rounded-lg px- py-1 text-xl transition-all hover:bg-blue-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <Link href='/projects'>Projects</Link>
            </button>
            <button className="text-black font-medium rounded-lg px-1 py-1 text-xl transition-all hover:bg-blue-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <Link href='#contact'>Contact</Link>
            </button>
        </section>
    )
}

export default Header;