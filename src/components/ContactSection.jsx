import { Phone, MessageCircle, MapPin, Heart } from 'lucide-react'; import { EVENT } from '../data/events'
export default function ContactSection() {
  const wa = n => `https://wa.me/${EVENT.whatsappCountryCode}${n}`, upi = `upi://pay?pa=${EVENT.upiId}&pn=${encodeURIComponent(EVENT.upiName)}`
  const map = EVENT.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT.mapsQuery)}`
  return (<section id="contact" className="scroll-mt-24 py-14 px-4 bg-white"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    <div className="reveal"><h2 className="font-display text-3xl text-maroon mb-1">संपर्क</h2><p className="mb-4">{EVENT.organizerFull}</p>
      {EVENT.contacts.map(n => (<div key={n} className="flex flex-wrap items-center justify-between gap-2 border-2 border-gold/40 rounded-xl p-3 mb-3"><b className="text-lg">{n}</b>
        <span className="flex gap-2"><a href={`tel:+${EVENT.whatsappCountryCode}${n}`} className="flex items-center gap-1 bg-maroon text-cream rounded-full px-4 py-2.5 text-sm"><Phone size={16} />कॉल करा</a>
        <a href={wa(n)} target="_blank" rel="noreferrer" className="flex items-center gap-1 bg-green-700 text-white rounded-full px-4 py-2.5 text-sm"><MessageCircle size={16} />WhatsApp करा</a></span></div>))}
      <a href={map} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-maroon text-maroon rounded-full px-5 py-2.5"><MapPin size={18} />लोकेशन पहा</a></div>
    <div className="reveal bg-cream border-2 border-gold rounded-2xl p-5 text-center"><h2 className="font-display text-2xl text-maroon mb-3">कार्यक्रमासाठी सहकार्य करा</h2>
      <img src={EVENT.upiQr} alt="UPI QR" className="w-44 mx-auto rounded bg-white p-1" /><p className="mt-3 text-sm">UPI ID: <b>{EVENT.upiId}</b></p>
      <a href={upi} className="mt-3 inline-flex items-center gap-2 bg-saffron text-maroon-dark font-bold rounded-full px-7 py-3"><Heart size={18} />सहकार्य करा</a></div>
  </div></section>)
}
