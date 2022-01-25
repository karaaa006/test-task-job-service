import { useState } from "react";

import photoIcon from "../../images/icons/photoIcon.svg";
import studentIcon from "../../images/icons/studentIcon.svg";
import closeIcon from "../../images/icons/close.svg";
import {
  groupWorkType,
  groupEducation,
  groupExperience,
  groupLanguage,
} from "../../db/checkboxOptions";

import s from "./Filters.module.scss";
import { CheckboxGroup } from "../CheckboxGroup";
import { CheckboxRound } from "../CheckboxRound";
import { FilterBlock } from "../FilterBlock";
import { Multirange } from "../Multirange";
import { Tabs } from "../Tabs";

export const Filters = () => {
  const [isHiddenFilter, setIsHiddenFilter] = useState(false);

  const handleClickClose = () => {
    setIsHiddenFilter(true);
  };

  return (
    <div className={`${s.filters} ${isHiddenFilter && s.isHidden}`}>
      <button className={s.close} type="button" onClick={handleClickClose}>
        <img src={closeIcon} alt="Иконка закрытия фильтров" />
      </button>
      <h2 className={s.title}>Фильтры</h2>
      <FilterBlock>
        <CheckboxRound
          labelText="Только с фотографией"
          icon={photoIcon}
          name="photo"
          toState
          // onChange={dispatch(toggleCheckbox("photo"))}
        />
      </FilterBlock>
      <FilterBlock title="Возраст">
        <Multirange min={0} max={100} rangeText="лет" />
      </FilterBlock>
      <FilterBlock title="Пол">
        <Tabs name="gender" options={["Любой", "Женщины", "Мужчины"]} />
      </FilterBlock>
      <FilterBlock title="Желаемая зарплата">
        <Multirange min={0} max={100000} rangeText={["грн", "дол", "евр"]} />
        <CheckboxRound labelText="Не показывать без зарплаты" />
      </FilterBlock>
      <FilterBlock title="Опыт работы">
        <CheckboxGroup options={groupExperience} />
        <CheckboxRound labelText="Только студенты" icon={studentIcon} />
      </FilterBlock>
      <FilterBlock title="Владение языками">
        <CheckboxGroup options={groupLanguage} />
      </FilterBlock>
      <FilterBlock title="Тип занятости">
        <CheckboxGroup options={groupWorkType} />
      </FilterBlock>
      <FilterBlock title="Образование">
        <CheckboxGroup options={groupEducation} />
      </FilterBlock>
    </div>
  );
};
