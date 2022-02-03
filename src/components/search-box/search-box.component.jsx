import React from "react";
import "./search-box.styles.scss";

const SearchBox = (props) => (
   <div className="search-conatiner">
      <input type="text" name="keyword" id="keyword" className="search-field" onChange={props.handleChange}></input>
      <button type="submit" name="search-btn" id="search-btn" onClick={props.onClick}>SEARCH</button>
   </div>
);

export default SearchBox;