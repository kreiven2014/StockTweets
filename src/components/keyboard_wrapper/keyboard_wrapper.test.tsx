/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import KeyboardWrapper from "./keyboard_wrapper";
import TextInput from "src/components/base_input/base_input";

describe("KeyboardWrapper tests", () => {
  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <KeyboardWrapper>
          <TextInput
            placeholder="placeholder"
            value="value"
            // FUNCTIONS
            onChangeText={(value: string) => { }} // eslint-disable-line @typescript-eslint/no-unused-vars
          />
        </KeyboardWrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
