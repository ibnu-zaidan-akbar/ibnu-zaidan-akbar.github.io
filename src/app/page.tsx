"use client";

import { useState } from "react";
import Image from "next/image";
import InteractiveBadge from "@/src/components/InteractiveBadge"
import GlowCursor from "@/src/components/cursor/CursorWrapper"
import PanoramaSlider from '../components/PanoramaSlider';
import Timeline from '../components/Timeline'

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const skill = [
    { id: 1, src:"/logo/nextjs.svg", xlWidth: 103, xlHeight:  84, size: "xl:w-[103px] xl:h-[84px] lg:w-[83px] w-[80px] h-[68px]"},
    { id: 2,src: "/logo/tailwind.svg", xlWidth: 100, xlHeight:  77, size: "xl:w-[100px] xl:h-[77px] lg:w-[80px] w-[75px] h-[62px]"},
    { id: 3, src: "/logo/react.svg", xlWidth: 103, xlHeight:  93, size: "xl:w-[103px] xl:h-[93px] lg:w-[83px] w-[75px] h-[75px]"},
    { id: 4, src: "/logo/c++.svg", xlWidth: 93, xlHeight:  93, size: "xl:w-[93px] xl:h-[93px] w-[75px] h-[75px]"},
    { id: 5, src: "/logo/c.svg", xlWidth: 103, xlHeight: 103, size: "xl:w-[103px] xl:h-[103px] w-[83px] h-[83px]"},
    { id: 6, src: "/logo/java.svg", xlWidth: 77, xlHeight: 103, size: "xl:w-[77px] xl:h-[103px] w-[62px] h-[83px]"},
    { id: 7,src: "/logo/laravel.svg", xlWidth: 103, xlHeight:  83, size: "xl:w-[103px] xl:h-[83px] w-[83px] h-[67px]"}
  ];
  const visibleSkills = skill.slice(0, 6);
  const hiddenSkills = skill.slice(6);

  const icon = [
    { id: 1, src: "/icons/wa.svg", width: 60, height: 60, size: "w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]", objective: "https://wa.me/6282325299550"},
    { id: 2, src: "/icons/ig.svg", width: 60, height: 60, size: "w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]", objective: "https://www.instagram.com/ibnu_zaidanj"},
    { id: 3, src: "/icons/linkedin.svg", width: 60, height: 60, size: "w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]", objective: "https://www.linkedin.com/in/ibnuzaidan"}
  ];

  const project = [
    { id: 1, foto: "/projectProfile/safeena.png", objective: "/safeena", title: "Company Profile Website", position: "frontend developer"},
    { id: 2, foto: "/projectProfile/nexus.png", objective: "/nexus", title: "Nexus Financial App", position: "fullstack developer"},
    { id: 3, foto: "/projectProfile/himasela.png", objective: "/himasela", title: "Organization Website HIMASELA", position: "fullstack developer"},
  ]

  return (
    <main className="bg-dark">
      <GlowCursor>
        <section className="relative grid grid-cols-1 lg:grid-cols-[30%_70%]">
          <div className="z-10 relative w-full flex flex-col top-20 px-6 md:px-10 xl:px-20 font-firasans leading-none text-white touch-none select-none">
            <span className="text-[16px] md:text-[24px] lg:text-[32px] xl:text-[36px] font-semibold">Welcome to my</span>
            <span className="text-[32px] md:text-[60px] lg:text-[72px] xl:text-[96px] font-bold uppercase">Portfolio</span>
          </div>

          <div className="w-full">
            <div className="absolute inset-x-0 z-0 top-0 lg:bottom-0 h-screen lg:h-auto touch-none">
              <InteractiveBadge />
            </div>
            <div className="relative z-10 pointer-events-none flex flex-col w-full">
              <div className="h-[85vh] lg:h-screen"></div>
              <div className="pointer-events-auto h-[12vh] md:h-[15vh] w-full lg:hidden flex flex-col items-center justify-center bg-transparent -mt-12 md:-mt-22">
                <div className="flex flex-col items-center justify-center animate-bounce -space-y-14 md:-space-y-19 text-white">
                  <span className="text-[48px] md:text-[64px] font-light rotate-90">›</span>
                  <span className="text-[48px] md:text-[64px] font-light rotate-90 opacity-75">›</span>
                  <span className="text-[48px] md:text-[64px] font-light rotate-90 opacity-50">›</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 h-screen grid grid-cols-1 lg:grid-cols-[60%_40%] text-white">
          <div className="md:py-12 lg:py-0 px-12 w-full flex flex-col gap-4 bg-transparent">
            <p className="indent-10 text-[14px] md:text-[18px] lg:text-[16px] xl:text-[20px] leading-tight">
              I used to build scalable platforms. Now, I'm teaching them how to think. Hello, I am <b>Ibnu Zaidan Akbar</b>. As an Informatics Engineering student from Universitas Padjadjaran evolving from a Full-Stack Developer into an <b>AI Engineer</b>, I operate at the exact intersection of robust software architecture and data-driven intelligence. 
              I am driven by the challenge of turning complex ideas into digital products that are not only intuitive and efficient but also predictive. Having mastered the art of building scalable applications, my focus is now on designing ML pipelines and intelligent algorithms that solve real-world problems. 
              For me, it's no longer just about writing code that works, but it's about deploying intelligent solutions that learn, adapt, and deliver a purposeful impact for users.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-[24px] md:text-[30px] lg:text-[28px] xl:text-[42px] font-semibold">Skills</span>
              <div className="flex flex-wrap gap-y-4 gap-x-8 w-full justify-center lg:justify-start">
                {visibleSkills.map((item) => (
                  <Image
                    key={item.id} src={item.src}
                    width={item.xlWidth} height={item.xlHeight}
                    alt="logo" className={"hover:grayscale-0 transition-all " + item.size}
                  />
                ))}

                {isExpanded && hiddenSkills.map((item) => (
                  <Image
                    key={item.id} src={item.src}
                    width={item.xlWidth} height={item.xlHeight}
                    alt="logo" className={"hover:grayscale-0 transition-all " + item.size}
                  />
                ))}

                {!isExpanded && (
                  <button onClick={() => setIsExpanded(true)} className="flex flex-col justify-center items-center gap-2 text-white hover:text-blue-400 transition-colors group">
                    <Image
                      src="/icons/expand.svg" alt="expand"
                      width={40} height={40} className="group-hover:translate-x-1 transition-transform"
                      />
                      <span>Expand</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block relative md:p-12 lg:p-0 w-full flex items-center bg-transparent w-fit h-full">
            <Image src="/foto2.png" alt="foto" fill priority className=" object-contain"/>
          </div>
        </section>

        <PanoramaSlider/>
        
        <Timeline/>

        <section className="flex flex-col pb-8 pt-6 lg:pb-12 gap-2 lg:gap-4">
          <span className="text-[24px] md:text-[24px] lg:text-[28px] xl:text-[36px] font-semibold text-white text-center">Contacts</span>
          <div className="flex flex-wrap gap-x-4 md:gap-x-8 md:gap-y-4 w-full justify-center">
            {icon.map((item) => (
              <a key={item.id} href={item.objective} target="_blank">
                <Image
                  width={item.width} height={item.height}
                  src={item.src} alt="icon" className={"" + item.size}
                  />
              </a>
            ))}
          </div>
        </section>
      </GlowCursor>
    </main>
  );
}