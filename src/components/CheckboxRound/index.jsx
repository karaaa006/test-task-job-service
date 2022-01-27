import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter, toggleCheckbox } from "../../store/reducers/filters";
import s from "./Checkbox.module.scss";

export const CheckboxRound = ({ labelText, icon, name, toState }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (toState) {
      dispatch(addFilter({ name, value }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (toState) dispatch(toggleCheckbox({ name, value }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = () => {
    setValue(!value);
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
        value={value}
      />
      <div className={s.customCheckbox}>
        <div className={s.indicator}></div>
      </div>
    </label>
  );
};
