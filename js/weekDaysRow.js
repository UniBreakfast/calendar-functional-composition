export { buildWeekDaysRow }

import { buildWeekDay } from './weekDay.js'

function buildWeekDaysRow(styles) {
  const ul = document.createElement('ul')

  ul.append(...weekDays.map(
    (day, i) => buildWeekDay(styles, day, i > 4)
  ))

  Object.assign(ul.style, styles.weekDaysRow)

  return ul
}

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
