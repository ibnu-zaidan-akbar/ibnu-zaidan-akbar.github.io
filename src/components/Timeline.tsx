'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    id: '01', year: '2027', period: 'FEB 2027 - FEB 2028',
    role: 'Application Developer Intern', company: 'PT Freeport Indonesia',
    description: 'Developing and maintaining enterprise-scale applications. Integrating backend architectures to support large-scale industrial operations and data telemetry pipelines.',
  },
  {
    id: '02', year: '2026', period: 'OCT 2026 - PRESENT',
    role: 'AI Engineer & Full-Stack Dev', company: 'SepsisGuard & Menusa',
    description: 'Built SepsisGuard, a clinical AI decision support app using XGBoost. Developed Menusa, a smart travel planner with React Native and ML recommendation engines.',
  },
  {
    id: '03', year: '2026', period: 'MAR 2026 - OCT 2026',
    role: 'IoT Web Developer', company: 'PPK ORMAWA (Jagaren)',
    description: 'Led a disaster mitigation initiative. Developed Jagaren, combining ESP32 and LoRa multi-sensor telemetry with a Progressive Web App dashboard.',
  },
  {
    id: '04', year: '2026', period: 'JAN 2026 - DEC 2026',
    role: 'Bakti Champion', company: 'Bakti BCA Scholarship',
    description: 'Awarded the Bakti BCA Scholarship and built an international e-commerce platform for traditional Sundanese Wayang Golek artisans with Next.js and Xendit.',
  },
  {
    id: '05', year: '2024', period: 'AUG 2024 - PRESENT',
    role: 'Informatics Engineering Student', company: 'Universitas Padjadjaran',
    description: 'Pursuing a Bachelor of Science. Transitioned focus toward AI Engineering and intelligent software architecture. Acted as Vice Project Officer for IFest.',
  },
];

export default function PinnedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalItems = timelineData.length;
    let index = Math.floor(latest * totalItems);
    if (index >= totalItems) index = totalItems - 1; 
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeItem = timelineData[activeIndex];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-transparent text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="flex flex-col justify-center relative">
            <div className="flex items-center gap-2 mb-2 text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="uppercase text-xs tracking-widest font-semibold">My story</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's go back in time.</h2>
            <div className="h-[100px] md:h-[150px] relative overflow-hidden mt-2">
              <AnimatePresence mode="popLayout">
                <motion.div key={activeItem.year} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="text-[80px] md:text-[130px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 absolute top-0 left-0"
                >
                  {activeItem.year}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm font-mono text-gray-400">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <div className="h-[2px] w-24 bg-gray-800 relative rounded-full overflow-hidden">
                <motion.div  className="absolute top-0 left-0 h-full bg-blue-500" initial={{ width: 0 }} animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }} transition={{ duration: 0.3 }}/>
              </div>
              <span>{String(timelineData.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] w-full flex items-center">
            {timelineData.map((item, index) => (
              <div key={item.id}
                className={`absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-700 ease-in-out border-l-2 pl-8 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-y-[-50%] pointer-events-auto border-blue-500' 
                    : 'opacity-0 translate-y-[20%] pointer-events-none border-gray-800'
                }`}
              >
                <div className={`absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-700 ${
                  activeIndex === index ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] scale-100' : 'bg-gray-800 scale-0'
                }`} />

                <p className="text-gray-400 text-sm font-mono tracking-widest mb-3">{item.period}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.role}</h3>
                <p className="text-blue-400 text-lg font-medium mb-4">{item.company}</p>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed line-clamp-4">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}