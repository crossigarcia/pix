import React from "react";
import "./grid.styles.scss";
import GridItem from "../grid-item/grid-item.component";
import LinearProgress from '@mui/material/LinearProgress';

const Grid = ({ error, isLoaded, hits}) => {
   if (error) {
      return <div className="error">Error: {error.message}</div>
   } else if (!isLoaded) {
      return <div className="loading"><LinearProgress color="secondary" /></div>
   } else {
      return (
         <div className="grid-container">
            {hits.length ? hits.map(hit => {
               return <GridItem key={hit.id} preview={hit.webformatURL} largeImg={hit.largeImageURL} altText={hit.tags} link={hit.pageURL}/>
            }) : (
               <div className="no-results">No Results</div>
            )}
         </div>
      )
   }
}

export default Grid;