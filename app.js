import { buildCalendar } from './js/calendar.js'
import { styles } from './styles.js'

const calendar = buildCalendar(styles)

body.append(calendar)
