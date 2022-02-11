import {useSelector} from "react-redux";
import 'antd/dist/antd.css';
import {Card, Spin} from "antd";

export const PeopleList = () => {
  const peoples = useSelector(state => state.appPage.people.results);

  return (
    <>
      {
        !peoples
          ? <div style={{display: "flex", width: "100%"}}><Spin size={'large'} style={{margin: "0 auto"}}/></div>
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
