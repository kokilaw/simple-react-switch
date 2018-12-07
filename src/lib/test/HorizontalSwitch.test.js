import React from "react";
import HorizontalSwitch from "../HorizontalSwitch";
import renderer from "react-test-renderer";

describe("HorizontalSwitch", () => {
  it("renders properly", () => {
    const tree = renderer.create(<HorizontalSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
