import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import i18n from "@/shared/localization";
import { Todo } from "@/rest-clients/models/todo";
import { TodoItem } from "@/components/todo-item/todo-item";
import { useGetTodos } from "@/rest-clients/hooks/use-get-todos";
import { usePutTodo } from "@/rest-clients/hooks/use-put-todo";

export default function Index() {
  const { todos } = useGetTodos();
  const { editTodo } = usePutTodo();

  const handleOnCompleteTodo = (todo: Todo) => {
    const newTodo = { ...todo, completed: !todo.completed };

    editTodo({ todoId: todo.id, todo: newTodo });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>

      <Text style={styles.message}>{i18n.t("home.message")}</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={() => handleOnCompleteTodo(todo)}
          />
        ))}
      </ScrollView>
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
    marginBottom: 12,
    marginTop: 24,
  },
  message: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 24,
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,

    maxHeight: 400,
  },
  todoContainer: {
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
  todoText: {
    fontSize: 18,
    color: "#333",
  },
});
