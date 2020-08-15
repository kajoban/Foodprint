import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

export default function App() {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [direction, setDirection] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);

  useEffect(() => {
    async function getCameraPermissions() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === "granted");
    }
    getCameraPermissions();
  }, []);

  const takePhoto = async () => {
    const snap = await ref.current.takePictureAsync();
    console.log(snap);
    const body = new FormData();
    body.append("file", "@" + snap.uri);

    fetch("http://192.168.2.21:5000/", {
      body,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => response.text())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        alert(error);
      });
    console.log("snapped!");
  };

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Camera ref={ref} style={{ flex: 1 }} type={direction}>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: "flex-end",
                alignItems: "center",
              }}
              onPress={takePhoto}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 1000,
                  backgroundColor: "#fff",
                  margin: 30,
                }}
              ></View>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
