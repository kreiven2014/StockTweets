/* REACT */
import React, { Component } from "react";
import { Platform } from "react-native";

/* MODULES */
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

/* CUSTOM MODULES */
import OnBoarding from "src/containers/onboarding/onboarding";
import Home from "src/containers/home/home";
import { defaultNavigationOptions } from "src/navigation/navigation_helpers";
import { COLORS } from "src/theme";
import styles from "./styles";

export interface Props {
  isAuthorized: boolean;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// IN CASE we need to use modal drawer for other screens
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeTintColor: COLORS.WHITE,
        itemStyle: { backgroundColor: COLORS.TRANSPARENT },
      }}>
      <Drawer.Screen name="Menu1" component={Home} />
      <Drawer.Screen name="Menu2" component={Home} />
      <Drawer.Screen name="Menu3" component={Home} />
    </Drawer.Navigator>
  );
}
export default class extends Component<Props> {
  static defaultProps: Props;

  componentDidMount() {
    setTimeout(SplashScreen.hide, Platform.OS === "ios" ? 500 : 0);
  }

  // ==================
  // ===== RENDER =====
  // ==================

  render(): JSX.Element {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...defaultNavigationOptions,
            //@ts-ignore disable header for whole app
            header: () => { },
          }}
          initialRouteName="OnBoarding">
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen
            name="Home"
            component={MyDrawer}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
