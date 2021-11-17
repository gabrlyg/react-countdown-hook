import * as React from 'react'

const useCountDown = (timeToCount: number, interval?: number) => {
  const [counter, setCounter] = React.useState<number>(timeToCount)
  const [isPaused, setIsPaused] = React.useState<boolean>(false)

  const pause = React.useCallback(() => {
    setIsPaused(true)
  }, [])
  const resume = React.useCallback(() => {
    setIsPaused(false)
  }, [])

  React.useEffect(() => {
    const id: null | NodeJS.Timeout =
      counter > 0 && !isPaused
        ? setInterval(() => {
            setCounter(counter - 1)
          }, interval || 1000)
        : null
    return () => {
      id && clearInterval(id)
    }
  }, [counter, interval, isPaused])

  return {
    counter,
    pause,
    resume,
    isPaused
  }
}

export default useCountDown
