
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { forEach } from '@firebase/util';
import ListItem from '../../components/listItem/listItem';
import SearchBar from '../../components/searchBar/searchBar';

export default class ListPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('Component init - ListPage: ')
      this.clickHere = this.clickHere.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
         name: props.name,
         listOfEquipments: props.listOfEquipments
      }
   }

   componentWillReceiveProps(nextProps) {
      console.log('NextProps ', nextProps)
      this.setState({listOfEquipments: nextProps.listOfEquipments});
   }

   componentDidMount() {
      this.props.getListOfEquipments();
   }

   clickHere(){

   }

   handleChange (event) {     
      const lowercasedFilter = event.target.value.toLowerCase();
      const filteredData = this.props.listOfEquipments.filter(item => {
         return Object.keys(item).some(key =>
           item[key].toString().toLowerCase().includes(lowercasedFilter)
         ); 
       });
       this.setState({listOfEquipments: filteredData});
    };

   isObjectEmpty(objectToBeTested){
      if (objectToBeTested)
         return Object.keys(objectToBeTested).length > 0;
   }

   _renderObject(itemsList){
      if (itemsList){
         return Object.keys(itemsList).map( (item, index) => <ListItem key={index} {...itemsList[item]} />)
      } 
   }

   render() {
     return (
      <section>
         <h1>From List Component: - {this.state.name}</h1>
         <SearchBar filterQuery={this.handleChange}/>
         <button onClick={this.clickHere}> {this.state.name} </button>
         <div className='listOfItems'>
            {this._renderObject(this.state.listOfEquipments)}
         </div>
      </section>);
   }
 }

 ListPage.propTypes = {
    name: PropTypes.string,
    listOfEquipments: PropTypes.any,
    getListOfEquipments: PropTypes.func
 }