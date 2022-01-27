import filtersIcon from "../../images/icons/filtersIcon.svg";
import arrowBlue from "../../images/icons/arrowBlue.svg";
import s from "./QueryInfo.module.scss";

export const QueryInfo = ({ candidatesCount, position, toggleFilters }) => {
  return (
    <div className={s.queryInfo}>
      <h1 className={s.queryResult}>
        Мы подобрали
        <span className={s.candidatesCount}> {candidatesCount} </span>
        резюме
      </h1>
      <p className={s.positionText}>Резюме {position} во Всей Украине</p>
      <div className={s.filter}>
        <button type="button" className={s.selectFilter}>
          <span className={s.selectText}>за все время</span>{" "}
          <img src={arrowBlue} alt="Иконка стрелки вниз" />
        </button>

        <button
          type="button"
          className={s.openFiltersBtn}
          onClick={toggleFilters}
        >
          <img src={filtersIcon} alt="Иконка фильтров" />
        </button>
      </div>
    </div>
  );
};
