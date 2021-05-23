import * as React from "react";
import { TextStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import BaseText from "./base_text";

declare let module: any;

const buttonStyleArray: TextStyle[] = [{ color: "#000" }];

storiesOf("Button", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Simple text" usage="textKey='text'">
        <BaseText textKey="Text" />
      </UseCase>
      <UseCase text="Property isTitle" usage="isTitle = true">
        <BaseText textKey="Text" isTitle />
      </UseCase>
      <UseCase text="Property style" usage="style">
        <BaseText textKey="Text" style={buttonStyleArray} />
      </UseCase>
    </Story>
  ));
