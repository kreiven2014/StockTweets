/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import CustomWrapperKeyboard from "./custom_wrapper_keyboard";
import TextInput from "src/components/base_input/base_input";

describe("CustomWrapperKeyboard tests", () => {
  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <CustomWrapperKeyboard>
          <TextInput
            placeholder="placeholder"
            value="value"
            // FUNCTIONS
            onChangeText={(value: string) => { }} // eslint-disable-line @typescript-eslint/no-unused-vars
          />
        </CustomWrapperKeyboard>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
