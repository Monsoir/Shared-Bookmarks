import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
