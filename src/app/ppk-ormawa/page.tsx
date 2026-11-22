import React from 'react';
import { notFound } from 'next/navigation';
import { supabase, Projects } from '@/src/lib/supabase';
import DomeGallery from '@/src/components/Gallery';

function formatDate(dateString: string | null) {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default async function PpkOrmawaPage() {
  const { data, error } = await supabase
    .from('projects').select('*')
    .eq('custom_link', '/ppk-ormawa').single();

  if (error || !data) {
    console.error('Error fetching PPK Ormawa project:', error);
    notFound();
  }

  const project = data as Projects;
  const galleryImages = project.image_gallery?.length > 0 ? project.image_gallery : [project.image_cover];
  
  return (
    <main className="min-h-screen bg-[#120F17] text-white">
      <section className="relative w-full h-screen py-2">
        <div className="relative w-full h-[90vh] overflow-hidden">
          <DomeGallery
            images={galleryImages}
            openedImageWidth="min(85vw, 700px)"
            openedImageHeight="min(70vw, 500px)"
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={10}
            segments={34}
            dragDampening={2}
            grayscale={true} 
            overlayBlurColor="#120F17"
            />
          </div>
          <div className="relative w-full h-[10vh] flex items-start justify-around animate-bounce -space-y-8 md:-space-y-16 text-white select-none">
            <span className="text-[48px] md:text-[64px] font-light rotate-90">›</span>
            <span className="text-[48px] md:text-[64px] font-light rotate-90">›</span>
            <span className="text-[48px] md:text-[64px] font-light rotate-90">›</span>
          </div>
      </section>

      <section className="px-32 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gray-600"></div>
            <span className="text-sm tracking-widest text-gray-400 uppercase font-semibold">
              {project.category}
            </span>
          </div>

          <div className="flex gap-4 text-sm font-mono">
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline underline-offset-4">
                GitHub ↗
              </a>
            )}
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline underline-offset-4">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
        
        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech_stack.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="text-gray-300 leading-relaxed text-lg space-y-6 whitespace-pre-line">
          {project.full_content || project.description}
        </div>
      </section>
    </main>
  );
}