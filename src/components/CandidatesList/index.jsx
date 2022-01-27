import { useSelector } from "react-redux";
import { getDistanceDate, getDistanceDateToNow } from "../../utils/dateUtils";
import { CandidateCard } from "../CandidateCard";
import { CustomPagination } from "../Pagination";
import s from "./CandidatesList.module.scss";

export const CandidatesList = ({ candidates }) => {
  const currentPage = useSelector((state) => state.candidates.currentPage);
  const maxPage = useSelector((state) => state.candidates.pageCount);

  return (
    <div className={s.candidatesListWrap}>
      <ul className={s.candidatesList}>
        {candidates.map(
          ({ id, first_name, photo, workexperience, birthday }) => {
            const normalizedExp = workexperience.map(
              ({ id, date_from, date_to, position }) => {
                const workDistance = getDistanceDate(date_from, date_to);
                return { workDistance, id, position };
              }
            );

            const years = getDistanceDateToNow(birthday);

            return (
              <li className={s.listItem} key={id}>
                <CandidateCard
                  name={first_name}
                  photo={photo}
                  position="Продавец - консультант"
                  years={years}
                  experience={normalizedExp}
                  city="Kyiv, Ukraine"
                />
              </li>
            );
          }
        )}
      </ul>
      <CustomPagination currentPage={currentPage} maxPage={maxPage} />
    </div>
  );
};
