import React, { useState, useEffect } from 'react';
import Grid from "../../components/grid/grid.component";
import SearchBox from "../../components/search-box/search-box.component";
import Slider from '@mui/material/Slider';
import './home.styles.scss';

const Home = () => {
   const [hits, setHits] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const [error, setError] = useState(null);
   const [itemsPerPage, setItemsPerPage] = useState(10);
   const [keyword, setKeyword] = useState("red");

   useEffect(() => {
      fetch(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${keyword}&image_type=photo&per_page=${itemsPerPage}`)
      .then(response => response.json())
      .then((result) => {
         setHits(result.hits);
         setIsLoaded(true);
      }) 
      .catch(error => {
         console.log("ERROR:", error);
         setError(`An error ocurred, please try again. ${error}`);
      });
   }, [keyword, itemsPerPage]);

   const handleKeywordChange = (event) => {
      event.preventDefault();
      setKeyword(event.target.value);
   }

   const handleCountChange = (event) => {
      const { value } = event.target;
      setItemsPerPage(value);
   }

   return (
      <div className="homepage">
            <SearchBox handleChange={handleKeywordChange}/>
            <div className="slider-container">
               <p className="slider-label">Images per page</p>
               <Slider 
                  size="small"
                  defaultValue={10}
                  onChange={handleCountChange}
                  step={5}
                  min={5}
                  color="secondary"
                  aria-label="Small"
                  valueLabelDisplay="auto"
               />
            </div>
            <Grid error={error} isLoaded={isLoaded} hits={hits}/>
      </div>
   )

}

export default Home;