import styled from "styled-components";
import { COLOR } from "../constants/styleConstant";

export const TodoItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 92%;
  background-color: transparent;
  border: none;
  color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.WHITE};
  font-size: 1.4rem;
  padding: 0.5rem 0.2rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${COLOR.WHITE};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  margin-right: 1rem;
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
`;

export const Title = styled.label<{ isDone: boolean }>`
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  ${({ isDone }) => (isDone ? "text-decoration: line-through" : "")};
`;

export const Button = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.7rem;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReturnButton = styled(Button)`
  background-image: url("assets/return.png");
  background-size: cover;
`;

export const EditButton = styled(Button)`
  background-image: url("assets/edit.svg");
  background-size: cover;
`;

export const TrashCanButton = styled(Button)`
  background-image: url("assets/trash-can.svg");
  background-size: cover;
`;
