import * as React from "react";
import { Alert } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import Checkbox from "./checkbox";

declare let module: any;

storiesOf("Checkbox", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Simple Checkbox" usage="isChecked='true' text='text'">
        <Checkbox isChecked onPress={() => Alert.alert("press")} text="text" />
      </UseCase>
      <UseCase text="Simple Checkbox" usage="isChecked='false' text='text'">
        <Checkbox
          isChecked={false}
          onPress={() => Alert.alert("press")}
          text="login:show_password"
        />
      </UseCase>
    </Story>
  ));
