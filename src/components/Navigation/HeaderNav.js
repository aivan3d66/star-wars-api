import {Menu} from "antd";
import React from "react";
import {useDispatch} from "react-redux";
import {
  getFilmsPageContent,
  getPeoplePageContent,
  getPlanetsPageContent,
  getSpeciesPageContent, getStarshipsPageContent, getVehiclesPageContent
} from "../../redux/app-reducer";
import {NavLink} from "react-router-dom";

export const HeaderNav = () => {
  const dispatch = useDispatch();

  const onPeopleItemHandler = () => {
    return dispatch(getPeoplePageContent())
  }
  const onPlanetItemHandler = () => {
    return dispatch(getPlanetsPageContent())
  }
  const onFilmsItemHandler = () => {
    return dispatch(getFilmsPageContent())
  }
  const onSpeciesItemHandler = () => {
    return dispatch(getSpeciesPageContent())
  }
  const onVehiclesItemHandler = () => {
    return dispatch(getVehiclesPageContent())
  }
  const onStarshipsItemHandler = () => {
    return dispatch(getStarshipsPageContent())
  }

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
      <Menu.Item key="0">
        <NavLink to={'/'}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="1" onClick={onPeopleItemHandler}>
        <NavLink to={'/people'}>People</NavLink>
      </Menu.Item>
      <Menu.Item key="2" onClick={onPlanetItemHandler}>
        <NavLink to={'/planets'}>Planets</NavLink>
      </Menu.Item>
      <Menu.Item key="3" onClick={onFilmsItemHandler}>
        <NavLink to={'/films'}>Films</NavLink>
      </Menu.Item>
      <Menu.Item key="4" onClick={onSpeciesItemHandler}>
        <NavLink to={'/species'}>Species</NavLink>
      </Menu.Item>
      <Menu.Item key="5" onClick={onVehiclesItemHandler}>
        <NavLink to={'/vehicles'}>Vehicles</NavLink>
      </Menu.Item>
      <Menu.Item key="6" onClick={onStarshipsItemHandler}>
        <NavLink to={'/starships'}>Starships</NavLink>
      </Menu.Item>
    </Menu>
  )
}
