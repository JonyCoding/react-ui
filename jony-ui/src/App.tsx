import React from 'react';
import classNames from 'classnames'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu onSelect={(index) => { alert(index) }}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="drodown">
            <MenuItem>
              drodown 1
            </MenuItem>
            <MenuItem>
              drodown 2
            </MenuItem>
            <MenuItem>
              drodown 3
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Alert type="success">dawddda</Alert>
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
