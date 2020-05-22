import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home View", () => {
  it("should render a Segment", () => {
    const homeCmp = shallow(<Home />);
    expect(homeCmp.find("Segment")).toHaveLength(1);
  });
});
