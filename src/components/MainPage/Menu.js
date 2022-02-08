import {useDispatch, useSelector} from "react-redux";
import {getMainContent} from "../../redux/app-reducer";
import {v1} from "uuid";
import {useEffect} from "react";
import s from './Menu.module.css';
import {Button} from "antd";

export const HomeMenu = () => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.appPage.contentMenu);

  const menuList = Object.entries(menu);

  const menuItem = menuList.map((m, i) => {
    return (
      <div key={v1()} className={s.tableList__item}>
        <span className={s.tableList__itemNumber}>{i + 1}</span>
        <span>{m[0]}:</span>
        <span className={s.tableList__itemUrl}>{m[1]}</span>
        <Button type="primary">Open page</Button>
      </div>
    )
  })

  useEffect(() => {
    dispatch(getMainContent())
  }, [])

  return (
    <div className={s.tableList}>
      {menuItem}
    </div>
  )
}
