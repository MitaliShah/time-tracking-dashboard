import "./App.css";
import UserProfile from "../src/components/UserProfile";
import GlobalStyles from "../src/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <UserProfile />
      <GlobalStyles />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  min-height: 100vh;
  max-width: 23.438rem;
  font-size: 18px;
`;
