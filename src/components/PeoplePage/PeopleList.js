import {useSelector} from "react-redux";
import Preloader from "../commons/Preloader/SpinnerPreloader";
import {Card} from "antd";

export const PeopleList = () => {
  const peoples = useSelector(state => state.appPage.people.results);

  return (
    <>
      {
        !peoples
          ? <Preloader/>
          : peoples.map((p, i) => {
            return (
              <Card title={p.name} bordered={false} style={{width: 240, margin: "0 20px 20px 0"}} key={i}>
                <p>gender: {p.gender}</p>
                <p>height: {p.height}</p>
                <p>mass: {p.mass}</p>
              </Card>
            )
          })
      }
    </>
  )
}
