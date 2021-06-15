import { useState } from "react";
import TodoItem from "../../components/TodoItem";
import useTodo from "../../hooks/useTodo";
import * as S from "./Todo.styles";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const { isLoading, isError, todos, addTodo } = useTodo();

  // const mutation = useMutation<TodoAddRequest, unknown, TodoAddRequest, unknown>(
  //   (data) => axios.post(URL.TODOS, data).then((response) => response.data),
  //   {
  //     onSuccess: (data) => {
  //       queryClient.setQueryData(QUERY_KEY.TODOS, todos?.concat(data));
  //     },
  //   }
  // );

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ title: todoInput, isDone: false });
    setTodoInput("");
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  console.log(todos);

  return (
    <S.Form onSubmit={handleAddTodo}>
      <S.Title>TODO</S.Title>
      <S.TodoInput
        placeholder="내용을 입력해주세요."
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
      />
      <S.TodoList>
        {todos?.map((todoInfo) => (
          <TodoItem todoInfo={todoInfo} />
        ))}
      </S.TodoList>
    </S.Form>
  );
};

export default Todo;
