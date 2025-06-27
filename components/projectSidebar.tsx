import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar: React.FC = () => {
    return(
        <section className="fixed bottom-20 left-1/2 -translate-x-1/2 sm:top-1/2 sm:left-6 sm:-translate-y-1/2 sm:translate-x-0 sm:bottom-auto z-50 flex flex-row sm:flex-col gap-4 sm:gap-6 bg-gradient-to-b from-blue-100 via-white to-blue-100 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 sm:py-8 animate-float-bar">
            <Link href='/'><Image src={'/home.svg'} alt={"Home"} height={24} width={24} className="opacity-80 hover:opacity-100 transition" /></Link>
            <Link href={'https://www.linkedin.com/in/csvaishakh/'}><Image src={'/linkedin.svg'} alt={'LinkedIn'} width={24} height={24} className="opacity-80 hover:opacity-100 transition" /></Link>
            <Link href={'https://github.com/CSVaishakh'}><Image src={'/github.svg'} alt={'GitHub'} width={24} height={24} className="opacity-80 hover:opacity-100 transition" /></Link>
            <Link href={'https://x.com/vaishakh_CS'}><Image src={'/x.svg'} alt={'X'} width={24} height={24} className="opacity-80 hover:opacity-100 transition" /></Link>
        </section>
    )
}

export default Sidebar;