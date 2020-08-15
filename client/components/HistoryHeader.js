import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const HistoryHeader = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 75,
        padding: 15,
        justifyContent: "center",
        backgroundColor: "#d4d2d1"
    },
    text: {
        color: "#000000",
        fontSize: 23,
        textAlign: "left"
    },
});

export default HistoryHeader;