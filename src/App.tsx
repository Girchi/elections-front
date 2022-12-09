import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ModalPayment from "./components/ModalPayment";
import PoliticalList from "./components/political-list/PoliticalList";

import "./font/TBCContractica-Bold.ttf";
function App() {
  const [modal, setModal] = useState(false);
  const [showPoliticalList, setShowPoliticalList] = useState(true);
  const [input, setInput] = useState(0);
  const [money, setMoney] = useState(0);
  const [showChosenCandidat, setChosenCandidat] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [supportMoney, setSupportMoney] = useState<number|null>(null);
  const [addCandidat, setAddCandidat] = useState <boolean> (false)

  return (
    <Main>
      {modal && (
        <ModalPayment
          setModal={setModal}
          setShowPoliticalList={setShowPoliticalList}
          input={input}
          setInput={setInput}
          money={money}
          setMoney={setMoney}
          balance={balance}
          setBalance={setBalance}
        />
      )}
      <Header />
      <PoliticalList
        setModal={setModal}
        showPoliticalList={showPoliticalList}
        input={input}
        setInput={setInput}
        showChosenCandidat={showChosenCandidat}
        setChosenCandidat={setChosenCandidat}
        money={money}
        setMoney={setMoney}
        supportMoney={supportMoney}
        setSupportMoney={setSupportMoney}
        addCandidat={addCandidat}
        setAddCandidat={setAddCandidat}
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
