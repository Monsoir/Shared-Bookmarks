import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sidebar.css';

import { updateCategoryIndex } from '../redux/catelog-navigate.redux';

class Sidebar extends Component {
  handleClick = (index) => {
    this.props.updateCategoryIndex(index);
  };

  renderItems = () => {
    const items = this.props.categories.map((item, index) => {
      const style = this.props.selectedCategoryIndex === index ? 'item selectedItem' : 'item normalItem';
      return (
        <li
          className={style}
          key={`${item.name}-${index + 1}`}
        >
          <div
            className="itemButton"
            role="button"
            tabIndex={0}
            onMouseDown={() => { this.handleClick(index); }}
          >
            <span>{item.name}</span>
          </div>
        </li>
      );
    });

    return items;
  };

  render() {
    return (
      <ul className="sidebar">
        <div className="list">
          {this.renderItems()}
        </div>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
    selectedCategoryIndex: state.CategoryNavigation.categoryIndex,
  };
};

const mapDispatchToProps = {
  updateCategoryIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
