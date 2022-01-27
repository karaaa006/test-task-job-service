import s from "./Header.module.scss";

import searchIcon from "../../images/icons/search.svg";
import markerIcon from "../../images/icons/marker.svg";
import langIcon from "../../images/icons/language.svg";
import downArrow from "../../images/icons/down-arrow.svg";
import user from "../../images/icons/user.svg";
import { useDispatch } from "react-redux";
import { fetchCandidates } from "../../store/operations/candidatesOperations";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCandidates());
  };
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.topBar}>
          <button className={s.langs}>
            <img src={langIcon} alt="Планета" />
            <span className={s.langName}>RU</span>
            <img src={downArrow} alt="Планета" />
          </button>
          <nav className={`${s.navMobile} ${s.mobile}`}>
            <a href="#" className={`${s.navLink} ${s.active}`}>
              Соискателю
              <img src={downArrow} alt="Планета" />
            </a>
          </nav>
          <nav className={s.navLarge}>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <a href="#" className={s.navLink}>
                  Соискателю
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#" className={`${s.navLink} ${s.active}`}>
                  Работодателю
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#" className={s.navLink}>
                  HR
                </a>
              </li>
            </ul>
          </nav>
          <div className={s.userName}>
            <img
              src={user}
              alt={"Иконка пользователя"}
              className={s.userIcon}
            />
            <span className={s.userText}>Юра Марченко</span>
          </div>
        </div>
        <div className={s.searchBar}>
          <div className={s.inputWrap}>
            <img src={searchIcon} className={s.icon} alt="Лупа" />

            <input
              type="text"
              placeholder="Поиск"
              className={`${s.input} ${s.inputSmall}`}
            />
            <input
              type="text"
              placeholder="На какую должность вы ищете кандидата?"
              className={`${s.input} ${s.inputLarge}`}
            />
          </div>
          <div className={s.inputWrap}>
            <img src={markerIcon} className={s.icon} alt="Маркер" />

            <input type="text" placeholder="Город" className={s.input} />
          </div>
          <button className={s.btn} type="button" onClick={handleClick}>
            Найти кандидата
          </button>
        </div>
      </div>
    </header>
  );
};
