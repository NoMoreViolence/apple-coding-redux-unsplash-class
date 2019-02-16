export const IMAGE_LOAD = 'IMAGE_LOAD';
export const IMAGE_LOAD_SUCCESS = 'IMAGE_LOAD_SUCCESS';
export const IMAGE_LOAD_FAILURE = 'IMAGE_LOAD_FAILURE';

export const imageLoad = () => ({ type: IMAGE_LOAD });
export const imageLoadSuccess = image => ({ type: IMAGE_LOAD_SUCCESS, payload: image });
export const imageLoadFailure = () => ({ type: IMAGE_LOAD_FAILURE });

export const imageActions = {
  imageLoad,
  imageLoadSuccess,
  imageLoadFailure
};
