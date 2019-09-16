import { connect } from 'react-redux';
import ListPage from './list';
import { asyncActionGetCheckpointDetails } from '../../store/app.action';

const  mapStateToProps = (state) => {
	return {name: state.appReducer.name, listOfEquipments: state.getDetailsReducer.listOfEquipments}
};

const mapDispatchToProps = (dispatch) => ({
	getCheckpoint: (id) => {
		console.log('hit getCheckpoints');
		dispatch(asyncActionGetCheckpointDetails(id))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
