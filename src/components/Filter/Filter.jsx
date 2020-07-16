import React from "react";

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input value={value} onChange={onChangeFilter} type="text" />
  </div>
);

export default Filter;
