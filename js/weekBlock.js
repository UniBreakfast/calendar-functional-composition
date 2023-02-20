export { buildWeekBlock }

import { buildMonthDays } from './monthDays.js'

function buildWeekBlock(styles, date) {
  const weekBlock = document.createElement('ul')

  const prevMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0)
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1)
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const prevDaysCount = (monthStart.getDay() + 6) % 7 + 6
  const earliestDate = new Date(date.getFullYear(), date.getMonth(), -prevDaysCount)
  const nextMonthStart = new Date(date.getFullYear(), date.getMonth() + 1, 1)
  const latestDate = new Date(earliestDate)

  latestDate.setDate(earliestDate.getDate() + 55)

  const prevMonthDays = buildMonthDays(styles, earliestDate, prevMonthEnd, false)
  const MonthDays = buildMonthDays(styles, monthStart, monthEnd, true)
  const nextMonthDays = buildMonthDays(styles, nextMonthStart, latestDate, false)

  weekBlock.append(...prevMonthDays, ...MonthDays, ...nextMonthDays)

  Object.assign(weekBlock.style, styles.weekBlock)
  
  return weekBlock
}
