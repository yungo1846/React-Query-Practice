import { useState } from "react";
import TodoItem from "../../components/TodoItem";
import useTodo from "../../hooks/useTodo";
import * as S from "./Todo.styles";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const { isLoading, isError, todos, addTodo } = useTodo();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ title: todoInput, isDone: false });
    setTodoInput("");
  };

  if (isLoading) {
    return <S.FetchMessage>로딩중...</S.FetchMessage>;
  }

  if (isError) {
    return <S.FetchMessage>에러가 발생했습니다.</S.FetchMessage>;
  }

  return (
    <>
      <S.Form onSubmit={handleAddTodo}>
        <S.Title>TODO</S.Title>
        <S.TodoInput
          placeholder="내용을 입력해주세요."
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
      </S.Form>
      <S.TodoList>
        {todos?.map((todoInfo) => (
          <TodoItem key={todoInfo.id} todoInfo={todoInfo} />
        ))}
      </S.TodoList>
    </>
  );
};

export default Todo;
