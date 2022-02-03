import React from "react";
import "./grid-item.styles.scss";

const GridItem = ({ preview }) => {
   return (
      <div className="grid-item">
         <div className="img-container">
            <img src={preview} alt="" className="img"></img>
         </div>
      </div>
   )
};

export default GridItem;