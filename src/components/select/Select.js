import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
/**
 * A Select is sugar for <Dropdown selection />.
 */

// const style = (
// );
// export default () => (
//   <div>
//     {style}
//     <DropdownExampleHeader />
//   </div>
// );
// function Select(props) {
//   return <Dropdown {...props} selection />;
// }

// Select.propTypes = {
//   /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
//   options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes))
//     .isRequired
// };
const Select = props => (
  <Menu>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text="Shopping" {...props}  pointing className="link item">
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text="Clothing">
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Blog</Menu.Item>
    <Menu.Item>Contact Us</Menu.Item>
  </Menu>
);

// Select.Divider = Dropdown.Divider;
// Select.Header = Dropdown.Header;
// Select.Item = Dropdown.Item;
// Select.Menu = Dropdown.Menu;

export default Select;
