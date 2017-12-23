import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Sidebar from './components/Sidebar';
import Content from './components/Content';
import TreeNode from './components/Node';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          {/* <Sidebar /> */}
          <TreeNode node={this.props.categories} />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
  };
};

export default connect(mapStateToProps)(App);
