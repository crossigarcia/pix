import React from "react";
import "./grid.styles.scss";
import GridItem from "../grid-item/grid-item.component";

const Grid = ({ error, isLoaded, hits}) => {
   if (error) {
      return <div className="error">Error: {error.message}</div>
   } else if (!isLoaded) {
      return <div className="loading">Loading...</div>
   } else {
      return (
         <div className="grid-container">
            {hits.length ? hits.map(hit => {
               return <GridItem key={hit.id} preview={hit.webformatURL} largeImg={hit.largeImageURL} altText={hit.tags}/>
            }) : (
               <div className="no-results">No Results</div>
            )}
         </div>
      )
   }
}

export default Grid;