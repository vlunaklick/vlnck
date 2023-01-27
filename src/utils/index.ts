export const formatDate = (date: string) => {
  const dateObject = new Date(date)
  const month = dateObject.toLocaleString('en-US', { month: 'long' })
  const day = dateObject.getDate()
  const year = dateObject.getFullYear()
  const formatedDate = `${day + 1} ${month} ${year}`

  return formatedDate
}

export const sortByDate = (a: string, b: string) => {
  const dateA = new Date(a)
  const dateB = new Date(b)

  return dateB.getTime() - dateA.getTime()
}
