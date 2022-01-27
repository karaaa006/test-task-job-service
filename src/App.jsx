import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CandidatesList } from "./components/CandidatesList";
import { QueryInfo } from "./components/QueryInfo";
import { Filters } from "./components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandidates } from "./store/operations/candidatesOperations";

function App() {
  const dispatch = useDispatch();
  const [isOpenMobFilters, setIsOpenMobFilters] = useState(false);

  const candidatesCount = useSelector((state) => state.candidates.totalCount);
  const candidates = useSelector((state) => state.candidates.items);

  const handleToggleFilters = () => {
    setIsOpenMobFilters(!isOpenMobFilters);
  };

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <QueryInfo
          candidatesCount={candidatesCount}
          position="продавец консультант"
          toggleFilters={handleToggleFilters}
        />
        <div className="main-content">
          <CandidatesList candidates={candidates} />
          <Filters
            isMobileOpen={isOpenMobFilters}
            toggleFilters={handleToggleFilters}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
