import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "./PageNotFound";

describe("PageNotFound component", () => {
  it("should render a 404 text", () => {
    const cmp = shallow(<PageNotFound />);
    expect(cmp.contains("404")).toEqual(true);
  });
});
