import { schedule } from '../data/events'; 
import { byId } from '../data/kirtankars'; 
import { eventState, fmt, mr } from '../lib/dates'
import { useEffect, useRef } from 'react'

export default function EventSchedule() {
  const { todayStr } = eventState(schedule)
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, idx) => {
            setTimeout(() => el.classList.add('in'), idx * 80)
          })
        }
      })
    }, { threshold: 0.05 })
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="schedule" className="scroll-mt-24 py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-maroon text-center mb-10 reveal">संपूर्ण कार्यक्रम</h2>
        <ol className="border-l-2 border-gold ml-3 md:ml-0 md:border-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 space-y-5 md:space-y-0">
          {schedule.map(d => { 
            const k = byId(d.kirtankar), now = d.date === todayStr; 
            return (
              <li key={d.date} className="reveal relative pl-6 md:pl-0">
                <span className="md:hidden absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-saffron border-2 border-white" />
                <div className={`rounded-xl border-2 p-4 h-full hover:scale-105 transition-all duration-300 ${now ? 'border-saffron bg-saffron/10 shadow-lg' : 'border-gold/40 bg-cream hover:shadow-xl'}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl text-maroon">{mr(+d.date.slice(8))}</span>
                    <span className="font-semibold">{fmt(d.date, { month: 'long' })} • {fmt(d.date, { weekday: 'long' })}</span>
                    {now && <span className="ml-auto text-xs bg-saffron text-white rounded-full px-2 py-0.5 animate-pulse">आज</span>}
                  </div>
                  <p className="font-bold mt-2 text-maroon">{d.title}</p>
                  {k && <p>{k.name} <span className="text-sm text-brown/70">({k.place})</span></p>}
                  <p className="text-sm mt-1">🕐 {d.time}</p>
                  {d.info && <p className="text-sm mt-1 text-saffron font-semibold">{d.info}</p>}
                </div>
              </li>
            ) 
          })}
        </ol>
      </div>
    </section>
  )
}
