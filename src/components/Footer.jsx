import { EVENT } from '../data/events'
export default function Footer() { 
  return (
    <footer className="bg-maroon-dark text-cream text-center py-8 px-4">
      <div className="rule mb-5 max-w-xs mx-auto" />
      <p className="font-display text-xl text-gold">{EVENT.organizerFull}</p>
      <p className="text-sm mt-1">{EVENT.address.join(', ')}</p>
      <p className="text-sm mt-3 opacity-70">© {EVENT.year} • {EVENT.title}</p>
      <div className="mt-6 pt-4 border-t border-gold/30">
        <p className="text-xs text-gold/80">Designed by</p>
        <p className="text-base font-semibold text-gold mt-1">Prathmesh Hiwarkar</p>
        <p className="text-sm text-cream/70 mt-0.5">Brivexa Digital Marketing</p>
      </div>
    </footer>
  )
}
