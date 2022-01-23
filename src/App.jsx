import { useEffect, useState } from "react";
import { getCandidates } from "./api/fetchData";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CandidatesList } from "./components/CandidatesList";
import { QueryInfo } from "./components/QueryInfo";
import { Filters } from "./components/Filters";

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCandidates();
      const fetchedCandidates = data.results;

      setCandidates(fetchedCandidates);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <QueryInfo candidatesCount="451 642" position="продавец консультант" />
        <div className="main-content">
          <CandidatesList candidates={candidates} />
          <Filters />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
// 1. Иконки переделать на псевоэлементы
// 2.
