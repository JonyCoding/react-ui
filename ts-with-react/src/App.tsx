import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/hello'
import LikeButton from './components/likeButton'
import MouseTracker from './components/MouseTracker'
import './App.css';
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader'

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string }
}
const themes: IThemeProps = {
  'light': {
    color: "#000",
    background: '#eee',
  },
  'dark': {
    color: "#fff",
    background: '#222',
  }
}

export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {
  // const positions = useMousePosition()
  const [show, setShow] = useState(true)
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => { setShow(!show) }}>Reflish</button>
          <Hello message={"1232"}></Hello>
          <LikeButton></LikeButton>
          <MouseTracker></MouseTracker>
          {/* <p>x:{positions.x},y:{positions.y}</p> */}
          {loading ? <p>🐶 读取中……</p> : <img src={dogResult.message}></img>}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
