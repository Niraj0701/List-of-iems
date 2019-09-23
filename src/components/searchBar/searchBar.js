import React from 'react';
import TextField from "../../containers/list/list";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
    this.setFilterQuery = this.setFilterQuery.bind(this);
  }

  setFilterQuery = (event) => {
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
      </div>
    );
  }
}

export default SearchBar;
