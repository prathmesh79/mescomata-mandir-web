import { EVENT, extras } from '../data/events'
export default function AboutEvent() {
  return (<section id="about" className="scroll-mt-24 py-14 px-4 bg-white"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
    <div className="reveal"><h2 className="font-display text-3xl md:text-4xl text-maroon mb-4">या सोहळ्याबद्दल</h2>
      <p className="leading-8">पाटणसावंगी गावात हा कीर्तन महोत्सव गेली तीन वर्षे सातत्याने आयोजित केला जात आहे. यंदा तो चौथ्या वर्षात पदार्पण करत आहे. नवरात्री उत्सवात होणारा हा सोहळा आता गावकरी आणि भाविकांसाठी दरवर्षीचा आध्यात्मिक व सांस्कृतिक मेळावा बनला आहे.</p>
      <h3 className="font-display text-xl text-maroon mt-6">आयोजक</h3><p className="font-semibold">{EVENT.organizerFull}</p>
      <h3 className="font-display text-xl text-maroon mt-5">स्वागतोत्सुक</h3><ul className="list-disc ml-5">{extras.welcome.map(w => <li key={w}>{w}</li>)}</ul>
      <h3 className="font-display text-xl text-maroon mt-5">भागवत कथा संच</h3><ul>{extras.sath.map(([a, b]) => <li key={a}><b>{a}</b> — {b}</li>)}</ul></div>
    <img src="/poster.png" alt="कार्यक्रम पत्रिका" loading="lazy" className="reveal w-full rounded-xl border-4 border-gold shadow-xl" />
  </div></section>)
}
