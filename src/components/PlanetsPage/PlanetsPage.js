import React from 'react';
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import {Pagination} from "../commons/Pagination/Paginator";
import {useEffect} from "react";
import {
  getPlanetsPageContent,
  setCurrentPlanetsPage,
} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {PlanetsList} from "./PlanetsList";
import {Filter} from "../commons/Filter/Filter";

export const PlanetsPage = React.memo(() => {
    const dispatch = useDispatch();

    const currentPlanetPageFromState = useSelector(state => state.appPage.currentPlanetPage);
    const totalPlanetsCount = useSelector(state => state.appPage.planets.count);
    const pageSize = 10;
    const portionSize = 10;

    const onPageChanged = (currentPage) => {
      dispatch(setCurrentPlanetsPage(currentPage))
      dispatch(getPlanetsPageContent(currentPage))
    }

    useEffect(() => {
      dispatch(getPlanetsPageContent(currentPlanetPageFromState))
    }, [])


    return (
      <div>
        <h2>Planets</h2>
        <Button type="default" style={{margin: "0 0 20px 0"}}>
          <NavLink to={`/`}>Back</NavLink>
        </Button>
        <Filter/>
        <PlanetsList/>
        <Pagination
          currentPage={currentPlanetPageFromState}
          pageSize={pageSize}
          portionSize={portionSize}
          totalItemsCount={totalPlanetsCount}
          onPageChanged={onPageChanged}
        />
      </div>
    )
  }
)
