import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import { css } from '@emotion/react'

const styleApp = css`
  & {
    max-width: 1280px;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
`

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="App" css={styleApp}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
