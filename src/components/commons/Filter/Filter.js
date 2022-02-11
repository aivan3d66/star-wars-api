import React from 'react';
import 'antd/dist/antd.css';
import {Select} from 'antd';

const {Option} = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
}

const onSearch = (val) => {
  console.log('search:', val);
}

export const Filter = () => {
  return (
    <Select
      showSearch
      placeholder="Select a filter"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      style={{
        width: "200px",
        margin: "0 0 0 20px"
      }}
    >
      <Option value="hot">Hot climate</Option>
      <Option value="gravity">gravity = 1 st.</Option>
    </Select>
  )
}
