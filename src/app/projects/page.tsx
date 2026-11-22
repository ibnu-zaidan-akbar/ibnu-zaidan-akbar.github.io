import { supabase, Projects } from "@/src/lib/supabase";
import ProjectPage from "./project";
import GlowCursor from '@/src/components/cursor/GlowCursor';

export default async function MainProject() {
  const { data, error } = await supabase.from('projects').select('*').order('showcase', { ascending: false }).order('order', { ascending: false });
  if (error) {
    console.error('Error fetching projects:', error);
  }
  const project = (data as Projects[]) || [];

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

          <ProjectPage initialProjects={project}/>
        </div>
      </GlowCursor>
    </section>
  );
}