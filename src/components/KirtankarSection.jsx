import { kirtankars, kathavyas } from '../data/kirtankars'; import { schedule } from '../data/events'; import { fmt } from '../lib/dates'
const Face = ({ k, big }) => <img src={k.photo} alt={k.name} loading="lazy" className={`${big ? 'w-36 h-36' : 'w-28 h-28'} rounded-full object-cover object-top border-4 border-gold bg-cream mx-auto`} />
export default function KirtankarSection() {
  return (<section id="kirtankar" className="scroll-mt-24 py-14 px-4 bg-maroon text-cream pattern"><div className="max-w-6xl mx-auto">
    <h2 className="font-display text-3xl md:text-4xl text-gold text-center mb-8 reveal">कीर्तनकार व महाराज</h2>
    <div className="reveal max-w-md mx-auto text-center bg-cream/10 border border-gold rounded-2xl p-5 mb-8"><Face k={kathavyas} big /><p className="font-display text-xl mt-3 text-saffron">{kathavyas.name}</p><p>{kathavyas.role}</p><p className="text-sm text-cream/80">{kathavyas.place}</p><p className="mt-1 font-semibold">{kathavyas.note}</p></div>
    <p className="text-center mb-6 text-gold">महाराष्ट्रातील नामवंत कीर्तनकारांचे कीर्तन — रात्री ८ ते ११</p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{kirtankars.map(k => { const d = schedule.filter(s => s.kirtankar === k.id)
      return (<div key={k.id} className="reveal text-center bg-cream/10 border border-gold/40 rounded-2xl p-4"><Face k={k} />
        {k.role && <p className="text-gold text-sm mt-2">{k.role}</p>}<p className="font-semibold leading-snug mt-1">{k.name}</p><p className="text-sm text-cream/80">{k.place}</p>
        <p className="text-sm mt-1 text-saffron">{fmt(d[0].date, { weekday: 'long', day: 'numeric', month: 'long' })}</p></div>) })}</div>
  </div></section>)
}
