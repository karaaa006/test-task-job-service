import s from "./Checkbox.module.scss";
import arrow from "../../images/icons/down-arrow-blk.svg";
import { useState } from "react";

export const Checkbox = ({ text, count, img, name, subOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { checked } = e.target;

    setIsOpen(checked);
  };

  return (
    <div>
      <label className={s.checkboxWrap}>
        <input
          type="checkbox"
          name={name}
          className={s.nativeCheckbox}
          onChange={subOptions && handleChange}
        />
        <div className={s.customCheckbox}></div>

        {img && <img src={img} alt={`Иконка ${text}`} className={s.img} />}
        <span className={s.text}>{text}</span>

        <span className={s.count}>{count}</span>
        {subOptions && (
          <img
            src={arrow}
            alt="Иконка"
            className={`${s.subOptionsArrow} ${isOpen && s.isOpen}`}
          />
        )}
      </label>
      {subOptions && (
        <div className={`${s.subOptions} ${isOpen && s.isOpen}`}>
          {subOptions.map((option, idx) => {
            return (
              <label key={idx} className={s.optionWrap}>
                <input
                  type="radio"
                  name={`suboption-${name}`}
                  value={option.name}
                  className={s.nativeOption}
                />
                <span className={s.subOptionText}>{option.name}</span>
                <span className={s.subOptionCount}>{option.count}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};
