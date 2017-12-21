import React, { Component } from 'react';

import './catelog.css';

export default class Catelog extends Component {
  handleClick = () => {
    if (this.props.clickHandler) {
      this.props.clickHandler();
    }
  };

  render() {
    return (
      <div className="container">
        <div
          className="faviconHolder"
          role="button"
          tabIndex={0}
          onMouseDown={this.handleClick}
        >
          <img
            src={this.props.favico}
            alt={this.props.name}
            className="favicon"
          />
        </div>
        <div className="catelogSubContainer">
          <div
            className="catelogTitle"
            role="button"
            tabIndex={0}
            onMouseDown={this.handleClick}
          >
            {this.props.name}
          </div>
          <div className="catelogRemark">
            {this.props.remark}
          </div>
        </div>
      </div>
    );
  }
}
