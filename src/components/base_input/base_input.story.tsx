import * as React from "react";
import { TextStyle, Alert } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "storybook/views";
import BaseInput from "./base_input";

declare let module: any;

const buttonStyleArray: TextStyle[] = [{ color: "#c10333" }];

storiesOf("BaseInput", module)
  .addDecorator((fn: any) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase
        text="Simple BaseInput"
        usage="label='label' placeholder='placeholder'">
        <BaseInput
          label="label"
          placeholder="placeholder"
          value=""
          // FUNCTIONS
          onChangeText={() => Alert.alert("change")}
        />
      </UseCase>
      <UseCase
        text="autoCapitalize BaseInput"
        usage="autoCapitalize='sentences'">
        <BaseInput
          autoCapitalize="sentences"
          placeholder="placeholder"
          value=""
          // FUNCTIONS
          onChangeText={() => Alert.alert("change")}
        />
      </UseCase>
      <UseCase text="hasError BaseInput" usage="hasError='true'">
        <BaseInput
          hasError
          placeholder="placeholder"
          value=""
          // FUNCTIONS
          onChangeText={() => Alert.alert("change")}
        />
      </UseCase>
      <UseCase text="errorMessage BaseInput" usage="errorMessage='error'">
        <BaseInput
          errorMessage="error"
          placeholder="placeholder"
          value=""
          // FUNCTIONS
          onChangeText={() => Alert.alert("change")}
        />
      </UseCase>
      <UseCase text="secureTextEntry BaseInput" usage="secureTextEntry='true'">
        <BaseInput
          secureTextEntry
          placeholder="placeholder"
          value=""
          // FUNCTIONS
          onChangeText={() => Alert.alert("change")}
        />
      </UseCase>
      <UseCase text="style BaseInput" usage="style='true'">
        <BaseInput
          placeholder="placeholder"
          style={buttonStyleArray}
          value=""
          // FUNCTIONS
          onChangeText={() => Alert.alert("change")}
          onSubmitEditing={() => Alert.alert("onSubmitEditing")}
        />
      </UseCase>
    </Story>
  ));
