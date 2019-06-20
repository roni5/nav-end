import React from 'react';
import ButtonBase from './components/button';
import { Route, Switch } from 'react-router-dom';
import Form from './components/form/Form';
import Home from './pages/Home';
import Menus from './pages/Menus';

import './App.css';

class App extends React.Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menus" component={Menus} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <div>
          <App />
          <div className="body">
            <Form />
            <ButtonBase />
          </div>
        </div>
      </Switch>
    );
  }
}

export default App;
