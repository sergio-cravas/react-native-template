import { get } from "../api";
import { Todo } from "../models/todo";

export const getTodos = async (): Promise<Todo[]> => {
  return get("/todos").then((response) => response.json());
};
