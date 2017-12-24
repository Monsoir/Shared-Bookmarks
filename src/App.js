import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from './components/Content';
import TreeNode from './components/Node';

import {
  fetchCategories,
  FetchStatus,
  updatingBookmarksAddress,
} from './redux/category.redux';

import './app.css';

class App extends Component {
  componentDidMount() {
    // this.props.fetchCategories();
  }

  handleAddressChange = (event) => {
    this.props.updatingBookmarksAddress(event.target.value);
  };

  handleClick = () => {
    this.props.fetchCategories(this.props.bookmarksAddress);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    let prompt = '';
    switch (this.props.fetchResult) {
      case FetchStatus.suspend:
        prompt = '待命中...';
        break;
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
        <div className="addressBar">
          <input
            type="text"
            className="addressInput"
            value={this.props.bookmarksAddress}
            placeholder="书签地址"
            onChange={(event) => { this.handleAddressChange(event); }}
            onKeyDown={(event) => { this.handleKeyPress(event); }}
          />
          <button
            className="addressConfirm"
            onClick={this.handleClick}
          >
            {'→'}
          </button>
        </div>
        <div className="subContainer">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.Categories.data,
    fetchResult: state.Categories.fetchResult,
    bookmarksAddress: state.Categories.bookmarksAddress,
  };
};

const mapDispatchToProps = {
  fetchCategories,
  updatingBookmarksAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
