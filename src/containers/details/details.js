import React from 'react';
import PropTypes from 'prop-types';

let style = {
	listOfItems: {
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'scroll',
		height: '70vh'
	}
}
export default class DetailsPage extends React.Component {
	constructor(props) {
		super(props);
		console.log('Component init - ListPage: ')
		this.state = {

			listOfEquipments: props.listOfEquipments
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log('NextProps ', nextProps)
		this.setState({listOfEquipments: nextProps.listOfEquipments});
	}

	componentDidMount() {
		this.props.getCheckpoint();
	}


	render() {
		return (
			<section>
				<h1>From Details Component:</h1>

			</section>);
	}
}

ListPage.propTypes = {
	getCheckpoint: PropTypes.func
}
