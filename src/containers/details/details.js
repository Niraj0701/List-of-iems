import React from 'react';
import PropTypes from 'prop-types';

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
        console.log('Component init - ListPage: ', this.props.match.params.id, this.props.location);
        this.state = {
            id: this.props.match.params.id,
            data: this.props.checkpointsDetails
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('NextProps ', nextProps);
        this.setState({listOfEquipments: nextProps.listOfEquipments});
    }

    componentDidMount() {
        this.props.getCheckpoint(this.props.match.params.id);
    }

    render() {
        return (
            <section>
                <h1>From Details Component:</h1>
            </section>);
    }
}

DetailsPage.propTypes = {
    getCheckpoint: PropTypes.func
};
