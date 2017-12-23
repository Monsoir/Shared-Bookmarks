import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Sidebar from './components/Sidebar';
import Content from './components/Content';
import TreeNode from './components/Node';

import { asycUpdateCategories } from './redux/category.redux';

import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.asycUpdateCategories();
  }

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

const mapDispatchToProps = {
  asycUpdateCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
