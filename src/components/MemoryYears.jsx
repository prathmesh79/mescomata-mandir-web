import { useState } from 'react'; import { memories, yearLabels } from '../data/memories'; import MemoryGallery from './MemoryGallery'; import { mr } from '../lib/dates'
export default function MemoryYears() {
  const [y, setY] = useState(null)
  const pick = v => { setY(v); setTimeout(() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), 50) }
  return (<section id="memories" className="scroll-mt-24 py-16 px-4 bg-gradient-to-b from-brown to-maroon-dark text-cream"><div className="max-w-5xl mx-auto">
    <div className="text-center reveal"><h2 className="font-display text-3xl md:text-4xl text-gold">तीन वर्षांच्या अविस्मरणीय आठवणी</h2>
      <p className="mt-3 text-lg">आपल्या गावच्या भक्तीमय प्रवासातील काही सुंदर क्षण</p><p className="mt-2 italic text-saffron">कालच्या आठवणी, आजची भक्ती आणि उद्याची परंपरा.</p></div>
    <div className="grid md:grid-cols-3 gap-4 mt-10 reveal">{Object.keys(memories).map(v => (
      <button key={v} onClick={() => pick(v)} className={`rounded-2xl border-2 p-6 text-center transition ${y === v ? 'bg-saffron text-maroon-dark border-saffron' : 'border-gold/70 hover:bg-white/10'}`}>
        <span className="block font-display text-4xl">{mr(v)}</span><span className="block mt-1 text-lg">{yearLabels[v]}</span><span className="block text-sm opacity-80 mt-2">{memories[v].length ? `${mr(memories[v].length)} फोटो` : 'आठवणी पहा'}</span></button>))}</div>
    {y && <MemoryGallery year={y} onClose={() => setY(null)} />}
  </div></section>)
}
