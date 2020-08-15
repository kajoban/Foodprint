import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Content } from "native-base";
import Swiper from "react-native-swiper";
import Camera from "./components/Camera";
import History from "./components/History";

export default function App() {
  const [history, setHistory] = useState([]);
  return (
    <Container>
      <Content>
        <Swiper loop={false} index={0} showsPagination={false}>
          <View style={{ flex: 1 }}>
            <Camera />
          </View>
          <View style={styles.slideDefault}>
            <History />
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
