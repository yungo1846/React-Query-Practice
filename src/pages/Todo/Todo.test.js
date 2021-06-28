import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Todo from "./Todo";
import useTodo from "../../hooks/useTodo";

jest.mock("react-query");
jest.mock("../../hooks/useTodo");

describe("Todo component", () => {
  const addTodo = jest.fn();
  it("fetch loading", () => {
    useTodo.mockImplementation(() => ({
      isLoading: true,
      isError: false,
      todos: [],
      addTodo,
    }));
    const { container } = render(<Todo />);
    expect(container).toHaveTextContent("로딩중...");
  });

  it("fetch success", () => {
    useTodo.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      todos: [{ id: 1, title: "테스트 코드 작성", isDone: false }],
      addTodo,
    }));
    const { container } = render(<Todo />);
    expect(container).toHaveTextContent("테스트 코드 작성");
  });

  it("fetch failure", () => {
    useTodo.mockImplementation(() => ({
      isLoading: false,
      isError: true,
      todos: [],
      addTodo,
    }));
    const { container } = render(<Todo />);
    expect(container).toHaveTextContent("에러가 발생했습니다.");
  });
});
