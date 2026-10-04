import { schedule } from '../data/events'; import { byId } from '../data/kirtankars'; import { eventState, fmt, mr } from '../lib/dates'
export default function EventSchedule() {
  const { todayStr } = eventState(schedule)
  return (<section id="schedule" className="scroll-mt-24 py-14 px-4 bg-white"><div className="max-w-6xl mx-auto">
    <h2 className="font-display text-3xl md:text-4xl text-maroon text-center mb-10 reveal">संपूर्ण कार्यक्रम</h2>
    <ol className="border-l-2 border-gold ml-3 md:ml-0 md:border-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 space-y-5 md:space-y-0">
      {schedule.map(d => { const k = byId(d.kirtankar), now = d.date === todayStr; return (
        <li key={d.date} className="reveal relative pl-6 md:pl-0">
          <span className="md:hidden absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-saffron border-2 border-white" />
          <div className={`rounded-xl border-2 p-4 h-full ${now ? 'border-saffron bg-saffron/10' : 'border-gold/40 bg-cream'}`}>
            <div className="flex items-baseline gap-3"><span className="font-display text-4xl text-maroon">{mr(+d.date.slice(8))}</span><span className="font-semibold">{fmt(d.date, { month: 'long' })} • {fmt(d.date, { weekday: 'long' })}</span>{now && <span className="ml-auto text-xs bg-saffron text-white rounded-full px-2 py-0.5">आज</span>}</div>
            <p className="font-bold mt-2 text-maroon">{d.title}</p>
            {k && <p>{k.name} <span className="text-sm text-brown/70">({k.place})</span></p>}
            <p className="text-sm mt-1">🕐 {d.time}</p>{d.info && <p className="text-sm mt-1 text-saffron font-semibold">{d.info}</p>}
          </div></li>) })}
    </ol></div></section>)
}
