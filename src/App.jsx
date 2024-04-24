import "./App.css";
import { useState } from "react";
import GlobalStyles from "../src/GlobalStyles";
import DataViewSwitcher from "./components/DataViewSwitcher";
import data from ".././data.json";
import Cards from "./components/Cards";
import { DEFAULT_VIEW } from "./constants";
import styled from "styled-components";

function App() {
  const [selectedView, setSelectedView] = useState(DEFAULT_VIEW);

  return (
    <Main>
      <DataViewSwitcher setSelectedView={setSelectedView} />
      <Cards data={data} selectedView={selectedView} />
      <GlobalStyles />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 24px;
  max-width: min-content;
  max-width: 23.438rem;
  font-size: 18px;
  margin: 80px 24px;

  @media (min-width: 1440px) {
    max-width: 1440px;
    display: grid;
    grid-template-columns: 255px 1fr;
  }
`;
