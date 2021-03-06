import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPeoplePageContent, setCurrentPage} from "../../redux/app-reducer";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import {PeopleList} from "./PeopleList/PeopleList";
import {Pagination} from "../commons/Pagination/Paginator";

export const PeoplePage = React.memo(() => {
    const dispatch = useDispatch();

    const currentPageFromState = useSelector(state => state.appPage.currentPage);
    const totalPeopleCount = useSelector(state => state.appPage.people.count);
    const pageSize = 10;
    const portionSize = 10;

    const onPageChanged = (currentPage) => {
      dispatch(setCurrentPage(currentPage))
      dispatch(getPeoplePageContent(currentPage))
    }

    useEffect(() => {
      dispatch(getPeoplePageContent(currentPageFromState))
    }, [])

    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: "79.5vh",
      }}>
        <h2>People</h2>
        <Button type="default" style={{margin: "0 0 20px 0"}}>
          <NavLink to={`/`}>Back</NavLink>
        </Button>
        <PeopleList/>
        <Pagination
          currentPage={currentPageFromState}
          pageSize={pageSize}
          portionSize={portionSize}
          totalItemsCount={totalPeopleCount}
          onPageChanged={onPageChanged}
        />
      </div>
    )
  }
)
