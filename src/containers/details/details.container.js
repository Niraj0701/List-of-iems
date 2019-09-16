import { connect } from 'react-redux';
import { asyncActionGetCheckpointDetails } from '../../store/app.action';
import DetailsPage from "./details";

const  mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => ({
	getCheckpoint: (id) => {
		console.log('hit getCheckpoints');
		dispatch(asyncActionGetCheckpointDetails(id))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
