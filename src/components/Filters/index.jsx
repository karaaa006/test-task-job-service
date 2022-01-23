import { CheckboxRound } from "../CheckboxRound";
import photoIcon from "../../images/icons/photoIcon.svg";
import studentIcon from "../../images/icons/studentIcon.svg";
import closeIcon from "../../images/icons/close.svg";
import uk from "../../images/icons/ukFlag.svg";
import s from "./Filters.module.scss";
import { CheckboxGroup } from "../CheckboxGroup";
import { FilterBlock } from "../FilterBlock";
import { useState } from "react";
import { Multirange } from "../Multirange";
import { Tabs } from "../Tabs";

const groupWorkType = [
  { text: "Полная занятость", count: "34567" },
  { text: "Неполная занятость", count: "876" },
  { text: "Удаленная работа", count: "1234" },
];
const groupEducation = [
  { text: "Высшее", count: "34567" },
  { text: "Неоконченное высшее", count: "876" },
  { text: "Средне-специальное", count: "1234" },
  { text: "Среднее", count: "8764" },
];
const groupExperience = [
  { text: "Без опыта", count: "603" },
  { text: "До 1 года", count: "603" },
  { text: "От 1 до 2 лет", count: "603" },
  { text: "От 2 до 5 лет", count: "603" },
  { text: "От 5 до 10 лет", count: "603" },
];
const groupLanguage = [
  {
    text: "Английский",
    count: "603",
    flag: { uk },
    lavel: [
      { name: "(А1) – начальный", count: "73" },
      { name: "(А2) – ниже среднего", count: "73" },
      { name: "(В1) – средний", count: "73" },
      { name: "(В2) – выше среднего", count: "73" },
      { name: "(C1) – продвинутый", count: "73" },
      { name: "(C2) – профессиональный уровень владения", count: "73" },
    ],
  },
  {
    text: "Русский",
    count: "603",
    flag: { uk },
    lavel: [
      { name: "(А1) – начальный", count: "73" },
      { name: "(А2) – ниже среднего", count: "73" },
      { name: "(В1) – средний", count: "73" },
      { name: "(В2) – выше среднего", count: "73" },
      { name: "(C1) – продвинутый", count: "73" },
      { name: "(C2) – профессиональный уровень владения", count: "73" },
    ],
  },
  {
    text: "Украинский",
    count: "603",
    flag: { uk },
    lavel: [
      { name: "(А1) – начальный", count: "73" },
      { name: "(А2) – ниже среднего", count: "73" },
      { name: "(В1) – средний", count: "73" },
      { name: "(В2) – выше среднего", count: "73" },
      { name: "(C1) – продвинутый", count: "73" },
      { name: "(C2) – профессиональный уровень владения", count: "73" },
    ],
  },
  {
    text: "Немецкий",
    count: "603",
    flag: { uk },
    lavel: [
      { name: "(А1) – начальный", count: "73" },
      { name: "(А2) – ниже среднего", count: "73" },
      { name: "(В1) – средний", count: "73" },
      { name: "(В2) – выше среднего", count: "73" },
      { name: "(C1) – продвинутый", count: "73" },
      { name: "(C2) – профессиональный уровень владения", count: "73" },
    ],
  },
  {
    text: "Польский",
    count: "603",
    flag: { uk },
    lavel: [
      { name: "(А1) – начальный", count: "73" },
      { name: "(А2) – ниже среднего", count: "73" },
      { name: "(В1) – средний", count: "73" },
      { name: "(В2) – выше среднего", count: "73" },
      { name: "(C1) – продвинутый", count: "73" },
      { name: "(C2) – профессиональный уровень владения", count: "73" },
    ],
  },
  {
    text: "Испанский",
    count: "603",
    flag: { uk },
    lavel: [
      { name: "(А1) – начальный", count: "73" },
      { name: "(А2) – ниже среднего", count: "73" },
      { name: "(В1) – средний", count: "73" },
      { name: "(В2) – выше среднего", count: "73" },
      { name: "(C1) – продвинутый", count: "73" },
      { name: "(C2) – профессиональный уровень владения", count: "73" },
    ],
  },
];

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
        <CheckboxRound labelText="Только с фотографией" icon={photoIcon} />
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
