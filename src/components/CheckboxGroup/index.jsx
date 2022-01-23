import s from "./CheckboxGroup.module.scss";

import { Checkbox } from "../Checkbox";

export const CheckboxGroup = ({ options }) => {
  console.log(options);
  return (
    <ul className={s.checkboxGroup}>
      {options.map(({ text, count, lavel }, idx) => {
        return (
          <li className={s.checkboxGroupItem} key={idx}>
            <Checkbox text={text} count={count} subOptions={lavel} />
          </li>
        );
      })}
    </ul>
  );
};
