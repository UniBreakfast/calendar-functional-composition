export { styles }

const styles = {
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px auto',
    width: 'max-content',
    gap: '1rem',
  },
  dateRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateBox: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: '0.5rem',
  },
  monthBtn: {
    width: '6rem',
    padding: '0.5rem 0',
    backgroundColor: 'lightgray',
    borderRadius: '1rem',
  },
  weekDaysRow: {
    display: 'flex',
  },
  weekDay: {
    width: '3rem',
    textAlign: 'center',
  },
  weekend: {
    color: 'red',
  },
  weekBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '21rem',
  },
  monthDay: {
    width: '3rem',
    textAlign: 'center',
    padding: '0.5rem 0',
  },
  otherMonthDay: {
    opacity: '0.2',
  },
  today: {
    border: '1px solid currentColor',
    borderRadius: '1rem',
    padding: 'calc(0.5rem - 1px) 0',
  },
}
