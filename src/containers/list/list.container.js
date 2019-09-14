import { connect } from 'react-redux';
import ListPage from '../../components/list';

const  mapStateToProps = () => ({name: 'niraj'});

const mapDispatchToProps = (dispatch) => ({
   clickedButton: (test) => {
      console.log('mapDispatchToProps hit', test);
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);