import React from "react";
import "./search-box.styles.scss";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBox = (props) => (
   <div className="search-container">
      <input type="text" name="keyword" id="keyword" className="search-field" onChange={props.handleChange} placeholder="Search"></input>
      <button type="submit" name="search-btn" className="search-btn" onClick={props.onClick}>
         <SearchRoundedIcon />
      </button>
   </div>
);

export default SearchBox;