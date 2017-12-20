import React, { Component } from 'react';

import './sidebar.css';

export default class Sidebar extends Component {
  renderItems = () => {
    const data = [
      'fasfasfasdfsadf',
      'fasfasfasdfsadf',
      'fasfasfasdfsadf',
      'fasfasfasdfsadf',
      'fasfasfasdfsadf',
      'fasfasfasdfsadf',
    ];

    const items = data.map((item) => {
      return (
        <li className="item">
          <span>{item}</span>
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
