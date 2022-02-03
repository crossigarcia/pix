import React from "react";
import Grid from "../../components/grid/grid.component";
import SearchBox from "../../components/search-box/search-box.component";
import './homepage.styles.scss';

class Homepage extends React.Component {
   constructor(props) {
      super(props);
      
      this.state={
         hits: [],
         isLoaded: false,
         error: null,
         itemsPerPage: 10,
         keyword: ""
      }
   }

   componentDidMount() {
      fetch(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${this.state.keyword}&image_type=photo&per_page=${this.state.itemsPerPage}`)
      .then(response => response.json())
      .then((result) => {
         console.log(this.state.keyword);
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

   handleKeywordChange = (event) => {
      event.preventDefault();
      this.setState({ keyword: event.target.value }, 
         // () => {
         //    fetch(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${this.state.keyword}&image_type=photo&per_page=${this.state.itemsPerPage}`)
         //    .then(response => response.json())
         //    .then((result) => {
         //       console.log(this.state.keyword);
         //       this.setState({
         //          hits: result.hits,
         //          isLoaded: true
         //       },
         //       (error) => {
         //          this.setState({
         //             isLoaded: true,
         //             error
         //          })
         //       })
         //    }) 
         //    .catch(error => console.log("ERROR:", error));
         // }
      );
   }

   submitKeyword = () => {
      fetch(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${this.state.keyword}&image_type=photo&per_page=${this.state.itemsPerPage}`)
      .then(response => response.json())
      .then((result) => {
         console.log(this.state.keyword);
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
      return (
         <div className="homepage">
            <SearchBox handleChange={this.handleKeywordChange} onClick={this.submitKeyword}/>
            <Grid error={error} isLoaded={isLoaded} hits={hits}/>
         </div>
      )
   }
};

export default Homepage;