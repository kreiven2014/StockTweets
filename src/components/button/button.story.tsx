import * as React from "react";
import { ViewStyle, Alert } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import Button from "./button";

declare let module: any;

const buttonStyleArray: ViewStyle[] = [
  { paddingVertical: 10, backgroundColor: "#c2c" },
  { borderRadius: 0 },
];

storiesOf("BaseText", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase
        text="Simple button"
        usage="The disabled behavior of the button.">
        <Button text="Click It" onPress={() => Alert.alert("pressed")} />
      </UseCase>
      <UseCase text="reversed" usage="The reversed style.">
        <Button
          reversed
          text="Click It"
          // FUNCTIONS
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
      <UseCase text="Disabled" usage="The disabled.">
        <Button
          disabled
          text="Click It"
          // FUNCTIONS
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
      <UseCase text="Array Style container" usage="Button with array style">
        <Button
          text="Click It"
          onPress={() => Alert.alert("pressed")}
          style={buttonStyleArray}
        />
      </UseCase>
    </Story>
  ));
