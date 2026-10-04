import { useState } from 'react'; import { Menu, X } from 'lucide-react'
const links = [['मुख्यपृष्ठ', '#home'], ['कार्यक्रम', '#schedule'], ['आजचा कार्यक्रम', '#today'], ['कीर्तनकार', '#kirtankar'], ['आठवणी', '#memories'], ['आमच्याबद्दल', '#about'], ['संपर्क', '#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (<nav className="bg-maroon-dark text-cream h-14 flex items-center justify-between px-4 lg:px-8 border-b border-gold/60">
    <a href="#home" className="flex items-center gap-2"><span className="grid place-items-center w-9 h-9 rounded-full bg-saffron text-maroon-dark font-display text-xl">ॐ</span><span className="font-display text-lg leading-none">मेस्को माता मंदिर</span></a>
    <ul className="hidden lg:flex gap-5 text-[15px]">{links.map(([t, h]) => <li key={h}><a className="hover:text-gold" href={h}>{t}</a></li>)}</ul>
    <button className="lg:hidden p-2" aria-label="मेनू" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <ul className="lg:hidden absolute top-14 inset-x-0 bg-maroon-dark border-t border-gold/40 shadow-xl">{links.map(([t, h]) => <li key={h}><a onClick={() => setOpen(false)} className="block px-6 py-3.5 border-b border-white/10" href={h}>{t}</a></li>)}</ul>}
  </nav>)
}
