const isBrowser = typeof document !== 'undefined'

const enableMocking = async () => {
  if (
    import.meta.env.VITE_NODE_ENV !== 'development' ||
    import.meta.env.VITE_MOCK_ENABLED === false
  )
    return

  if (isBrowser) {
    const { worker } = await import('./browser')

    return worker.start()
  }
}

await enableMocking()

export {}
