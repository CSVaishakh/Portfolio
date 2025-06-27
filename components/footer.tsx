import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
    return(
        <footer className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-300 text-black text-center py-4 relative z-50 shadow-md mt-auto">
            <p className="flex items-center justify-center gap-2 text-base tracking-wide">
                C S Vaishakh <Image src={'/copyright.svg'} alt={"Copyright"} height={14} width={14}/> All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer;