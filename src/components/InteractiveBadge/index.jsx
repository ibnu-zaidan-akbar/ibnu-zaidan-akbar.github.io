'use client'

import dynamic from 'next/dynamic'

const App = dynamic(() => import('./App'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-screen bg-transparent flex">
      <span className="text-white text-center tracking-widest text-md">Memuat elemen</span>
    </div>
  ),
})

export default function Badge3D() {
  return <App />
}