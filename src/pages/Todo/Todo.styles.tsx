import styled from "styled-components";
import { COLOR } from "../../constants/styleConstant";

export const Form = styled.form`
  margin-bottom: 3rem;
`;

export const Title = styled.div`
  text-align: center;
  color: ${COLOR.WHITE};
  font-weight: 700;
  font-size: 4rem;
  margin: 8rem 0 5rem 0;
`;

export const TodoInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${COLOR.WHITE};
  border-bottom: 3px solid ${COLOR.WHITE};
  height: 4rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${COLOR.WHITE};
  }
`;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: disc;
`;
