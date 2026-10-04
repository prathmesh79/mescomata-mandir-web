import { useEffect } from 'react'
import Navbar from './components/Navbar'; import AnnouncementTicker from './components/AnnouncementTicker'; import Hero from './components/Hero'; import TodayEvent from './components/TodayEvent'
import EventSchedule from './components/EventSchedule'; import KirtankarSection from './components/KirtankarSection'; import MemoryYears from './components/MemoryYears'
import AboutEvent from './components/AboutEvent'; import LocationSection from './components/LocationSection'; import ContactSection from './components/ContactSection'; import Footer from './components/Footer'
export default function App() {
  useEffect(() => { const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .1 }); document.querySelectorAll('.reveal').forEach(el => io.observe(el)); return () => io.disconnect() }, [])
  return (<><header className="fixed top-0 inset-x-0 z-50"><Navbar /><AnnouncementTicker /></header>
    <main><Hero /><TodayEvent /><EventSchedule /><KirtankarSection /><MemoryYears /><AboutEvent /><LocationSection /><ContactSection /></main><Footer /></>)
}
