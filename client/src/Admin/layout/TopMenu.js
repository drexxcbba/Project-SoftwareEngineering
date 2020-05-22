import React from "react";
import { Segment, Menu } from "semantic-ui-react";

function TopMenu() {
  return (
    <Segment inverted color="teal" className="no-radius">
      <Menu inverted color="teal" secondary>
        <Menu.Item name="home" active />
      </Menu>
    </Segment>
  );
}

export default TopMenu;
