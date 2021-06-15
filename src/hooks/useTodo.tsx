import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { QUERY_KEY } from "../constants/queryKey";
import { URL } from "../constants/URL";
import { TodoAddRequest, TodoCheckRequest, TodoEditRequest, TodoInfo } from "../types/todo";

const useTodo = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data: todos } = useQuery<TodoInfo[], Error>(QUERY_KEY.TODOS, () =>
    axios.get(URL.TODOS).then((response) => response.data?.sort((a: TodoInfo, b: TodoInfo) => b.id - a.id))
  );

  const addMutation = useMutation<void, unknown, TodoAddRequest, unknown>(
    (data) => axios.post(URL.TODOS, data).then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY.TODOS);
      },
    }
  );

  const deleteMutation = useMutation<unknown, unknown, TodoInfo["id"], unknown>(
    (id) => axios.delete(`${URL.TODOS}/${id}`).then((response) => response.data),
    {
      onSuccess: (data, id) => {
        queryClient.setQueryData<TodoInfo[] | undefined>(QUERY_KEY.TODOS, (todos) =>
          todos?.filter((todo) => todo.id !== id)
        );
      },
    }
  );

  const editMutation = useMutation<unknown, unknown, TodoEditRequest, unknown>(
    ({ id, title }) => axios.put(`${URL.TODOS}/${id}`, { title }).then((response) => response.data),
    {
      onSuccess: (data, { id, title }) => {
        queryClient.setQueryData<TodoInfo[] | undefined>(
          QUERY_KEY.TODOS,
          (todos) =>
            todos?.map((todo) => {
              if (todo.id === id) {
                todo.title = title;
              }
              return todo;
            }) as TodoInfo[]
        );
      },
    }
  );

  const checkMutation = useMutation<unknown, unknown, TodoCheckRequest, unknown>(
    ({ id, isDone }) => axios.patch(`${URL.TODOS}/${id}`, { isDone }).then((response) => response.data),
    {
      onSuccess: (data, { id, isDone }) => {
        queryClient.setQueryData<TodoInfo[] | undefined>(
          QUERY_KEY.TODOS,
          (todos) =>
            todos?.map((todo) => {
              if (todo.id === id) {
                todo.isDone = isDone;
              }
              return todo;
            }) as TodoInfo[]
        );
      },
    }
  );

  const addTodo = (todo: TodoAddRequest) => {
    addMutation.mutate(todo);
  };

  const deleteTodo = (id: TodoInfo["id"]) => {
    deleteMutation.mutate(id);
  };

  const editTodo = (todo: TodoEditRequest) => {
    editMutation.mutate(todo);
  };

  const checkTodo = (todo: TodoCheckRequest) => {
    checkMutation.mutate(todo);
  };

  return { isLoading, isError, todos, addTodo, deleteTodo, editTodo, checkTodo };
};

export default useTodo;
