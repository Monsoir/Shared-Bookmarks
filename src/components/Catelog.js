import React, { Component } from 'react';

import './catelog.css';

const PlaceholderImage = require('../img/web.png');

export default class Catelog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.favicon,
    };
  }

  // componentDidMount() {
  //   this.placeholderImageOrNot();
  // }

  placeholderImageOrNot = () => {
    /*eslint-disable */
    const self = this;
    fetch(this.props.favicon, {
        method: 'HEAD',
        mode: 'no-cors', // 需要设置，否则同源策略禁止访问，返回的状态码永远是 0 https://stackoverflow.com/questions/40182785/why-fetch-return-a-response-with-status-0
    })
    .then((response) => {
      self.setState({
        image: response,
      });
    });
    /* eslint-enable */
  }

  loadPlaceholderImage = () => {
    this.setState({
      image: PlaceholderImage,
    });
  };

  handleClick = () => {
    if (this.props.clickHandler) {
      this.props.clickHandler();
    }
  };

  render() {
    /**
     * 使用 img 的 onError 时间可以设置 placeholder image
     */
    return (
      <div className="container">
        <div
          className="faviconHolder"
          role="button"
          tabIndex={0}
          onMouseDown={this.handleClick}
        >
          <img
            src={this.state.image}
            alt="icon address"
            className="favicon"
            onError={this.loadPlaceholderImage}
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
