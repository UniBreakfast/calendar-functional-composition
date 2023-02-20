export { buildMonthDay }

function buildMonthDay(styles, date, current=true) {
  const monthDay = document.createElement('li')

  monthDay.append(date.getDate())
  monthDay.dataset.date = date.toISOString().slice(0, 10)

  Object.assign(monthDay.style, styles.monthDay, !current && styles.otherMonthDay)

  return monthDay
}
