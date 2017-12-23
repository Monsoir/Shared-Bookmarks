import React, { Component } from 'react';

// import Sidebar from './components/Sidebar';
import Content from './components/Content';
import TreeNode from './components/Node';
import { TreeData } from './redux/testData';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          {/* <Sidebar /> */}
          <TreeNode node={TreeData} />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
