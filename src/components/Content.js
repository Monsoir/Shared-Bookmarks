import React, { Component } from 'react';

import './content.css';

import Catelog from './Catelog';

export default class Content extends Component {
  renderHeader = () => {
    return (
      <div className="header">
        <div className="title">
          Title
        </div>
      </div>
    );
  };

  renderBody = () => {
    const data = [
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.google.com/favicon.ico',
        address: 'https://www.google.com',
        name: 'Google',
        remark: 'Google 搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
      {
        favicon: 'https://www.baidu.com/favicon.ico',
        address: 'https://www.baidu.com',
        name: '百度',
        remark: '百度搜索引擎',
      },
    ];

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
