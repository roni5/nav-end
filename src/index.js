import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
// import getMenus from './components/menus/Menus';
import * as serviceWorker from './serviceWorker';

// getFacts().then((menus) => {
//   ReactDOM.render(<App menus={menus} />, document.getElementById('root'));
// });

// getMenus().then((menus) => {
//   ReactDOM.render(<App menus={menus} />, document.getElementById('root'));
// });

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
