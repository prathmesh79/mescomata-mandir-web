const pad = n => String(n).padStart(2, '0')
export const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
// चाचणीसाठी: ?date=2026-10-15
export const now = () => { const q = new URLSearchParams(location.search).get('date'); return q ? new Date(q + 'T12:00:00') : new Date() }
export const fmt = (s, o) => new Date(s + 'T12:00:00').toLocaleDateString('mr-IN', o)
export const mr = n => Number(n).toLocaleString('mr-IN', { useGrouping: false })
export function eventState(schedule) {
  const n = now(), t = ymd(n), tm = ymd(new Date(n.getTime() + 864e5))
  return { today: schedule.find(d => d.date === t), tomorrow: schedule.find(d => d.date === tm), next: schedule.find(d => d.date > tm), before: t < schedule[0].date, after: t > schedule.at(-1).date, todayStr: t }
}
