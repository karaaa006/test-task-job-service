import Slider from "@mui/material/Slider";
import { useState } from "react";
import s from "./Multirange.module.scss";
import arrow from "../../images/icons/down-arrow-blk.svg";

export const Multirange = ({ min, max, rangeText }) => {
  const [value, setValue] = useState([min, max]);
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleChange = (event, newValue) => {
    const [min, max] = newValue;
    setMinValue(min);
    setMaxValue(max);
  };

  const handleChangInput = (e) => {
    const { name, value } = e.target;

    name === "min" ? setMinValue(Number(value)) : setMaxValue(Number(value));
  };

  return (
    <div className="multirange">
      <Slider
        value={[minValue, maxValue]}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          width: 300,
          color: "success.main",
          "& .MuiSlider-thumb:not(:last-child)": {
            width: "15px",
            height: "15px",
            backgroundColor: "#000046",
          },
          "& .MuiSlider-thumb:last-child": {
            width: "23px",
            height: "23px",
            backgroundColor: "#fff9e4",
            border: "4px solid #000046",
          },
          "& .MuiSlider-track": { height: "1px", color: "#000046" },
          "& .MuiSlider-rail": { height: "1px", color: "#eaeaea" },
          "& .MuiSlider-thumb::after": { height: "1px", color: "#eaeaea" },
        }}
      />
      <div className={s.values}>
        <span className={s.text}>от</span>
        <input
          type="number"
          name="min"
          value={minValue}
          className={s.input}
          onChange={handleChangInput}
        />
        <span className={s.text}>до</span>
        <input
          type="number"
          name="max"
          value={maxValue}
          className={s.input}
          onChange={handleChangInput}
        />
        {Array.isArray(rangeText) ? (
          <span className={s.text}>
            {rangeText[0]} <img src={arrow} alt="Стрелка вниз" />
          </span>
        ) : (
          <span className={s.text}>{rangeText}</span>
        )}
      </div>
    </div>
  );
};
