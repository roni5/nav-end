import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Project Home</h1>
        {/* Link to menu.js */}
        <Link to={'./menus'}>
          <Button primary>My End Menu</Button>
        </Link>
      </div>
    );
  }
}
export default Home;
