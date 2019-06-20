import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ButtonBase = () => (
  <div>
    <br />
    <hr />
    <br />
    <Button.Group>
      <Button animated="vertical">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <br />
      <br />
      <Button animated="fade">
        <Button.Content visible>Sign-up 20% Discount</Button.Content>
        <Button.Content hidden>£12.99 a month</Button.Content>
      </Button>
    </Button.Group>
  </div>
);

export default ButtonBase;
