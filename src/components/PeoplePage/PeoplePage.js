import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPeoplePageContent} from "../../redux/app-reducer";
import Preloader from "../commons/Preloader/SpinnerPreloader";
import {Button, Card} from "antd";
import {NavLink} from "react-router-dom";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  const peoples = useSelector(state => state.appPage.people.results);

  useEffect(() => {
    dispatch(getPeoplePageContent())
  }, [])

  return (
    <div>
      <h2>People</h2>
      <Button type="default" style={{margin: "0 0 20px 0"}}>
        <NavLink to={`/`}>Back</NavLink>
      </Button>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}>
        {
          !peoples
            ? <Preloader/>
            : peoples.map((p, i) => {
              return (
                <Card title={p.name} bordered={false} style={{ width: 240, margin: "0 0 20px 0" }} key={i}>
                  <p>gender: {p.gender}</p>
                  <p>height: {p.height}</p>
                  <p>mass: {p.mass}</p>
                </Card>
              )
            })
        }
      </div>
    </div>

  )
}
