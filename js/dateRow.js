export { buildDateRow }

import { getFrom } from './utils/getFrom.js'
import { buildDateBox } from './dateBox.js'
import { shiftMonth } from './shiftMonth.js'

function buildDateRow(styles, date, weekBlock) {
  const dateRow = document.createElement('div')
  const prevBtn = document.createElement('button')
  const nextBtn = document.createElement('button')

  const dateBox = buildDateBox(styles, date, monthNames)
  const shift = step => shiftMonth(styles, date, weekBlock, monthNames, dateBox, prevBtn, nextBtn, step)

  prevBtn.onclick = () => shift(-1)
  nextBtn.onclick = () => shift(1)
  prevBtn.textContent = getFrom(monthNames, date.getMonth(), -1)
  nextBtn.textContent = getFrom(monthNames, date.getMonth(), 1)

  dateRow.append(prevBtn, dateBox, nextBtn)

  Object.assign(dateRow.style, styles.dateRow)
  Object.assign(prevBtn.style, styles.monthBtn)
  Object.assign(nextBtn.style, styles.monthBtn)

  return dateRow
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
