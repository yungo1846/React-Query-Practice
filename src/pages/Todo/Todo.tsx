import axios from "axios";
import { useQuery } from "react-query";
import TodoItem from "../../components/TodoItem";
import { URL } from "../../constants/URL";
import { TodoInfo } from "../../types/todo";
import * as S from "./Todo.styles";

const Todo = () => {
  const {
    isLoading,
    isError,
    data: todos,
  } = useQuery<TodoInfo[], Error>("todos", () =>
    axios.get(URL.TODOS).then((response) => response.data)
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  console.log(todos);

  return (
    <S.Form>
      <S.Title></S.Title>
      <S.TodoInput placeholder="내용을 입력해주세요." />
      <S.TodoContainer>
        {todos?.map((todoInfo) => (
          <TodoItem todoInfo={todoInfo} />
        ))}
      </S.TodoContainer>
    </S.Form>
  );
};

export default Todo;
