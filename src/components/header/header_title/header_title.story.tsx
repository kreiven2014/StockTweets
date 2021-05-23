import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import HeaderTitle from "./header_title";

declare let module: any;

storiesOf("HeaderTitle", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="text HeaderTitle" usage="textKey='true'">
        <HeaderTitle textKey="text:key" />
      </UseCase>
    </Story>
  ));
