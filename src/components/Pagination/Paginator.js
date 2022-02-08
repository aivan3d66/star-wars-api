import React, {useState} from "react";

const s = require('./Paginator.module.css');

export const Pagination = (
  {
    currentPage,
    pageSize,
    totalUsersCount,
    onPageChanged,
    portionSize = 10
  }
) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={s.usersList__pagination}>
      {portionNumber > 1 && <button className={s.usersList__paginationControl} onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>+</button>}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((page, i) => {
          let currentPageClassName = currentPage === page ? s.paginationItem__selected : "";

          return <span className={currentPageClassName}
                       key={i}
                       onClick={() => {
                         onPageChanged(page)
                       }}>{page}</span>
        })}

      {portionCount > portionNumber && <button className={s.usersList__paginationControl} onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>+</button>}
    </div>
  )
}
