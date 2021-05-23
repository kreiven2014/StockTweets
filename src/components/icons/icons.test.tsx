/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import Icon from "./icons";
import { COLORS } from "src/theme";

describe("Icons tests", () => {
  test("renders correctly", (): void => {
    const tree = renderer
      .create(<Icon name="credit_cart" size={12} color={COLORS.WHITE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // eslint-disable-next-line quotes
  test('renders correctly with type="material"', (): void => {
    const tree = renderer
      .create(
        <Icon type="material" name="ac-unit" size={12} color={COLORS.BLACK} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
