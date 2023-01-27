import { useState, useEffect } from 'react'

import { formatDate } from '../utils'

export const useFormatedDate = date => {
  const [formatedDate, setFormatedDate] = useState()

  useEffect(() => {
    const finalDate = formatDate(date)

    setFormatedDate(finalDate)
  }, [date])

  return { formatedDate }
}
