import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CompletedTaskItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: task.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
    color: "gray",
  },
});

export default CompletedTaskItem;
