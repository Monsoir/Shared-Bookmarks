import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from './components/Content';
import TreeNode from './components/Node';

import {
  fetchCategories,
  FetchStatus,
} from './redux/category.redux';

import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    let prompt = '';
    switch (this.props.fetchResult) {
      case FetchStatus.fetching:
        prompt = '抓取中...';
        break;
      case FetchStatus.success:
        prompt = '抓取成功';
        break;
      case FetchStatus.failure:
        prompt = '数据失败或数据格式有误';
        break;
      default:
        break;
    }

    return (
      <div className="app">
        <div className="sidebar">
          <div className="prompt">
            <h4>{prompt}</h4>
          </div>
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
    categories: state.Categories.data,
    fetchResult: state.Categories.fetchResult,
  };
};

const mapDispatchToProps = {
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
