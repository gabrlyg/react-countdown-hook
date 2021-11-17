import * as React from 'react'
import useCountDown from 'react-countdown-hook'

export const Timer = () => {
  const { counter, pause, resume, isPaused } = useCountDown(120, 1000)
  const toggleTimer = () => {
    isPaused ? resume() : pause()
  }
  return (
    <React.Fragment>
      <div>Counter: {counter}</div>
      <button onClick={toggleTimer}>{isPaused ? 'Resume' : 'Pause'}</button>
    </React.Fragment>
  )
}
