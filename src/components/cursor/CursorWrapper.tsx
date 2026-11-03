'use client';
import React, { ReactNode } from 'react';
import GlowCursor from './GlowCursor';

interface CursorWrapperProps {
  children: ReactNode;
}

export default function CursorWrapper({ children }: CursorWrapperProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <GlowCursor
        color="#5f8bff"
        intensity={1.3}
        trailWidth={3}
        linger={1.4}
        glow={1.2}
        clickBurst={true}
        theme="dark"
      >
        {children}
      </GlowCursor>
    </div>
  );
}