import {connect} from 'react-redux';
import {asyncActionGetCheckpointDetails} from '../../store/app.action';
import DetailsPage from "./details";

const mapStateToProps = (state) => {
  return {checkpointsDetails: state.getDetailsReducer.checkpointsDetails}
};

const mapDispatchToProps = (dispatch) => ({
  getCheckpoint: (id) => {
    dispatch(asyncActionGetCheckpointDetails(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
