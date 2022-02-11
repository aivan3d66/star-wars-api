import React, {useState} from "react";
import s from './Paginator.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

export const Pagination = (
  {
    currentPage,
    pageSize,
    totalItemsCount,
    onPageChanged,
    portionSize
  }
) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
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
      }}><IoIosArrowBack/></button>}

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
      }}><IoIosArrowForward/></button>}
    </div>
  )
}
