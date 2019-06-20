import React, { Fragment } from 'react';
import fetch from 'isomorphic-fetch';

import './main.css';
const styles = {
  default: {
    clear: 'both'
  }
};

class Menus extends React.Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  // Fetch the Menus on first mount
  componentDidMount() {
    this.getMenus();
  }

  // Retrieves the Menus of items from the Express app
  getMenus = () => {
    const request = new Request('http://localhost:5001/api/getMenus');
    fetch(request)
      .then((res) => res.json())
      .then((menu) => this.setState({ menu }))
      .catch((error) => {
        console.log('Request failed', error);
      });
  };

  render() {
    const { menu } = this.state;
    // console.log(JSON.stringify(this.state.menu.navCatagories));

    return (
      <div tabindex="0" className="main">
        <ul aria-label="mainnav" className="mainnav">
          {this.state.menu.map((navCatagories, index) => {
            return (
              <li key={index} className="hassubs">
                <a href="#"> {navCatagories.name} </a>
                <ul className="dropdown">
                  {navCatagories.children_data.map((children_data, k) => (
                    <li className="sub" key={k}>
                      <a href="#">{children_data.name}</a>{' '}
                    </li>
                  ))}
                  <li className="sub">
                    <a href="#"> {navCatagories.category_path} </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>

        <br style={styles.default}></br>
      </div>
    );
  }
}

export default Menus;
