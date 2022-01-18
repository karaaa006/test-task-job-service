import s from "./CandidateCard.module.scss";
import likeIcon from "../../images/icons/heart.svg";
import moreIcon from "../../images/icons/more.svg";
import { useState } from "react";

export const CandidateCard = ({
  name = "Инкогнито",
  photo,
  position,
  years,
  experience,
  city,
}) => {
  const [isHiddenPopup, setIsHiddenPopup] = useState(true);

  const handleClickMore = () => {
    setIsHiddenPopup(!isHiddenPopup);
  };

  return (
    <article className={s.CandidateCard}>
      <div className={s.cardHeader}>
        {photo && <img src={photo} alt={name} className={s.photo} />}

        <div>
          <p className={s.position}>{position}</p>
          <p className={s.name}>{`${
            name === "" ? "Инкогнито" : name
          }, ${years}`}</p>
          <p className={s.based}>{city}</p>
        </div>
      </div>
      <ul className={s.exp}>
        {experience.map(({ position, workDistance }, idx) => {
          return (
            <li className={s.expItem} key={idx}>
              {`${position} - ${workDistance}`}
            </li>
          );
        })}
      </ul>
      <p className={s.status}>Онлайн</p>
      <div className={s.cardBottom}>
        <p className={s.lastUpdate}>Обновлено 9 минут назад</p>
        <div className={s.btnsCard}>
          <button className={s.btnCard}>
            <img src={likeIcon} alt="Heart icon" />
          </button>
          <button className={s.btnCard} onClick={handleClickMore}>
            <img src={moreIcon} alt="More icon" />
          </button>
          <div className={`${s.morePopup} ${isHiddenPopup && s.isHidden}`}>
            <ul className={s.moreList}>
              <li className={s.moreItem}>
                <button className={s.moreBtn}>Пожаловаться</button>
              </li>
              <li className={s.moreItem}>
                <button className={s.moreBtn}>Скрыть кандидата</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
