import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(supabaseUrl, supabasePublicKey);

export type Projects = {
  id: string;
  created_at: string;
  title: string;
  subtitle: string;
  name: string;
  category: string;
  position: string;
  start_date: string;
  end_date: string | null;
  description: string;
  full_content: string | null;
  image_cover: string;
  image_gallery: string[];
  tech_stack: string[];
  custom_link: string | null;
  github_url: string | null;
  live_url: string | null;
  showcase: boolean | null;
};