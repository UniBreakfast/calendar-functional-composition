export { shiftMonth }

import { buildWeekBlock } from './weekBlock.js'
import { buildDateBox } from './dateBox.js'
import { getFrom } from './utils/getFrom.js'

function shiftMonth(styles, date, weekBlock, monthNames, dateBox, prevBtn, nextBtn, step) {
  date.setMonth(date.getMonth() + step)
  dateBox.replaceChildren(...buildDateBox(styles, date, monthNames).children)
  prevBtn.textContent = getFrom(monthNames, date.getMonth(), -1)
  nextBtn.textContent = getFrom(monthNames, date.getMonth(), 1)
  weekBlock.replaceChildren(...buildWeekBlock(styles, date).children)
}
