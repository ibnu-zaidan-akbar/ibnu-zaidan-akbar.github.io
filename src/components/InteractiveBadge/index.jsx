'use client'

import dynamic from 'next/dynamic'

const App = dynamic(() => import('./App'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-screen bg-transparent teaxt-white tracking-widest text-sm">Memuat elemen 3D...</div>
  ),
})

export default function Badge3D() {
  return <App />
}