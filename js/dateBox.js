export { buildDateBox }

function buildDateBox(styles, date, monthNames) {
  const dateBox = document.createElement('div')
  const monthSpan = document.createElement('span')
  const yearSpan = document.createElement('span')

  monthSpan.textContent = monthNames[date.getMonth()]
  yearSpan.textContent = date.getFullYear()

  dateBox.append(monthSpan, ' ', yearSpan)

  Object.assign(dateBox.style, styles.dateBox)
  Object.assign(monthSpan.style, styles.month)
  Object.assign(yearSpan.style, styles.year)

  return dateBox
}
