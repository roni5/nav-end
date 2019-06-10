import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ButtonBase = () => (
  <React.Fragment>
    <Button basic color="olive">
      Olive
    </Button>
    <br />
    <br />
    <Button.Group>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <br />
      <br />
      <Button animated="vertical">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <br />
      <br />
      <Button animated="fade">
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
      </Button>
    </Button.Group>
    <div>
      <Button.Group>
        <Button
          onClick={() => {
            console.log('clicked');
          }}
          primary
        >
          Primary
        </Button>
        <Button secondary>Secondary</Button>
      </Button.Group>
    </div>
  </React.Fragment>
);

export default ButtonBase;
