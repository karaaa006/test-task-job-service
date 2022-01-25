import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/reducers/filters";
import s from "./Checkbox.module.scss";

export const CheckboxRound = ({ labelText, icon, name, toState }) => {
  const dispatch = useDispatch();
  const chackboxValue = useSelector((state) => state.filters[name]);

  const handleChange = () => {
    console.log(toState, toggleCheckbox(name));
    toState && dispatch(toggleCheckbox(name));
  };

  return (
    <label className={s.checkboxWrap}>
      {icon && (
        <img src={icon} alt={`Иконка ${labelText}`} className={s.icon} />
      )}
      <span className={s.text}>{labelText}</span>
      <input
        type="checkbox"
        name={name}
        className={s.nativeCheckbox}
        onChange={handleChange}
        value={chackboxValue}
      />
      <div className={s.customCheckbox}>
        <div className={s.indicator}></div>
      </div>
    </label>
  );
};
