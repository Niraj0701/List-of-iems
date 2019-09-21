import React from 'react';

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         filter: ''
      }
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
         <input value={filter} onChange={this.test.bind(this)} />
       </div>
     );
   }
 }

 export default SearchBar;