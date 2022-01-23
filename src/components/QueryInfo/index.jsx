import filtersIcon from "../../images/icons/filtersIcon.svg";
import s from "./QueryInfo.module.scss";

export const QueryInfo = ({ candidatesCount, position }) => {
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
          за все время
        </button>

        <button type="button" className={s.openFiltersBtn}>
          <img src={filtersIcon} alt="Иконка фильтров" />
        </button>
      </div>
    </div>
  );
};
