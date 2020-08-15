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
    const photo = await ref.current.takePictureAsync();
    console.debug(photo);
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
          maxHeight: "100%",
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
                flex: 0.1,
                alignSelf: "flex-end",
                alignItems: "center",
              }}
              onPress={() => {
                setDirection(
                  direction === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: "flex-end",
                alignItems: "center",
              }}
              onPress={takePhoto}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                Take Photo
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
