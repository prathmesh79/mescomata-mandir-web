import { EVENT, keyDates } from '../data/events'
export default function Hero() {
  return (<section id="home" className="relative bg-maroon text-cream pt-28 pb-14 px-4 pattern scroll-mt-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon/60 to-maroon-dark/90" />
    <div className="relative max-w-5xl mx-auto text-center hero-in">
      <span className="inline-block border border-gold rounded-full px-4 py-1 text-gold text-sm mb-4">{EVENT.edition} • {EVENT.occasion}</span>
      <p className="font-display text-gold text-lg md:text-xl mb-3">{EVENT.slogan}</p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight text-saffron drop-shadow">{EVENT.title}</h1>
      <div className="rule my-5 mx-auto max-w-md" />
      <p className="text-xl md:text-2xl font-semibold">{EVENT.organizer}</p>
      <p className="mt-3 text-lg">📍 {EVENT.venue}, {EVENT.address.join(', ')}</p>
      <p className="mt-1 text-2xl text-gold font-display">{EVENT.dateRange}</p>
      <p className="mt-2 italic text-cream/80">{EVENT.badge}</p>
      <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="#schedule" className="bg-saffron text-maroon-dark font-bold rounded-full px-8 py-3.5">कार्यक्रम पहा</a>
        <a href="#memories" className="border-2 border-gold text-gold font-bold rounded-full px-8 py-3.5">मागील वर्षांच्या आठवणी</a>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">{keyDates.map(k => (
        <div key={k.label} className="bg-cream/10 border border-gold/50 rounded-lg p-3"><p className="text-gold font-display text-lg">{k.label}</p>{k.text && <p className="font-semibold">{k.text}</p>}<p className="text-sm text-cream/80">{k.when}</p></div>))}</div>
    </div><div className="rule absolute bottom-0 inset-x-0" />
  </section>)
}
