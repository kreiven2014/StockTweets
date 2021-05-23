import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import Icons from "./icons";
import { COLORS } from "src/theme";

declare let module: any;

storiesOf("Icons", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase
        text="Icons"
        usage='type="material" name="ac-unit" size={44} color={COLORS.BLACK}'>
        <Icons type="material" name="ac-unit" size={44} color={COLORS.BLACK} />
      </UseCase>
    </Story>
  ));
