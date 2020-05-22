import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App components", () => {
  it("should render s switch component to make routing", () => {
    const appCmp = shallow(<App />);
    expect(appCmp.find("Switch")).toHaveLength(1);
  });
});
