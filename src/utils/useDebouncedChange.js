import { useCallback, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

function useDebouncedChange(delay, initialValue, onChange) {
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    if (initialValue) {
      setDebouncedValue(initialValue)
    } else {
      setDebouncedValue('')
    }
  }, [initialValue])

  const debouncedHandleOnChange = useDebouncedCallback((event) => {
    if (onChange) {
      onChange(event)
    }
  }, delay)

  const handleChangeDebounced = useCallback((event) => {
    event.persist()

    const newValue = event.currentTarget.value
    setDebouncedValue(newValue)
    debouncedHandleOnChange(event)
  }, [])

  return [debouncedValue, handleChangeDebounced]
}

export default useDebouncedChange
