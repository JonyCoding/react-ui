import React from 'react';
import classNames from 'classnames'
import Button,{ButtonType,ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large}> Hello</Button>
        <Button disable btnType={ButtonType.Primary} size={ButtonSize.large}> Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large}> Hello Primary</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.large}> Hello</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" size={ButtonSize.large}> Hello</Button>
        <Button disable btnType={ButtonType.Link} href="https://www.baidu.com" size={ButtonSize.Small}> Hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
