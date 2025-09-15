import { useCallback, useEffect, useRef, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

function isEqual(a: unknown, b: unknown) {
  try {
    return JSON.stringify(a) === JSON.stringify(b)
  } catch {
    return a === b
  }
}

function parseStored<T>(value: string | null, fallback: T): T {
  if (value === null) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const readFromStorage = useCallback((): T => {
    if (!isBrowser) return initialValue
    try {
      const raw = window.localStorage.getItem(key)
      return parseStored<T>(raw, initialValue)
    } catch {
      return initialValue
    }
  }, [key, initialValue])

  const [storedValue, setStoredValue] = useState<T>(() => {
    return readFromStorage()
  })

  const valueRef = useRef<T>(storedValue)
  useEffect(() => {
    valueRef.current = storedValue
  }, [storedValue])

  useEffect(() => {
    const v = readFromStorage()
    if (!isEqual(v, valueRef.current)) {
      setStoredValue(v)
      valueRef.current = v
    }
  }, [key, readFromStorage])

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key && e.key !== key) return
      try {
        const newVal = parseStored<T>(e.newValue, initialValue)
        if (!isEqual(newVal, valueRef.current)) {
          setStoredValue(newVal)
          valueRef.current = newVal
        }
      } catch {
        // ignore
      }
    }

    const handleCustom = (e: Event) => {
      const detail = (e as CustomEvent)?.detail
      if (!detail || detail.key !== key) return
      const newVal = detail.newValue as T
      if (!isEqual(newVal, valueRef.current)) {
        setStoredValue(newVal)
        valueRef.current = newVal
      }
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener('local-storage', handleCustom as EventListener)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('local-storage', handleCustom as EventListener)
    }
  }, [key, initialValue])

  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (value) => {
      try {
        setStoredValue((prev) => {
          const next =
            typeof value === 'function' ? (value as (p: T) => T)(prev) : value
          try {
            if (isBrowser) {
              window.localStorage.setItem(key, JSON.stringify(next))
              window.dispatchEvent(
                new CustomEvent('local-storage', {
                  detail: { key, newValue: next },
                }),
              )
            }
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn(
              'useLocalStorage: failed to write to localStorage',
              err,
            )
          }
          valueRef.current = next
          return next
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('useLocalStorage set error', err)
      }
    },
    [key],
  )

  return [storedValue, setValue]
}
