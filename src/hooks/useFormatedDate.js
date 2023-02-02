import { useState, useEffect } from 'react'

import { formatDate } from 'src/utils'

export const useFormatedDate = date => {
  const [formatedDate, setFormatedDate] = useState()

  useEffect(() => {
    const finalDate = formatDate(date)

    setFormatedDate(finalDate)
  }, [date])

  return { formatedDate }
}
