import { connect } from 'react-redux';
import { asyncActionGetCheckpointDetails } from '../../store/app.action';
import DetailsPage from "./details";

const  mapStateToProps = (state) => {
	console.log('HELLO .... !! : ', state.getDetailsReducer)
	return {checkpointsDetails: state.getDetailsReducer.checkpointsDetails}
};

const mapDispatchToProps = (dispatch) => ({
	getCheckpoint: (id) => {
		console.log('++++ : ', id);
		dispatch(asyncActionGetCheckpointDetails(id))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
