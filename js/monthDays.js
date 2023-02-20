export { buildMonthDays }

import { buildMonthDay } from './monthDay.js'
import { isToday } from './isToday.js'

function buildMonthDays(styles, startDate, endDate, isCurrentMonth=true) {
  const year = startDate.getFullYear()
  const month = startDate.getMonth()
  const endDay = endDate.getDate()
  const monthDays = []

  for (let day = startDate.getDate(); day <= endDay; day++) {
    const date = new Date(year, month, day)
    const weekend = date.getDay() === 0 || date.getDay() === 6
    const monthDay = buildMonthDay(styles, date, isCurrentMonth)

    if (isToday(date)) Object.assign(monthDay.style, styles.today)
    if (weekend) Object.assign(monthDay.style, styles.weekend)

    monthDays.push(monthDay)
  }

  return monthDays
}
