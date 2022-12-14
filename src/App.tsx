import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ModalPayment from "./components/ModalPayment";
import PoliticalList from "./components/political-list/PoliticalList";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./font/TBCContractica-Bold.ttf";
import MakePublic from "./publicpage/MakePublic";
import RatingList from "./pages/RatingList";

function App() {
  const [modal, setModal] = useState(false);
  const [showPoliticalList, setShowPoliticalList] = useState(true);
  const [input, setInput] = useState(0);
  const [money, setMoney] = useState(0);
  const [showChosenCandidat, setChosenCandidat] = useState(false);
  const [balance, setBalance] = useState(1000);

  const [showPublicPage, setShowPublicPage] = useState(false);
  const [supportMoney, setSupportMoney] = useState<number | null>(null);
  const [addCandidat, setAddCandidat] = useState<boolean>(false);

  return (
    <Main>
      {showPublicPage && <MakePublic />}
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
      <Routes>
        <Route path="/ratingList" element={<RatingList />} />
        <Route
          path="/"
          element={
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
              setShowPublicPage={setShowPublicPage}
            />
          }
        />
      </Routes>
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
