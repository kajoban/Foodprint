import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ConfirmationHeader = ({title}) => {
    return (
        <View style={styles.header}>
            <View style={styles.leftIconView}>
                <Ionicons
                    name="md-close-circle"
                    size={50}
                    color="red"
                />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.rightIconView}>
                <Ionicons
                name="md-checkmark-circle"
                size={50}
                color="green"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        height: 75,
        paddingTop: 20,
        justifyContent: "center",
        backgroundColor: "#d4d2d1",
    },
    leftIconView: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center"
    },
    textView: {
        width: "70%",
        justifyContent: "center"
    },
    text: {
        color: "#000000",
        fontSize: 23,
        textAlign: "center"
    },
    rightIconView: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ConfirmationHeader;