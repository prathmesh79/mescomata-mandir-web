import { CalendarDays, Mic, Clock, MapPin } from 'lucide-react'
import { schedule, EVENT, dailyProgram } from '../data/events'; import { byId } from '../data/kirtankars'; import { eventState, fmt } from '../lib/dates'
function Card({ head, day, empty, hl }) {
  const k = day && byId(day.kirtankar)
  return (<div className={`rounded-xl bg-white p-5 border-2 ${hl ? 'border-saffron shadow-lg' : 'border-gold/40'}`}>
    <h3 className="font-display text-2xl text-maroon mb-3">{head}</h3>
    {!day ? <p className="text-brown/80">{empty}</p> : <ul className="space-y-2.5">
      <li className="flex gap-2"><CalendarDays className="text-saffron shrink-0" /><span>{fmt(day.date, { weekday: 'long', day: 'numeric', month: 'long' })}</span></li>
      <li className="flex gap-2"><Mic className="text-saffron shrink-0" /><span><b>{day.title}</b>{k && <><br />{k.name}, {k.place}</>}{day.info && <><br /><span className="text-sm">{day.info}</span></>}</span></li>
      <li className="flex gap-2"><Clock className="text-saffron shrink-0" />{day.time}</li>
      <li className="flex gap-2"><MapPin className="text-saffron shrink-0" />{EVENT.venue}, पाटणसावंगी</li></ul>}
  </div>)
}
export default function TodayEvent() {
  const s = eventState(schedule)
  const empty = s.before ? `महोत्सव ${fmt(schedule[0].date, { day: 'numeric', month: 'long' })} पासून सुरू होत आहे.` : s.after ? 'महोत्सवाची सांगता झाली. पुढील वर्षी पुन्हा भेटूया!' : 'आज कीर्तन नाही.'
  return (<section id="today" className="scroll-mt-24 py-14 px-4 bg-cream pattern"><div className="max-w-6xl mx-auto reveal">
    <h2 className="font-display text-3xl md:text-4xl text-maroon text-center mb-8">आजचा कार्यक्रम</h2>
    <div className="grid md:grid-cols-3 gap-4"><Card head="आजचा कार्यक्रम" day={s.today} empty={empty} hl /><Card head="उद्याचा कार्यक्रम" day={s.tomorrow} empty="उद्या कार्यक्रम नाही." /><Card head="पुढील कार्यक्रम" day={s.next} empty="पुढील कार्यक्रम नाही." /></div>
    <div className="mt-8 bg-maroon text-cream rounded-xl p-5"><h3 className="font-display text-xl text-gold mb-3">दैनंदिन कार्यक्रम</h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2">{dailyProgram.map(([a, b], i) => <li key={i}><b>{a}</b> — {b}</li>)}</ul></div>
  </div></section>)
}
