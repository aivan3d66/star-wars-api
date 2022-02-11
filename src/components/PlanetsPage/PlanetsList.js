import {useSelector} from "react-redux";
import s from "../PeoplePage/PeopleList/PeopleList.module.css";
import {Card, Spin} from "antd";

export const PlanetsList = () => {
  const planets = useSelector(state => state.appPage.planets.results);

  return (
    <div  className={s.peopleList__wrapper}>
      {
        !planets
          ? <div style={{display: "flex", width: "100%"}}><Spin size={'large'} style={{margin: "0 auto"}}/></div>
          : planets.map((p, i) => {
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
