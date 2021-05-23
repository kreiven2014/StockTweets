/* REACT */
import React from "react";
// import { Alert } from "react-native";

/* MODULES */
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

/* CUSTOM MODULES */
import HeaderRightTape from "./header_right_tape";

describe("HeaderRightTape tests", () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<HeaderRightTape />);
  });

  test("renders correctly", (): void => {
    const tree = renderer.create(<HeaderRightTape />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders null when isn't visible", (): void => {
    component.setState({
      visible: false,
    });
    expect(component.state().visible).toEqual(false);

    const tree = renderer.create(<HeaderRightTape />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("HeaderRightTape tests with dev env", () => {
  let component: any;
  let HeaderRightTapeComp: any;

  beforeEach(() => {
    jest.resetModules();
    jest.doMock("src/configs/main_config", () => {
      // $FlowFixMe
      const config = require.requireActual("src/configs/main_config");

      return {
        ...config,
        ENV: "dev",
      };
    });

    // @Note: need to require module again after do mock of configs
    HeaderRightTapeComp = require("./header_right_tape").default;
    component = shallow(<HeaderRightTapeComp />);
  });

  test("renders correctly", (): void => {
    const tree = renderer.create(<HeaderRightTapeComp />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should call the onPress callback", () => {
    expect(component.state().visible).toEqual(true);
    // TODO(ANY): adapter don't return tree of react-native elements.
    // should return TouchableOpacity
    const button = component
      .find({
        testID: "headerRightTape",
      })
      .first();
    button.simulate("longPress");
    expect(component.state().visible).toEqual(false);

    // @Note: left this for example how to test when on press is calling alert
    // button.simulate("press");
    // expect(Alert.alert).toHaveBeenCalled();

    // // TODO(anybody): check that functions are called corresponding function from props !
    // Alert.alert.mock.calls[0][2][0].onPress();
    // Alert.alert.mock.calls[0][2][1].onPress();
  });
});
