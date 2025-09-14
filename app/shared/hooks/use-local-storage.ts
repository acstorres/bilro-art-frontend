import { useState } from 'react'

const isBrowser = typeof window !== 'undefined'

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = isBrowser && window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return initialValue
    }
  })

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (isBrowser) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
