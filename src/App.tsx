import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ModalPayment from "./components/ModalPayment";
import PoliticalList from "./components/political-list/PoliticalList";
import "./font/TBCContractica-Bold.ttf";

function App() {
  const [modal, setModal] = useState(false);
  const [showPoliticalList, setShowPoliticalList] = useState(true);
  const [input, setInput] = useState<number | string>("");
  const [showChosedCandidat, setChosedCandidat] = useState(false);

  return (
    <Main>
      {modal && (
        <ModalPayment
          setModal={setModal}
          setShowPoliticalList={setShowPoliticalList}
          input={input}
          setInput={setInput}
        />
      )}
      <Header />
      <PoliticalList
        setModal={setModal}
        showPoliticalList={showPoliticalList}
        input={input}
        setInput={setInput}
        showChosedCandidat={showChosedCandidat}
        setChosedCandidat={setChosedCandidat}
      />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
`;
