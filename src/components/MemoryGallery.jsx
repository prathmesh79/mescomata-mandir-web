import { useEffect, useState } from 'react'; import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { memories, yearLabels } from '../data/memories'; import { mr } from '../lib/dates'
export default function MemoryGallery({ year, onClose }) {
  const photos = memories[year] || [], [i, setI] = useState(null)
  const go = d => setI(v => (v + d + photos.length) % photos.length)
  useEffect(() => { if (i === null) return; const h = e => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }; addEventListener('keydown', h); return () => removeEventListener('keydown', h) }, [i])
  return (<div id="gallery" className="scroll-mt-24 mt-10 bg-cream text-brown rounded-2xl p-5 md:p-8">
    <div className="flex justify-between items-center mb-5"><h3 className="font-display text-2xl text-maroon">{mr(year)} — {yearLabels[year]}</h3><button onClick={onClose} className="p-2 rounded-full bg-maroon text-cream" aria-label="बंद करा"><X size={18} /></button></div>
    {photos.length === 0 ? <p className="text-center py-10">या वर्षाचे फोटो लवकरच जोडले जातील.<br /><span className="text-sm">(फोटो जोडण्यासाठी src/data/memories.js उघडा)</span></p> :
      <div className="columns-2 md:columns-3 gap-3">{photos.map((p, n) => <button key={n} onClick={() => setI(n)} className="mb-3 block w-full overflow-hidden rounded-lg break-inside-avoid"><img src={p.src} alt={p.caption || ''} loading="lazy" className="w-full h-auto hover:scale-[1.03] transition duration-500" /></button>)}</div>}
    {i !== null && <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-3" onClick={() => setI(null)}>
      <button className="absolute top-4 right-4 text-white p-2" aria-label="बंद करा"><X /></button>
      <p className="absolute top-5 left-4 text-white/80">{mr(i + 1)} / {mr(photos.length)}</p>
      <img src={photos[i].src} alt="" className="max-h-[80vh] max-w-full object-contain" onClick={e => e.stopPropagation()} />
      {photos[i].caption && <p className="text-white mt-3">{photos[i].caption}</p>}
      <button onClick={e => { e.stopPropagation(); go(-1) }} className="absolute left-2 top-1/2 text-white p-3" aria-label="मागे"><ChevronLeft size={32} /></button>
      <button onClick={e => { e.stopPropagation(); go(1) }} className="absolute right-2 top-1/2 text-white p-3" aria-label="पुढे"><ChevronRight size={32} /></button></div>}
  </div>)
}
