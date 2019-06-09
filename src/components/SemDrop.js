import React from 'react';
import Dropdown from '@bit/semantic-org.semantic-ui-react.dropdown';

const style = (
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
  />
);

const DropdownExampleHeader = () => (
  <Dropdown
    text="Filter"
    icon="filter"
    floating
    labeled
    button
    className="icon"
  >
    <Dropdown.Menu>
      <Dropdown.Header icon="tags" content="Filter by tag" />
      <Dropdown.Item>Important</Dropdown.Item>
      <Dropdown.Item>Announcement</Dropdown.Item>
      <Dropdown.Item>Discussion</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default () => (
  <div>
    {style}
    <DropdownExampleHeader />
  </div>
);
