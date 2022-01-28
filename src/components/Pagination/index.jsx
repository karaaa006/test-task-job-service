import { Pagination } from "@mui/material";
import s from "./Pagination.module.scss";
import { fetchCandidates } from "../../store/operations/candidatesOperations";
import { useDispatch } from "react-redux";

export const CustomPagination = ({ currentPage, maxPage }) => {
  const dispatch = useDispatch();

  const handleChangePage = (e, page) => {
    dispatch(fetchCandidates(page));
  };
  return (
    <div className={s.paginationWrap}>
      <Pagination
        count={maxPage}
        siblingCount={1}
        boundaryCount={1}
        page={currentPage}
        onChange={handleChangePage}
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#000046",
            color: "#ffffff",
            fontFamily: "inherit",
          },
          "& .MuiPaginationItem-text": { fontSize: "16px" },
        }}
      />
    </div>
  );
};
