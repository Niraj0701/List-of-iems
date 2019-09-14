
import React from 'react';
import PropTypes from 'prop-types';

export default class ListPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('Component init - ListPage: ')
      this.clickHere = this.clickHere.bind(this);
   }

   componentDidMount() {
      
   }
   clickHere() {
      this.props.getListOfEquipments()
      
   }

   render() {
     return (
      <section>
         <h1>From List Component: - {this.props.name}</h1>
         <button onClick={this.clickHere}> {this.props.name} </button>
      </section>);
   }
 }

 ListPage.propTypes = {
    name: PropTypes.string,
    getListOfEquipments: PropTypes.func
 }