import React, { Component } from 'react';

import './catelog.css';

export default class Catelog extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={this.props.favico}
          alt={this.props.name}
          className="favicon"
        />
        <div className="catelogSubContainer">
          {/* <div className="catelogTitle">
            {this.props.name}
          </div> */}
          <a className="catelogTitle" href={this.props.address}>{this.props.name}</a>
          <div className="catelogRemark">
            {this.props.remark}
          </div>
        </div>
      </div>
    );
  }
}
