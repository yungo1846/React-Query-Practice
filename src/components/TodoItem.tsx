import { useState } from "react";
import useTodo from "../hooks/useTodo";
import { TodoInfo } from "../types/todo";
import * as S from "./TodoItem.styles";

interface Props {
  todoInfo: TodoInfo;
}

const TodoItem = ({ todoInfo }: Props) => {
  const [isEditMode, setEditMode] = useState(false);
  const [editedInput, setEditedInput] = useState(todoInfo.title);
  const { deleteTodo, editTodo, checkTodo } = useTodo();

  const handleEditTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (editedInput.length === 0) return;
    editTodo({ id: todoInfo.id, title: editedInput });
    setEditMode(false);
  };

  const handleCheckTodo = () => {
    checkTodo({ id: todoInfo.id, isDone: !todoInfo.isDone });
  };

  return (
    <S.TodoItemContainer>
      {isEditMode ? (
        <S.Form onSubmit={handleEditTodo}>
          <S.Input value={editedInput} onChange={(e) => setEditedInput(e.target.value)} />
          <S.ButtonWrapper>
            <S.ReturnButton type="button" onClick={() => setEditMode(false)} />
          </S.ButtonWrapper>
        </S.Form>
      ) : (
        <>
          <S.TitleWrapper>
            <S.CheckBox
              id={`checkbox-${todoInfo.id}`}
              type="checkbox"
              defaultChecked={todoInfo.isDone}
              onClick={handleCheckTodo}
            />
            <S.Title htmlFor={`checkbox-${todoInfo.id}`} isDone={todoInfo.isDone}>
              {todoInfo.title}
            </S.Title>
          </S.TitleWrapper>
          <S.ButtonWrapper>
            <S.EditButton type="button" onClick={() => setEditMode(true)} />
            <S.TrashCanButton
              type="button"
              onClick={() => {
                deleteTodo(todoInfo.id);
              }}
            />
          </S.ButtonWrapper>
        </>
      )}
    </S.TodoItemContainer>
  );
};

export default TodoItem;
