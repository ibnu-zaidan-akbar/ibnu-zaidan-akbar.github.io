import React from 'react';
import DomeGallery from '@/src/components/Gallery';

export default function PpkOrmawaPage() {
  const dummyPhotos = [
    { src: '/projectProfile/safeena.png', alt: 'Safeena Project' },
    { src: '/projectProfile/himasela.png', alt: 'Himasela Project' },
    { src: '/projectProfile/nexus.png', alt: 'Nexus Finance' },
    { src: '/projectProfile/safeena.png', alt: 'Safeena Project' },
    { src: '/projectProfile/himasela.png', alt: 'Himasela Project' },
    { src: '/projectProfile/nexus.png', alt: 'Nexus Finance' },
    { src: '/projectProfile/safeena.png', alt: 'Safeena Project' },
    { src: '/projectProfile/nexus.png', alt: 'Nexus Finance' },
    { src: '/projectProfile/safeena.png', alt: 'Safeena Project' },
    { src: '/projectProfile/himasela.png', alt: 'Himasela Project' },
  ];

  return (
    <main className="min-h-screen bg-[#120F17] text-white">
      <section className="relative w-full h-screen pt-4 pb-12 overflow-hidden">
        <DomeGallery
          images={dummyPhotos}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={10}
          segments={34}
          dragDampening={2}
          grayscale={true} 
          overlayBlurColor="#120F17"
        />
      </section>

      <section className="w-full h-screen px-8 py-20">
      </section>
    </main>
  );
}