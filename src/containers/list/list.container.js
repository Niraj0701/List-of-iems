import { connect } from 'react-redux';
import ListPage from '../../components/list';

const  mapStateToProps = () => ({name: 'niraj'});

const mapDispatchToProps = (dispatch) => ({
   getListOfEquipments: () => {
      console.log('mapDispatchToProps hit');
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);