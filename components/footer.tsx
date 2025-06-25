import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
    return(
        <section className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-6 bg-gradient-to-r from-blue-100 via-white to-blue-100 backdrop-blur-md rounded-2xl shadow-xl px-8 py-4 animate-float-bar">
            <Link href={'https://www.linkedin.com/in/csvaishakh/'}><Image src={'/linkedin.svg'} alt={'LinkedIn'} width={24} height={24} className="opacity-80 hover:opacity-100 transition"/></Link>
            <Link href={'https://github.com/CSVaishakh'}><Image src={'/github.svg'} alt={'GitHub'} width={24} height={24} className="opacity-80 hover:opacity-100 transition"/></Link>
            <Link href={'https://x.com/vaishakh_CS'}><Image src={'/x.svg'} alt={'X'} width={24} height={24} className="opacity-80 hover:opacity-100 transition"/></Link>
        </section>
    )
}

export default Footer;