import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HistoryListItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemDetailsView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Text style={styles.listItemDate}>{item.date}</Text>
      </View>
      <View style={styles.listItemFootprintView}>
        <Text style={styles.listItemFootprint}>{item.footprint}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemDetailsView: {
    width: "75%",
  },
  listItemFootprintView: {
    width: "25%",
  },
  listItemText: {
    fontSize: 18,
  },
  listItemDate: {
    fontSize: 12,
  },
  listItemFootprint: {
    fontSize: 30,
    textAlign: "right",
  },
});

export default HistoryListItem;
