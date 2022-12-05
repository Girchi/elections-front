import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ModalPayment from "./components/ModalPayment";
import PoliticalList from "./components/political-list/PoliticalList";
import "./font/TBCContractica-Bold.ttf"

function App() {
  const [modal, setModal] = useState(false);

  return (
    <Main>

      {modal && <ModalPayment setModal={setModal} />}
      <Header />
      <PoliticalList setModal={setModal} />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
 
`