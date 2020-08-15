import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import HistoryHeader from "./HistoryHeader";
import HistoryListItem from "./HistoryListItem";

const History = () => {
  // placeholder code to test function - delete at end
  const newDate = new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const fullDate = month + "-" + day + "-" + year;

  const [items, setItems] = useState([
    { id: 1, text: "Apple", footprint: "478", date: fullDate },
    { id: 2, text: "Banana", footprint: "267", date: fullDate },
    { id: 3, text: "Tomato", footprint: "365", date: fullDate },
    { id: 4, text: "Chicken", footprint: "675", date: fullDate },
  ]);
  // end of placeholder code

  return (
    <View style={styles.container}>
      <HistoryHeader title="History" />
      <FlatList
        data={items}
        renderItem={({ item }) => <HistoryListItem item={item} />}
        keyExtractor={(item, index) => `list-item-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default History;
