import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
    return(
        <section className="bg-gradient-to-r from-blue-100 via-white to-blue-300 py-16 px-8 rounded-2xl mt-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-blue-900 mb-2">About Me</h1>
                    <p className="text-lg text-blue-700">Hello everyone! I am <span className="font-semibold text-blue-500">C S Vaishakh</span>, a FullStack-Developer and an Artificial Intelligence & Data Science Student</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Education</h3>
                    <ul>
                        <li className="mb-4">
                            <div>
                                <button className="flex items-center gap-3 px-4 py-2 border-2 border-blue-300 text-blue-900 bg-white hover:text-white hover:bg-blue-400 hover:border-blue-500 rounded-lg transition-all duration-300 font-medium">
                                    <Link href='https://sjcetpalai.ac.in/' className="flex items-center gap-2">
                                        <Image src={'/sjcet.png'} alt={"SJCET"} height={40} width={40} className="rounded-full border border-blue-200 bg-white"/>
                                        St Josephs College Of Engineering And Technology, Palai
                                    </Link>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;