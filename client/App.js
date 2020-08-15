import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Content } from "native-base";
import Swiper from "react-native-swiper";

export default function App() {
  return (
    <Container>
      <Content>
        <Swiper loop={false} index={0} showsPagination={false}>
          <View style={styles.slideDefault}>
            <Text style={styles.text}>Camera</Text>
          </View>
          <View style={styles.slideDefault}>
            <Text style={styles.text}>Table</Text>
          </View>
        </Swiper>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
