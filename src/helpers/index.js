const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'ноября',
  'декабря',
]

export const getDateString = (createdAt) => {
  try {
    const createdAtDate = new Date(createdAt)
    const date = createdAtDate.getDate()
    const hours = createdAtDate.getHours()
    const minutes = createdAtDate.getMinutes()
    const month = createdAtDate.getMonth()
    console.log(months[month])
    const dateText = `${date} ${months[month]} ${hours}:${minutes}`

    return dateText
  } catch (error) {
    return ''
  }
}

export const getClassNames = (...classNames) => classNames.filter((item) => Boolean(item)).join(' ')
