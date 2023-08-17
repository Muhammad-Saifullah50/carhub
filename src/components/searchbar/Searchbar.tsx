"use client";
import { SearchManufacturer } from "..";
import { useState } from "react";
const Searchbar = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
};

export default Searchbar;
