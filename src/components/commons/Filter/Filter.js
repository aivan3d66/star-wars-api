import React from 'react';
import 'antd/dist/antd.css';
import {Select} from 'antd';
import {FILTERS, planetFilter} from "../../../redux/app-reducer";
import {useDispatch} from "react-redux";

const {Option} = Select;

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = (value) => dispatch(planetFilter(value))

  return (
    <Select
      showSearch
      placeholder="Select a filter"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      style={{
        width: "200px",
      }}
    >
      <Option value={FILTERS.CLIMATE}>Temperate climate</Option>
      <Option value={FILTERS.GRAVITY}>Gravity = 1 st.</Option>
      <Option value={FILTERS.ALL}>All</Option>
    </Select>
  )
}
