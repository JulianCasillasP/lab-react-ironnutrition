import React from "react";
import { Divider, Input } from 'antd';


function Search({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        onChange={handleSearch}
        placeholder="Search food..."
      />
    </>
  );
}

export default Search;