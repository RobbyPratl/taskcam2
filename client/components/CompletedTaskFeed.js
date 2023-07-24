import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CompletedTaskItem from "../components/CompletedTaskItem";

const CompletedTaskFeed = ({ completedTasks }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CompletedTaskItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CompletedTaskFeed;
