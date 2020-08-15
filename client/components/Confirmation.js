import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, useWindowDimensions } from 'react-native';
import ConfirmationHeader from './ConfirmationHeader';

const App = () => {
  const [text, setText] = useState("");
  
  return (
    <View style={styles.container}>
      <ConfirmationHeader title="Confirmation"/>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={{uri: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/699_36_1440760718.jpg?tr=w-800,h-1066"}}
          />
      </View>
      <Text style={styles.itemName}>Apple</Text>
      <View style={styles.barView}>
        <Text style={styles.amount}>Amount:</Text>
        <Text style={styles.resultHead}>
           Total carbon dioxide emitted{"\n"}(kg):</Text>
      </View>
      <View style={styles.barView}>
        <TextInput
            style={styles.amountInput}
            autoFocus = {true}
            keyboardType="numeric"
            placeholder="Insert number of units"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
        />
        <Text style={styles.result}>{text * 100}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  imageContainer: {
    paddingTop: 20
  },
  barView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  image: {
    width: 135,
    height: 240,
  },
  itemName: {
    paddingTop: 16,
    fontSize: 24,
    textAlign: "center"
  },
  amountView: {
    justifyContent: "center",
  },
  amount: {
    width: "50%",
    fontSize: 16,
    textAlign: "center",
  },
  amountInput: {
    width: "50%",
    fontSize: 16,
    textAlign: "center",
  },
  resultHead: {
    width: "50%",
    fontSize: 16,
    textAlign: "center"
  },
  result: {
    width: "50%",
    fontSize: 16,
    textAlign: "center"
  }
});

export default App;