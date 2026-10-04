import { Navigation } from 'lucide-react'; import { EVENT } from '../data/events'
export default function LocationSection() {
  const q = encodeURIComponent(EVENT.mapsQuery), url = EVENT.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${q}`
  return (<section id="location" className="scroll-mt-24 py-14 px-4 bg-cream"><div className="max-w-5xl mx-auto reveal">
    <h2 className="font-display text-3xl md:text-4xl text-maroon text-center mb-6">कार्यक्रम स्थळ</h2>
    <div className="text-center text-lg mb-5"><p className="font-bold">{EVENT.venue}</p>{EVENT.address.map(a => <p key={a}>{a}</p>)}</div>
    <iframe title="नकाशा" loading="lazy" className="w-full h-72 md:h-96 rounded-xl border-4 border-gold" src={`https://maps.google.com/maps?q=${q}&output=embed`} />
    <div className="text-center mt-5"><a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-maroon text-cream font-bold rounded-full px-7 py-3.5"><Navigation size={18} /> Google Maps वर मार्ग पहा</a></div>
  </div></section>)
}
