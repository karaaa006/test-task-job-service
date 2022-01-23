import s from "./Checkbox.module.scss";
import arrow from "../../images/icons/down-arrow-blk.svg";

export const Checkbox = ({ text, count, img, name, subOptions }) => {
  return (
    <label className={s.checkboxWrap}>
      <input type="checkbox" name={name} className={s.nativeCheckbox} />
      <div className={s.customCheckbox}></div>

      {img && <img src={img} alt={`Иконка ${text}`} className={s.img} />}
      <span className={s.text}>{text}</span>

      <span className={s.count}>{count}</span>
      {subOptions && <img src={arrow} />}
      {subOptions && subOptions.map((option, idx) => {return <label key={idx} className={s.optionWrap}>
            <input
              type="radio"
              name={`lavel-${text}`}
              value={option}
              className={s.nativeOption}
            />
            <span className={s.text}>{option.name}</span>
          </label>})}
    </label>
  );
};
