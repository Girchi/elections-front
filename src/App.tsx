import styled from "styled-components";
import Header from "./components/Header";
import PoliticalList from "./components/political-list/PoliticalList";
import "./font/TBCContractica-Bold.ttf"

function App() {
  return (
    <Main>
      <Header />
      <PoliticalList/>
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`