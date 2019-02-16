import PictureList from '../components/picture-list';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  images: state.imageReducer.images,
  isPending: state.imageReducer.isPending
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureList);
