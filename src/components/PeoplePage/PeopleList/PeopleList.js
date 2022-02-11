import {useSelector} from "react-redux";
import 'antd/dist/antd.css';
import {Card, Spin} from "antd";
import s from './PeopleList.module.css';

export const PeopleList = () => {
  const peoples = useSelector(state => state.appPage.people.results);

  return (
    <div  className={s.peopleList__wrapper}>
      {
        !peoples
          ? <div style={{display: "flex", width: "100%"}}><Spin size={'large'} style={{margin: "0 auto"}}/></div>
          : peoples.map((p, i) => {
            return (
              <Card title={p.name} bordered={false} style={{width: 240, margin: '0 auto'}} key={i}>
                <p>gender: {p.gender}</p>
                <p>height: {p.height}</p>
                <p>mass: {p.mass}</p>
              </Card>
            )
          })
      }
    </div>
  )
}
