import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BASEAPIURL from "../vars";
import { useSelector } from "react-redux";
import AddTaskModal from "./AddTaskModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Fetch tasks data from the server
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${BASEAPIURL}/tasks`);
        const tasksData = await response.json();

        if (response.ok) {
          setTasks(tasksData.tasks);
        } else {
          console.error("Failed to fetch tasks:", tasksData.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = (newTask) => {
    // Add the new task to the list
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.title}</Text>
      {/* Render additional task details */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      {tasks.length === 0 ? (
        <Text>No tasks available</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.taskList}
        />
      )}
      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddTask={handleAddTask}
      />
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
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
