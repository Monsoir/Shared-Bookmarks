import React, { Component } from 'react';
import { connect } from 'react-redux';

import './content.css';

import Catelog from './Catelog';
import { getFavicon, getHostName } from '../utils/utils';
import { updateCategoryNode } from '../redux/catelog-navigate.redux';

class Content extends Component {
  handleCatelogClick = (index) => {
    if (!this.props.categoryNode) return;

    if (this.props.categoryNode.catelogs) {
      window.location = this.props.categoryNode.catelogs[index].address;
    }
  };

  renderHeader = () => {
    let categoryName = '';
    if (this.props.categoryNode) {
      categoryName = this.props.categoryNode.title;
    }

    return (
      <div className="header">
        <div className="title">
          {categoryName}
        </div>
      </div>
    );
  };

  renderBody = () => {
    // const data = this.props.categories[this.props.categoryIndex].catelogs;

    if (!this.props.categoryNode) return null;

    const data = this.props.categoryNode.catelogs;
    const items = data.map((item, index) => {
      const favico = item.favicon || getFavicon(item.address);
      const name = item.name || getHostName(item.address);
      return (
        <li key={`${item.name}-${index + 1}`} className="contentListItem">
          <Catelog
            favico={favico}
            name={name}
            remark={item.remark}
            address={item.address}
            clickHandler={() => { this.handleCatelogClick(index); }}
          />
        </li>
      );
    });

    return (
      <div className="contentBody">
        <ul className="contentList">
          {items}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className="content">
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryNode: state.CategoryNavigation.categoryNode,
    categories: state.Categories,
  };
};

export default connect(mapStateToProps)(Content);
