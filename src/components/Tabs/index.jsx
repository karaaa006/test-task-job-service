import s from "./Tabs.module.scss";

export const Tabs = ({ name, options }) => {
  return (
    <div className={s.tabs}>
      {options.map((option, idx) => {
        return (
          <label key={idx} className={s.optionWrap}>
            <input
              type="radio"
              name={name}
              value={option}
              className={s.nativeOption}
              defaultChecked={idx === 0 && true}
            />
            <span className={s.text}>{option}</span>
          </label>
        );
      })}
    </div>
  );
};
