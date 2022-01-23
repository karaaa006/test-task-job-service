import uk from "../images/icons/uk.svg";
import ua from "../images/icons/ua.svg";
import ru from "../images/icons/ru.svg";
import pl from "../images/icons/pl.svg";
import es from "../images/icons/es.svg";
import de from "../images/icons/de.svg";

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
    name: "en",
    count: "603",
    flag: uk,
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
    name: "ru",
    count: "603",
    flag: ru,
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
    name: "ua",
    count: "603",
    flag: ua,
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
    name: "de",
    count: "603",
    flag: de,
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
    name: "pl",
    count: "603",
    flag: pl,
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
    name: "es",
    count: "603",
    flag: es,
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

export { groupWorkType, groupEducation, groupExperience, groupLanguage };
