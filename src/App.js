import React, { Component } from 'react';
import './App.scss';
import PictureList from './container/picture-list';
// import PictureList from './components/picture-list';
import LoadMore from './container/load-more';
// import LoadMore from './components/load-more';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>Unsplash API를 이용한 사진첩 프로젝트</span>

        <PictureList />
        {/* <PictureList images={this.state.images} /> */}
        <LoadMore />
        {/* <LoadMore loadMore={this.getImages} /> */}
      </div>
    );
  }
}

export default App;
