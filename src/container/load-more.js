import { connect } from 'react-redux';
import { imageActions } from './../store/action';
import LoadMore from '../components/load-more';

const mapStateToProps = state => ({
  images: state.imageReducer.images,
  isPending: state.imageReducer.isPending
});

const mapDispatchToProps = dispatch => ({
  imageLoad: () => dispatch(imageActions.imageLoad()),
  imageLoadSuccess: images => dispatch(imageActions.imageLoadSuccess(images)),
  imageLoadFailure: () => dispatch(imageActions.imageLoadFailure())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMore);
