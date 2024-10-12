import { SafeAreaView, VirtualizedList, StyleSheet, Text } from "react-native";

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

      <VirtualizedList
        data={todos || []}
        style={styles.list}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data?.length}
        keyExtractor={(item: Todo) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem todo={item} onComplete={() => handleOnCompleteTodo(item)} />
        )}
      />
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
    marginBottom: 32,
  },
  list: {
    flex: 1,

    marginBottom: 40,
    paddingHorizontal: 16,
  },
});
