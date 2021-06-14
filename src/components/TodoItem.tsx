import { TodoInfo } from "../types/todo";
import * as S from "./TodoItem.styles";

interface Props {
  todoInfo: TodoInfo;
}

const TodoItem = ({ todoInfo }: Props) => {
  return (
    <S.TodoItemContainer key={todoInfo.id}>
      <S.Title>{todoInfo.title}</S.Title>
    </S.TodoItemContainer>
  );
};

export default TodoItem;
