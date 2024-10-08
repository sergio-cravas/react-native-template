import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello world 👋🏻</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount((prev) => prev + 1)}
      >
        Click me!
      </TouchableOpacity>

      <Text style={styles.text}>Count {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 24,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
