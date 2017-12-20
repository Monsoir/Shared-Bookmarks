import React, { Component } from 'react';
import { connect } from 'react-redux';

import './content.css';

import Catelog from './Catelog';

class Content extends Component {
  renderHeader = () => {
    const categoryName = this.props.categories[this.props.categoryIndex].name;

    return (
      <div className="header">
        <div className="title">
          {categoryName}
        </div>
      </div>
    );
  };

  renderBody = () => {
    const data = this.props.categories[this.props.categoryIndex].catelogs;

    const items = data.map((item, index) => {
      return (
        <li key={`${item.name}-${index + 1}`} className="contentListItem">
          <Catelog
            favico={item.favicon}
            name={item.name}
            remark={item.remark}
            address={item.address}
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
    categoryIndex: state.CategoryNavigation.categoryIndex,
    categories: state.Categories,
  };
};

export default connect(mapStateToProps)(Content);
