import React from "react";
import "./grid.styles.scss";

class Grid extends React.Component {
   constructor(props) {
      super(props);

      this.state={
         hits: "",
         loading: "",
         error: "",
         itemsPerPage: 10,
         keyword: "random"
      }
   }

   componentDidMount() {
      fetch(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${this.state.keyword}&image_type=photo&per_page=${this.state.itemsPerPage}`)
      .then(response => {
         response.json()
         .then(data => {
            this.setState({hits: data.hits})
         })
      })
   }

   render() {
      return (
         <div className="grid-container">
            {this.state.hits.length && this.state.hits.map(hit => {
               return <p key={hit.id}>{hit.id}</p>
            })}
         </div>
      )
   }
}

export default Grid;