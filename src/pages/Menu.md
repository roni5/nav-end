import React, { Fragment } from 'react';
// import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';
// import downBar from '../components/down/downBar.css';
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
// menus: {}
menu: []
};
}

// Fetch the Menus on first mount
componentDidMount() {
this.getMenus();
//console.log(this.state.menus);
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
// const { menus } = this.state;
const { menu } = this.state;
// console.log(menu.children*data[0].url_path);
console.log(JSON.stringify(this.state.menu.url_path));
// console.log(JSON.stringify(this.state.Menus.navCatagories.children_data));
{
/* {children_data.map((url_path, i) => (

<li key={i}>
<li>{url_path.name}</li>
<a href={url_path.category_path}></a>
<li>{url_path.category_path}</li>
</li>
))} _/
}

    // {children_data.map(hassub => <li key={id}>{hassub.url_path }</li>)}
    /* Check to see if any items are found
    */
    return (
      <div tabindex="0" className="main">
        <ul aria-label="mainnav" className="mainnav">
          {this.state.menu.map((children_data, index) => {
            return (
              <li key={index} className="hassubs">
                <a href="#"> {children_data.name} </a>
                <ul className="dropdown">
                  <li className="sub">
                    <a href="#"> {children_data.category_path} </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>

        {/* <br style={styles.default}></br> */}
      </div>
    );

}
}

export default Menus;
