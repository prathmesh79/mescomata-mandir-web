import { EVENT, keyDates } from '../data/events'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const cardsRef = useRef([])
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('card-visible')
          }, idx * 150)
        }
      })
    }, { threshold: 0.1 })
    
    cardsRef.current.forEach(card => card && observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative bg-maroon text-cream pt-28 pb-14 px-4 pattern scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon/60 to-maroon-dark/90" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left hero-in">
            <span className="inline-block border border-gold rounded-full px-4 py-1 text-gold text-sm mb-4 animate-fade-in">
              {EVENT.edition} • {EVENT.occasion}
            </span>
            <p className="font-display text-gold text-lg md:text-xl mb-3 animate-slide-up">{EVENT.slogan}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-saffron drop-shadow animate-slide-up">
              {EVENT.title}
            </h1>
            <div className="rule my-5 lg:mx-0 mx-auto max-w-md animate-expand" />
            <p className="text-xl md:text-2xl font-semibold animate-slide-up">{EVENT.organizer}</p>
            <p className="mt-3 text-lg animate-fade-in">📍 {EVENT.venue}, {EVENT.address.join(', ')}</p>
            <p className="mt-1 text-2xl text-gold font-display animate-pulse-glow">{EVENT.dateRange}</p>
            <p className="mt-2 italic text-cream/80 animate-fade-in">{EVENT.badge}</p>
            
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#schedule" className="bg-saffron text-maroon-dark font-bold rounded-full px-8 py-3.5 btn-bounce hover:scale-105 transition-transform">
                कार्यक्रम पहा
              </a>
              <a href="#memories" className="border-2 border-gold text-gold font-bold rounded-full px-8 py-3.5 btn-bounce hover:scale-105 transition-transform">
                मागील वर्षांच्या आठवणी
              </a>
            </div>
          </div>
          
          {/* Profile Photo - Right Side */}
          <div className="lg:w-80 w-64 flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl animate-pulse-slow"></div>
              <img 
                src="/poster.png" 
                alt="Mescomata Mandir" 
                className="relative rounded-full w-full h-auto border-4 border-gold shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
        
        {/* 4 Cards - Always Visible with Stagger Animation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {keyDates.map((k, idx) => (
            <div 
              key={k.label} 
              ref={el => cardsRef.current[idx] = el}
              className="event-card bg-cream/10 border border-gold/50 rounded-lg p-4 hover:bg-cream/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <p className="text-gold font-display text-lg mb-1">{k.label}</p>
              {k.text && <p className="font-semibold text-base">{k.text}</p>}
              <p className="text-sm text-cream/80 mt-1">{k.when}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="rule absolute bottom-0 inset-x-0" />
    </section>
  )
}
