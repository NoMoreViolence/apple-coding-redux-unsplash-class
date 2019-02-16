import { createStore } from 'redux';
import reducers from './reducer';

const configure = () => {
  // 리덕스의 디버깅을 편하게 도와주는 extenstion을 실행시켜 주는 로직입니다만, 현재는 필요하지 않기 때문에 사용을 하지 않겠습니다.
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, devTools);
  return store;
};

export default configure();
