import {Menu} from "antd";
import React from "react";

export const HeaderNav = () => {
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
