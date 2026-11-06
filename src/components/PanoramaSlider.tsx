'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';

const project = [
    { id: 1, foto: "/projectProfile/safeena.png", objective: "/safeena", title: "Company Profile Website", position: "frontend developer"},
    { id: 2, foto: "/projectProfile/nexus.png", objective: "/nexus", title: "Nexus Financial App", position: "fullstack developer"},
    { id: 3, foto: "/projectProfile/himasela.png", objective: "/himasela", title: "Organization Website HIMASELA", position: "fullstack developer"},
];

const items = [...project, ...project]; 
const angle = 360 / items.length;
// const radius = 700;

export default function PanoramaSlider() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dynamicPerspective = isMobile ? '700px' : '1200px'; 
    const dynamicRadius = isMobile ? 500 : 700;

    const rotationY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const animationRef = useRef<any>(null);

    useAnimationFrame(() => {
        if (!isHovered && !isDragging) {
            rotationY.set(rotationY.get() - 0.1); 
        }
    });

    const handlePan = (e: any, info: any) => {
        rotationY.set(rotationY.get() - info.delta.x * 0.1);
    };

    const handlePanEnd = (e: any, info: any) => {
        setIsDragging(false);
        if (Math.abs(info.velocity.x) > 50) {
            const momentum = info.velocity.x * 0.01;
            animationRef.current = animate(rotationY, rotationY.get() - momentum, {
                type: 'inertia',
                velocity: -momentum,
                bounceStiffness: 0,
                bounceDamping: 0,
            });
        }
    };

    const handlePanStart = () => {
        setIsDragging(true);
        if (animationRef.current) animationRef.current.stop();
    };

    return (
        <section className="py-12 px-8 lg:py-24 lg:px-32 w-full bg-transparent overflow-hidden flex flex-col items-center">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white z-10 text-center leading-none">Latest Project Showcase</h2>
            <div style={{ perspective: dynamicPerspective }} className="relative w-full h-[200px] md:h-[280px] lg:h-[360px] flex items-center justify-center [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" >
                <motion.div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d', rotateY: rotationY, }} onPanStart={handlePanStart} onPan={handlePan} onPanEnd={handlePanEnd}>
                    {items.map((item, index) => (
                        <motion.div key={`${item.id}-${index}`} style={{ transform: `rotateY(${index * angle}deg) translateZ(${-dynamicRadius}px)`, backfaceVisibility: 'hidden', }}
                            className="absolute w-[70vh] h-[240px] md:w-[60vh] md:h-[320px] lg:w-[720px] lg:h-[400px] rounded-lg lg:rounded-2xl overflow-hidden border border-white/10 pointer-events-auto cursor-grab active:cursor-grabbing select-none"
                            onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}
                        >
                            <img src={item.foto} alt={item.title} className="object-cover w-full h-full pointer-events-none"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                                <p className="text-blue-400 text-sm font-semibold mb-1 tracking-wider">As a <span className="uppercase">{item.position}</span></p>
                                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Link href="/project" className="text-[12px] md:text-[16px] lg:text-[20px] text-white z-10 text-xenter underline leading-none cursor-pointer">View All Project</Link>
        </section>
    );
}