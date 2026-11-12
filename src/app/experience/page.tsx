'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import GlowCursor from '@/src/components/cursor/GlowCursor';

const projectsData = [
  {
    id: 1,
    title: 'PPK Ormawa Jagawara Arenta',
    category: 'Competition',
    description: 'IoT Early Warning System for landslide mitigation.',
    year: '2026',
    image_cover: '/projectProfile/jagaren.png',
    customLink: '/ppk-ormawa'
  },
];

const categories = ['All', 'Internship', 'Competition', 'Academic', 'Project'];

export default function ExperiencePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = projectsData.filter((project) => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section className="bg-[#0a0a0a]">
      <GlowCursor>
        <div className="w-full mx-auto min-h-screen text-white py-16 px-6 md:px-16">
          <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs tracking-widest bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent uppercase font-semibold">My Journey</span>
                  <div className="h-1 w-32 rounded-full bg-gradient-to-r from-white to-gray-500 [clip-path:polygon(0_0,100%_50%,0_100%)]"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-2 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Experience & <br />Projects</h1>
              <p className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent max-w-lg text-lg">A collection of projects I've worked on, from internships to competitions and academic projects.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8">
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {categories.map((category) => (
                <button key={category} onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === category ? 'bg-white text-black' : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="text-gray-400 text-sm flex items-center gap-4 w-full md:w-auto shrink-0">
              <div className="md:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <span className="whitespace-nowrap">{String(filteredProjects.length).padStart(2, '0')} Projects</span>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const generatedSlug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                const destinationUrl = project.customLink ? project.customLink : `/experience/${generatedSlug}`;

                return(
                  <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }} className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 h-[280px] flex flex-col cursor-pointer"
                  >
                    <Link href={destinationUrl} className="w-full h-full relative block">
                      <img src={project.image_cover} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-right grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"/>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#111] from-5% via-[#111]/60 via-70% to-transparent z-10 pointer-events-none" />
                      <div className="relative z-20 p-8 flex flex-col justify-between h-full w-full md:w-[80%]">
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-tr from-white/5 via-white/20 to-transparent border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-md mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"></span>
                            <span className="text-xs text-white font-medium drop-shadow-md">{project.category}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                          <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                        </div>
                        <div className="absolute bottom-4 -right-16 text-sm font-mono text-gray-400 group-hover:text-white transition-colors duration-300 z-20">{project.year}</div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </GlowCursor>
    </section>
  );
}