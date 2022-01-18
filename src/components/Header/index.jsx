import s from "./Header.module.scss";

import searchIcon from "../../images/icons/search.svg";
import markerIcon from "../../images/icons/marker.svg";
import langIcon from "../../images/icons/language.svg";
import downArrow from "../../images/icons/down-arrow.svg";
import user from "../../images/icons/user.svg";

export const Header = (params) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.topBar}>
          <div className={s.wrap}>
            <div className={s.langs}>
              <img src={langIcon} alt="Планета" />
              <span className={s.langName}>RU</span>
              <img src={downArrow} alt="Планета" />
            </div>
            <nav className={s.nav}>
              <a href="#" className={`${s.navLink} ${s.active}`}>
                Соискателю
                <img src={downArrow} alt="Планета" />
              </a>
            </nav>
          </div>
          <div className={s.userName}>
            <img src={user} alt={"Иконка пользователя"} />
            <span>Юра Марченко</span>
          </div>
        </div>
        <div className="searchBar">
          <div className={s.inputWrap}>
            <img src={searchIcon} className={s.icon} alt="Лупа" />

            <input type="text" placeholder="Поиск" className={s.input} />
          </div>
          <div className={s.inputWrap}>
            <img src={markerIcon} className={s.icon} alt="Маркер" />

            <input type="text" placeholder="Город" className={s.input} />
          </div>
          <button className={s.btn}>Найти кандидата</button>
        </div>
      </div>
    </header>
  );
};
