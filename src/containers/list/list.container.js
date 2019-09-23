import {connect} from 'react-redux';
import ListPage from './list';
import {asyncActionGetList} from '../../store/app.action';

const mapStateToProps = (state) => {
  return {name: state.getListReducer.name, listOfEquipments: state.getListReducer.listOfEquipments}
};

const mapDispatchToProps = (dispatch) => ({
  getListOfEquipments: () => {
    dispatch(asyncActionGetList())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
