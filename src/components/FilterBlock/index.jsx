import s from "./FilterBlock.module.scss";

export const FilterBlock = ({ children, title }) => {
  return (
    <div className={s.filterBlock}>
      {title && <h3 className={s.title}>{title}</h3>}
      {children}
    </div>
  );
};
