export const formatDate = (date: string) => {
  // Format date to: 1 January 2020 -> Make it that way and in english
  const dateObject = new Date(date)
  const month = dateObject.toLocaleString('en-US', { month: 'long' })
  const day = dateObject.getDate()
  const year = dateObject.getFullYear()
  const formatedDate = `${day} ${month} ${year}`

  return formatedDate
}
