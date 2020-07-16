import React from "react";

const Filter = ({ onChangeFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input onChange={onChangeFilter} type="text" />
  </div>
);

export default Filter;
