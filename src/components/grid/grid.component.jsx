import React from "react";
import "./grid.styles.scss";
import GridItem from "../card/grid-item.component";

class Grid extends React.Component {
   constructor(props) {
      super(props);

      this.state={
         hits: [],
         isLoaded: false,
         error: null,
         itemsPerPage: 10,
         keyword: "yellow"
      }
   }

   componentDidMount() {
      fetch(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${this.state.keyword}&image_type=photo&per_page=${this.state.itemsPerPage}`)
      .then(response => response.json())
      .then((result) => {
         console.log(result.hits)
         this.setState({
            hits: result.hits,
            isLoaded: true
         },
         (error) => {
            this.setState({
               isLoaded: true,
               error
            })
         })
      }) 
      .catch(error => console.log("ERROR:", error));
   }

   render() {
      const { error, isLoaded, hits } = this.state;
      if (error) {
         return <div className="error">Error: {error.message}</div>
      } else if (!isLoaded) {
         return <div className="loading">Loading...</div>
      } else {
         return (
            <div className="grid-container">
               {hits.length && hits.map(hit => {
                  return <GridItem key={hit.id} preview={hit.previewURL}/>
               })}
            </div>
         )
      }
   }
}

export default Grid;