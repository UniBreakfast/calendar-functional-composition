export { shiftMonth }

import { buildWeekBlock } from './weekBlock.js'
import { buildDateBox } from './dateBox.js'
import { getFrom } from './utils/getFrom.js'

function shiftMonth(styles, date, weekBlock, shift, monthNames, dateBox, prevBtn, nextBtn) {
  date.setMonth(date.getMonth() + shift)
  dateBox.replaceChildren(...buildDateBox(styles, date, monthNames).children)
  prevBtn.textContent = getFrom(monthNames, date.getMonth(), -1)
  nextBtn.textContent = getFrom(monthNames, date.getMonth(), 1)
  weekBlock.replaceChildren(...buildWeekBlock(styles, date).children)
}
