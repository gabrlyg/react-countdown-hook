# react-countdown-hook

> A very simple count down hook for React.

[![NPM](https://img.shields.io/npm/v/@qriousgabriel/react-countdown-hook.svg)](https://www.npmjs.com/package/@qriousgabriel/react-countdown-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### NPM

```bash
npm install --save @qriousgabriel/react-countdown-hook
```

### Yarn

```bash
yar add @qriousgabriel/react-countdown-hook
```

## Usage

```tsx
// Timer.tsx

import * as React from 'react'
import useCountDown from '@qriousgabriel/react-countdown-hook'

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
```

## License

MIT © [qriousgabriel](https://github.com/qriousgabriel)
