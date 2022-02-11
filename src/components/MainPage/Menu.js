import {useDispatch, useSelector} from "react-redux";
import {getMainContent} from "../../redux/app-reducer";
import {v1} from "uuid";
import {useEffect} from "react";
import s from './Menu.module.css';
import {Button} from "antd";
import {NavLink} from "react-router-dom";

export const HomeMenu = () => {
  useEffect(() => {
    dispatch(getMainContent())
  }, [])

  const dispatch = useDispatch();
  const menu = useSelector(state => state.appPage.contentMenu);
  const menuList = Object.entries(menu);
  const menuItem = menuList.map((m, i) => {
    return (
      <tr key={v1()} className={s.tableList__item}>
        <td className={s.tableList__itemNumber}>{i + 1}</td>
        <td className={s.tableList__itemName}>{m[0]}</td>
        <td className={s.tableList__itemUrl}>{m[1]}</td>
        <td>
          <Button type="primary">
            <NavLink to={`/${m[0]}`}>Open page</NavLink>
          </Button>
        </td>
      </tr>
    )
  })

  return (
    <div style={{height: "79.5vh"}}>
      <table className={s.tableList}>
        <thead>
        <tr className={s.tableList__item}>
          <td className={s.tableList__itemNumber}>Number</td>
          <td className={s.tableList__itemName}>Name</td>
          <td className={s.tableList__itemUrl}>API</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        {menuItem}
        </tbody>
      </table>
    </div>
  )
}
