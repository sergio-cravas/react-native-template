import { put } from "../api";
import { Todo } from "../models/todo";
import { QUERY_KEYS } from "../query-keys";

export const putTodo = async ({
  todoId,
  todo,
}: {
  todoId: number;
  todo: Partial<Todo>;
}): Promise<Todo> => {
  const body = JSON.stringify(todo);

  return put(`/${QUERY_KEYS.TODOS}/${todoId}`, {
    body,
  }).then((response) => response.json());
};
