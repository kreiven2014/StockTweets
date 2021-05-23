import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import HeaderRightTape from "./header_right_tape";

declare let module: any;

storiesOf("HeaderRightTape", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="visible HeaderRightTape" usage="visible='true'">
        <HeaderRightTape />
      </UseCase>
    </Story>
  ));
