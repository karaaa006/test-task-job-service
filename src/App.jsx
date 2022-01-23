import { useEffect, useState } from "react";
import { getCandidates } from "./api/fetchData";
import "./App.css";
import { CandidateCard } from "./components/CandidateCard";
import { Header } from "./components/Header";
import { formatDistanceStrict, parse } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import { getDistanceDate, getDistanceDateToNow } from "./utils/dateUtils";
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
        <CandidatesList candidates={candidates} />
        <Filters />
      </div>
      <Footer />
    </div>
  );
}
export default App;
// 1. Иконки переделать на псевоэлементы
// 2.
