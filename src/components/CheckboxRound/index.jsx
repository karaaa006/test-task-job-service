import s from "./Checkbox.module.scss";

export const CheckboxRound = ({ labelText, icon, name }) => {
  return (
    <label className={s.checkboxWrap}>
      {icon && (
        <img src={icon} alt={`Иконка ${labelText}`} className={s.icon} />
      )}
      <span className={s.text}>{labelText}</span>
      <input type="checkbox" name={name} className={s.nativeCheckbox} />
      <div className={s.customCheckbox}>
        <div className={s.indicator}></div>
      </div>
    </label>
  );
};
