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
        console.log('Component init - ListPage: ', this.props.checkpointsDetails);
        this.state = {
            id: this.props.match.params.id,
            data: this.props.checkpointsDetails,
            equipement: this.props.location.state,
            listOfEquipments: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('NextProps ', nextProps);
        this.setState({listOfEquipments: nextProps.listOfEquipments});
    }

    componentDidMount() {
        this.props.getCheckpoint(this.props.match.params.id);
        console.log('## DATA ## : ', this.state.equipement)
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