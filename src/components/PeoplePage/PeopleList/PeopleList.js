import {useSelector} from "react-redux";
import 'antd/dist/antd.css';
import {Card, Spin} from "antd";
import s from './PeopleList.module.css';
import {DiAndroid} from "react-icons/di";
import {RiMenLine} from "react-icons/ri";
import {RiWomenLine} from "react-icons/ri";
import {RiAliensLine} from "react-icons/ri";

export const PeopleList = () => {
  const peoples = useSelector(state => state.appPage.people.results);

  return (
    <div className={s.peopleList__wrapper}>
      {
        !peoples
          ? <div style={{display: "flex", width: "100%"}}><Spin size={'large'} style={{margin: "0 auto"}}/></div>
          : peoples.map((p, i) => {
            return (
              <Card
                title={p.name}
                bordered={false}
                style={{
                  width: 240,
                  margin: '0 auto',
                  minHeight: " 250px"
              }}
                key={i}
              >
                <p>
                  <span style={{margin: "0 5px 0 0"}}>gender:</span>
                  {
                    (p.gender === "male")
                      ? <RiMenLine/>
                      : (p.gender === "female")
                        ? <RiWomenLine/>
                        : (p.gender === "hermaphrodite")
                          ? <RiAliensLine/>
                          : <DiAndroid/>
                  }
                </p>
                <p>height: {p.height}</p>
                <p>mass: {p.mass}</p>
              </Card>
            )
          })
      }
    </div>
  )
}
