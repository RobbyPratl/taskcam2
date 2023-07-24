import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Replace with the path to your Redux store

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import FeedScreen from "./screens/FeedScreen";

import CompletedTasks from "./screens/CompletedTasks";
import BottomTabNavigator from "./components/BottomTabNavigator";
import History from "./screens/History";
import { registerRootComponent } from "expo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="CompletedTasks" component={CompletedTasks} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

registerRootComponent(App);

export default App;
