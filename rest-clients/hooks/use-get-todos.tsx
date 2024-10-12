import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../query-keys";
import { getTodos } from "../services/get-todos";

export const useGetTodos = () => {
  const { data, isLoading, isSuccess, isError, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
  });

  return {
    todos: data,
    isSuccess,
    isError,
    isLoading,
    isFetching,
  };
};
