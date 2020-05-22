import React from "react";
import { shallow } from "enzyme";
import { Admin } from "./Admin";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteMatch: () => ({ path: "/admin" }),
}));

describe("Admin Router", () => {
  it("should render a Switch to make sub-routing", () => {
    const adminCmp = shallow(<Admin />);
    expect(adminCmp.find("Switch")).toHaveLength(1);
  });
});
