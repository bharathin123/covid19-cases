import React from "react";
import "./Searchbox.css";

const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Searchbox;
