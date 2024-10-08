import { useState } from "react";
import { SafeAreaView, Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Hello world 👋🏻</Text>

      <View style={styles.content}>
        <Button
          title="Click me!"
          color="black"
          onPress={() => setCount((prev) => prev + 1)}
        />

        <Text style={styles.text}>Count {count}</Text>
      </View>
    </SafeAreaView>
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
  content: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
