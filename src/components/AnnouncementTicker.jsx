import { announcements, schedule } from '../data/events'; import { eventState } from '../lib/dates'
export default function AnnouncementTicker() {
  const { today } = eventState(schedule)
  const items = [...(today ? [`आज ${today.time} — ${today.title}`] : []), ...announcements]
  const row = items.map((t, i) => <span key={i} className="px-8 whitespace-nowrap">❖ {t}</span>)
  return (<div className="bg-saffron text-maroon-dark h-8 overflow-hidden flex items-center text-[15px] font-semibold"><div className="marquee">{row}{row}</div></div>)
}
