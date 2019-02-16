import * as image from './../action/image';
const { IMAGE_LOAD, IMAGE_LOAD_SUCCESS, IMAGE_LOAD_FAILURE } = image;

const initalState = {
  isPending: false,
  images: []
};

const imageReducer = (state = initalState, action) => {
  switch (action.type) {
    case IMAGE_LOAD:
      return { ...state, isPending: true };
    case IMAGE_LOAD_SUCCESS:
      return { ...state, isPending: false, images: [...state.images, ...action.payload] };
    case IMAGE_LOAD_FAILURE:
      return { ...state, isPending: false };
    default:
      return state;
  }
};

export default imageReducer;
