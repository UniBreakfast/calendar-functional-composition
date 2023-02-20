export { buildWeekDay }

function buildWeekDay(styles, day, weekend) {
  const li = document.createElement('li')

  li.innerText = day

  Object.assign(li.style, styles.weekDay, weekend && styles.weekend)

  return li
}
