import {useDispatch, useSelector} from "react-redux";
import {getMainContent} from "../../redux/app-reducer";
import {v1} from "uuid";
import {useEffect} from "react";

export const HomeMenu = () => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.appPage.contentMenu);

  const menuList = Object.entries(menu);
  const menuItem = menuList.map(m => <div key={v1()}>
    <span>{m[0]} - {m[1]}</span>
  </div>)

  useEffect(() => {
    dispatch(getMainContent())
  }, [])

  console.log(menuList)


  return (
    <div>
      {menuItem}
    </div>
  )
}
