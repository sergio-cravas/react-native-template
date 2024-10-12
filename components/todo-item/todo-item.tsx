import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Todo } from "@/rest-clients/models/todo";

type TodoItemProps = {
  todo: Todo;
  onComplete: () => void;
};

export const TodoItem = ({ todo, onComplete }: TodoItemProps) => {
  return (
    <TouchableOpacity onPress={onComplete}>
      <View key={todo.id} style={styles.container}>
        {todo.completed ? (
          <FontAwesome name="check-circle" size={24} color="green" />
        ) : (
          <FontAwesome name="circle-thin" size={24} color="gray" />
        )}

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          {todo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    backgroundColor: "white",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },
});
