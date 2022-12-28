export const formatDate = (date: string) => {
  const dateObject = new Date(date)
  const month = dateObject.toLocaleString('en-US', { month: 'long' })
  const day = dateObject.getDate()
  const year = dateObject.getFullYear()
  const formatedDate = `${day} ${month} ${year}`

  return formatedDate
}
