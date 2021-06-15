import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { QUERY_KEY } from "../constants/queryKey";
import { URL } from "../constants/URL";
import { TodoAddRequest, TodoInfo } from "../types/todo";

const useTodo = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data: todos } = useQuery<TodoInfo[], Error>(QUERY_KEY.TODOS, () =>
    axios.get(URL.TODOS).then((response) => response.data)
  );

  const addMutation = useMutation<void, unknown, TodoAddRequest, unknown>(
    (data) => axios.post(URL.TODOS, data).then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY.TODOS);
      },
    }
  );

  const addTodo = (todo: TodoAddRequest) => {
    addMutation.mutate(todo);
  };

  return { isLoading, isError, todos, addTodo };
};

export default useTodo;
