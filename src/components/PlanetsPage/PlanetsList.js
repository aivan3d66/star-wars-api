import React from 'react';
import {useSelector} from "react-redux";
import s from "../PeoplePage/PeopleList/PeopleList.module.css";
import {Card, Spin} from "antd";
import {FILTERS} from "../../redux/app-reducer";

export const PlanetsList = React.memo(() => {
    const planets = useSelector(state => state.appPage.planets.results);
    const filterValue = useSelector(state => state.appPage.filter);

    let filteredPlanets = planets;

    if (filterValue === FILTERS.CLIMATE) {
      filteredPlanets = planets.filter(t => t.climate === "temperate")
    }
    if (filterValue === FILTERS.GRAVITY) {
      filteredPlanets = planets.filter(t => t.gravity === "1 standard")
    }

    return (
      <div className={s.peopleList__wrapper}>
        {
          !filteredPlanets
            ? <div style={{display: "flex", width: "100%"}}><Spin size={'large'} style={{margin: "0 auto"}}/></div>
            : filteredPlanets.map((p, i) => {
              return (
                <Card title={p.name} bordered={false} style={{width: 240, margin: '0 auto'}} key={i}>
                  <p>climate: {p.climate}</p>
                  <p>gravity: {p.gravity}</p>
                  <p>population: {p.population}</p>
                </Card>
              )
            })
        }
      </div>
    )
  }
)
