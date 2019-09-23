import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/listItem';
import SearchBar from '../../components/searchBar/searchBar';
import TextField from "@material-ui/core/TextField";

let style = {
  listOfItems: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'scroll',
    height: '70vh'
  },
  searchBar: {
    margin: '2vh'
  }
};
export default class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: props.name,
      listOfEquipments: props.listOfEquipments
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({listOfEquipments: nextProps.listOfEquipments});
  }

  componentDidMount() {
    this.props.getListOfEquipments();
  }

  handleChange(event) {
    const lowercasedFilter = event.target.value.toLowerCase();
    const filteredData = this.props.listOfEquipments.filter(singleEquipement => {
      return Object.keys(singleEquipement.item).some(key =>
        singleEquipement.item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });
    this.setState({listOfEquipments: filteredData});
  };

  isObjectEmpty(objectToBeTested) {
    if (objectToBeTested)
      return Object.keys(objectToBeTested).length > 0;
  }

  _renderObject(itemsList) {
    if (itemsList) {
      return itemsList.map((item, index) => {
          return <ListItem key={index} {...item} />
        }
      )
    }
  }


  render() {
    return (
      <section>
        <div style={style.searchBar}>
          <TextField
            style={{width: '50%'}}
            label="Recherche Equipment"
            type="search"
            variant="outlined"
            onChange={this.handleChange}
          />
        </div>

        <div style={style.listOfItems}>
          {this._renderObject(this.state.listOfEquipments)}
        </div>
      </section>
    );
  }
}

ListPage.propTypes = {
  name: PropTypes.string,
  listOfEquipments: PropTypes.any,
  getListOfEquipments: PropTypes.func
};
