import {Menu} from "antd";
import React from "react";

export const HeaderNav = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
      <Menu.Item key="0">Home</Menu.Item>
      <Menu.Item key="1">People</Menu.Item>
      <Menu.Item key="2">Planets</Menu.Item>
      <Menu.Item key="3">Films</Menu.Item>
      <Menu.Item key="4">Species</Menu.Item>
      <Menu.Item key="5">Vehicles</Menu.Item>
      <Menu.Item key="6">Starships</Menu.Item>
    </Menu>
  )
}
