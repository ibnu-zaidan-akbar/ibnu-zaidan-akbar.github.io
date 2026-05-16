"use client";

import { useState } from "react";
import Image from "next/image";

export default function Himasela() {
    const [isExpanded, setIsExpanded] = useState(false);
    const foto = [
        { id: 1, src: "/projectProfile/himasela.png"},
        { id: 2, src: "/assets/h1.png"},
        { id: 3, src: "/assets/h2.png"},
        { id: 4, src: "/assets/h3.png"},
        { id: 5, src: "/assets/h4.png"},
        { id: 6, src: "/assets/h5.png"},
        { id: 7, src: "/assets/h6.png"}
    ];
    const allFoto = foto.slice(0, 7);
    
    return (
        <main className="bg-dark">
            <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,var(--light)_0%,transparent_30%),radial-gradient(circle_at_bottom_left,var(--light)_0%,var(--dark)_30%)]">
                <div className="flex flex-col md:grid md:grid-cols-[20%_80%] md:flex-row w-full justify-center items-center py-4 lg:py-8 md:px-12 lg:px-12 xl:px-20">
                    <div className="p-8 md:p-6 lg:p-8 xl:p-10 bg-[#E0E4E7]/70 rounded-full">
                        <Image
                            src="/assets/lh.svg" alt="logo himasela"
                            width={360} height={310}
                            className="w-[160px] md:w-[550px] lg:w-[500px] xl:w-[450px] h-fit"
                        />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-2 p-8 justify-center">
                        <span className="text-[20px] md:text-[28px] lg:text-[32px] xl:text-[42px] text-center md:text-start font-bold leading-none">Website Department Keilmiahan Himasela Unsoed</span>
                        <p className="text-[16px] lg:text-[20px] xl:text-[28px] text-justify leading-none">An information management website platform for the "land resource planning student association" designed to integrate work program documentation, department progress, and digital asset management through Google Drive-based storage synchronization.</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-y-1 md:gap-y-2">
                    {allFoto.map((item, index) => (
                        <Image
                            key={item.id}
                            src={item.src} alt="dokumentasi"
                            width={630} height={332} className={"px-2 py-1 rounded-3xl w-[340px] h-[160px] md:w-[500px] md:h-[230px] lg:w-[480px] lg:h-[235px] xl:w-[630px] xl:h-[332px] " + (index >= 3 ? (isExpanded ? "block" : "hidden lg:block") : "block")}
                        />
                    ))}

                    {!isExpanded && (
                        <div className="w-full flex justify-center lg:hidden">
                            <button onClick={() => setIsExpanded(true)} className="flex flex-col justify-center items-center gap-2 text-white hover:text-blue-400 transition-colors group">
                                <Image
                                    src="/icons/expand.svg" alt="expand"
                                    width={40} height={40} className="rotate-90 group-hover:translate-x-1 transition-transform"
                                    />
                                <span>Expand</span>
                            </button>
                        </div>
                    )}
                </div>
                <div className="max-w h-fit flex p-8 justify-center align-center">
                    <a className="text-[16px] md:text-[20px] xl:text-[24px]" href="https://www.keilmiahanhimasela.space/" target="_blank">View Project 👁</a>
                </div>
            </div>
        </main>
    )
}