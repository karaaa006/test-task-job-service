import { getDistanceDate, getDistanceDateToNow } from "../../utils/dateUtils";
import { CandidateCard } from "../CandidateCard";
import s from "./CandidatesList.module.scss";

export const CandidatesList = ({ candidates }) => {
  return (
    <ul className={s.candidatesList}>
      {candidates.map(({ id, first_name, photo, workexperience, birthday }) => {
        const normalizedExp = workexperience.map(
          ({ id, date_from, date_to, position }) => {
            const workDistance = getDistanceDate(date_from, date_to);
            return { workDistance, id, position };
          }
        );

        const years = getDistanceDateToNow(birthday);

        return (
          <li className={s.listItem}>
            <CandidateCard
              key={id}
              name={first_name}
              photo={photo}
              position="Продавец - консультант"
              years={years}
              experience={normalizedExp}
              city="Kyiv, Ukraine"
            />
          </li>
        );
      })}
    </ul>
  );
};
