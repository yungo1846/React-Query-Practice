import * as S from "./App.styles";
import GlobalStyle from "./global.styles";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.PageContainer>
        <Todo />
      </S.PageContainer>
    </>
  );
}

export default App;
