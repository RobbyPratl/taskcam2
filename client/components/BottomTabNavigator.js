import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import FinishedTaskScreen from "../screens/FinishedTaskScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "blue", // Change the active tab color
        inactiveTintColor: "gray", // Change the inactive tab color
        labelStyle: { fontSize: 12 }, // Customize the label style
        style: { backgroundColor: "white" }, // Customize the background color
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FinishedTasks"
        component={FinishedTaskScreen}
        options={{
          tabBarLabel: "Finished",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
