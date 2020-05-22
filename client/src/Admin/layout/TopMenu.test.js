import React from "react";
import { shallow } from "enzyme";
import TopMenu from "./TopMenu";

describe("TopMenu component", () => {
  it("should render a Menu component", () => {
    const menuCmp = shallow(<TopMenu />);
    expect(menuCmp.find("Menu")).toHaveLength(1);
  });
});
