import React from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react';
import ButtonBase from './components/button';
import Select from './components/select';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div className="body">
        <Select/>
        <ButtonBase />
        <Button class="ui button">Click Here</Button>
      </div>
    </div>
  );
}

export default App;
