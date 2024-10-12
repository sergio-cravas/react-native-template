import { get } from "../api";
import { Todo } from "../models/todo";
import { QUERY_KEYS } from "../query-keys";

export const getTodos = async (): Promise<Todo[]> => {
  return get(`/${QUERY_KEYS.TODOS}`).then((response) => response.json());
};
