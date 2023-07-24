import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BASEAPIURL from "../vars";

const FeedScreen = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Fetch completed tasks data from the server
    const fetchCompletedTasks = async () => {
      try {
        const response = await fetch(`${BASEAPIURL}/completed-tasks`);
        const completedTasksData = await response.json();

        if (response.ok) {
          setCompletedTasks(completedTasksData);
        } else {
          console.error(
            "Failed to fetch completed tasks:",
            completedTasksData.message
          );
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchCompletedTasks();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.title}</Text>
      {/* Render additional task details */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Task Feed</Text>
      {completedTasks.length === 0 ? (
        <Text>No completed tasks available</Text>
      ) : (
        <FlatList
          data={completedTasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.taskList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskList: {
    flexGrow: 1,
    width: "100%",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});

export default FeedScreen;
