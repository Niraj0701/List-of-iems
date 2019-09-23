import React from 'react';
import PropTypes from 'prop-types';
import EquipementDetails from '../../components/chepointsDetail'

let style = {
  listOfItems: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'scroll',
    height: '70vh'
  }
};
export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: this.props.checkpointsDetails,
      equipement: this.props.location.state,
      listOfEquipments: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({listOfEquipments: nextProps.listOfEquipments});
  }

  componentDidMount() {
    this.props.getCheckpoint(this.props.match.params.id);
  }

  render() {
    return (
      <section>
        <EquipementDetails
          equipment={this.state.equipement}
          listOfCheckpoints={this.props.checkpointsDetails}
        />
      </section>);
  }
}

DetailsPage.propTypes = {
  getCheckpoint: PropTypes.func
};
