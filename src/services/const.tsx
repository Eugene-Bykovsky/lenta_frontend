export const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Месяцы начинаются с 0
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

// const daysFilter = [
//   { value: '1 день' },
//   { value: '2 дня' },
//   { value: '3 дня' },
//   { value: '4 дня' },
//   { value: '5 дней' },
//   { value: '6 дней' },
//   { value: '7 дней' },
//   { value: '8 дней' },
//   { value: '9 дней' },
//   { value: '10 дней' },
//   { value: '11 дней' },
//   { value: '12 дней' },
//   { value: '13 дней' },
//   { value: '14 дней' },
// ]

// const rowFilter = [{ value: 10 }, { value: 50 }, { value: 100 }, { value: 200 }]
