export const sortByDate = (a: string, b: string) => {
  const dateA = new Date(a)
  const dateB = new Date(b)

  return dateB.getTime() - dateA.getTime()
}
