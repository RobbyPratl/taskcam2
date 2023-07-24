import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BASEAPIURL from "../vars";

const FinishedTaskScreen = () => {
  const [finishedTasks, setFinishedTasks] = useState([]);

  useEffect(() => {
    // Fetch finished tasks data from the server
    const fetchFinishedTasks = async () => {
      try {
        const response = await fetch(`${BASEAPIURL}/tasks/finished`);
        const finishedTasksData = await response.json();

        if (response.ok) {
          setFinishedTasks(finishedTasksData);
        } else {
          console.error(
            "Failed to fetch finished tasks:",
            finishedTasksData.message
          );
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchFinishedTasks();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.title}</Text>
      {/* Render additional task details */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finished Task Feed</Text>
      {finishedTasks.length === 0 ? (
        <Text>No finished tasks available</Text>
      ) : (
        <FlatList
          data={finishedTasks}
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

export default FinishedTaskScreen;
