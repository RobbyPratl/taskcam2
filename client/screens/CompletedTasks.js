import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BASEAPIURL from "../vars";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Fetch completed tasks data from the API
    fetchCompletedTasks();
  }, []);

  const fetchCompletedTasks = async () => {
    try {
      const response = await fetch(`${BASEAPIURL}/completed-tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const completedTasksData = await response.json();
        setCompletedTasks(completedTasksData);
      } else {
        console.error("Failed to fetch completed tasks data");
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching completed tasks data:",
        error
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.taskName}</Text>
      <Text>{item.taskDescription}</Text>
      <Text>{item.completedDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      {completedTasks.length > 0 ? (
        <FlatList
          data={completedTasks}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text>No completed tasks available</Text>
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
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
});

export default CompletedTasks;
