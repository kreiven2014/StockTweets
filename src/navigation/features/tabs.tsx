/* REACT */
import React from "react";

/* MODULES */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* CUSTOM MODULES */

import MainPage from "src/containers/main_page/main_page";
import ProductList from "src/containers/product_list/product_list";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Main" component={MainPage} />
    <Tab.Screen name="ProductList" component={ProductList} />
  </Tab.Navigator>
);
