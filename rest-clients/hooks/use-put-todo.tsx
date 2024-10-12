import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Todo } from "../models/todo";
import { QUERY_KEYS } from "../query-keys";
import { putTodo } from "../services/put-todo";

export const usePutTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError, isPending } = useMutation({
    mutationFn: putTodo,
    onSuccess: (newTodo: Todo) => {
      queryClient.setQueryData([QUERY_KEYS.TODOS], (prev: Todo[]) => {
        const next = [...prev];
        const newTodoIndex = next.findIndex((todo) => todo.id === newTodo.id);

        next[newTodoIndex] = newTodo;

        return [...next];
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { isSuccess, isError, isPending, editTodo: mutate };
};
