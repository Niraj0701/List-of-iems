import React from 'react';
import TextField from "../../containers/list/list";

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         filter: ''
      }
      this.test = this.test.bind(this);
   }

   test = (event) => {
      this.setState({filter: event.target.value})
      this.props.filterQuery(event)
   }
 
   render() {
      let {filter} = this.state;
     return (
       <div>
          <h1>{filter}</h1>
           <TextField
               id="outlined-search"
               label="Search field"
               type="search"
               margin="normal"
               variant="outlined"
           />
         {/*<input value={filter} onChange={this.test.bind(this)} />*/}
       </div>
     );
   }
 }

 export default SearchBar;