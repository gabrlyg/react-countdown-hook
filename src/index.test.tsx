import { act, cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useCountDown from './index'

afterEach(() => {
  cleanup()
  jest.runAllTimers()
})

beforeEach(() => {
  jest.clearAllTimers()
  jest.useFakeTimers()
})

describe('useCountDown ->', () => {
  it('should start the timer with initial value', () => {
    const { result } = renderHook(() => useCountDown(120))
    expect(result.current.counter).toBe(120)
  })
  it('should start the timer with set interval', () => {
    const { result } = renderHook(() => useCountDown(120))
    expect(result.current.counter).toBe(120)
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(110)
  })
  it('should stop the timer at 0', () => {
    const { result } = renderHook(() => useCountDown(5))
    expect(result.current.counter).toBe(5)
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(0)
  })
  it('should be able to pause the timer', () => {
    const { result } = renderHook(() => useCountDown(120))
    expect(result.current.counter).toBe(120)
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(110)
    act(() => {
      result.current.pause()
    })
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(110)
  })
  it('should be able to resume the timer after pausing', () => {
    const { result } = renderHook(() => useCountDown(120))
    expect(result.current.counter).toBe(120)
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(110)
    act(() => {
      result.current.pause()
    })
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(110)
    act(() => {
      result.current.resume()
    })
    jest.advanceTimersByTime(10000)
    expect(result.current.counter).toBe(100)
  })
})
