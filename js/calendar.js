export { buildCalendar }

import { buildDateRow } from './dateRow.js'
import { buildWeekBlock } from './weekBlock.js'
import { buildWeekDaysRow } from './weekDaysRow.js'

function buildCalendar(styles) {
  const calendar = document.createElement('calendar')

  const today = new Date()

  const weekDaysRow = buildWeekDaysRow(styles)
  const weekBlock = buildWeekBlock(styles, today)
  const dateRow = buildDateRow(styles, today, weekBlock)
  
  calendar.append(dateRow, weekDaysRow, weekBlock)

  Object.assign(calendar.style, styles.calendar)

  return calendar
}
