import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import FeedScreen from "./FeedScreen";

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
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FinishedTasks"
        component={FinishedTasksScreen}
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
