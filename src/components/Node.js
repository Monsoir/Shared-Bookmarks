import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCategoryNode } from '../redux/catelog-navigate.redux';

import './node.css';

const styles = {
  node: {
    fontSize: 20,
    fontFamily: 'Arial-BoldMT',
    cursor: 'pointer',
    outline: 'none',
    wordWrap: 'break-word',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  hiddenNode: {
    display: 'none',
  },
  list: {
    listStyleType: 'none',
  },
};

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggle = () => {
    this.props.updateCategoryNode(this.props.node);
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    let nodes;

    if (this.props.node.categories) {
      nodes = this.props.node.categories.map((node, index) => {
        return (
          <li key={`${node.title}-${index + 1}`}>
            <TreeNode node={node} />
          </li>
        );
      });
    }

    let hiddenStyle = styles.list;
    if (!this.state.visible) {
      hiddenStyle = {
        ...hiddenStyle,
        display: 'none',
      };
    }

    return (
      <div>
        <div role="button" tabIndex={0} onMouseDown={() => this.toggle()} style={styles.node}>
          {this.props.node.title || ''}
        </div>
        <ul style={hiddenStyle}>
          {nodes}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateCategoryNode,
};

/**
 * 以下做法会有问题：
 * mapDispatchToProps 只作用在已经 connect 之后的组件，
 * 因此，当组件递归调用自身的时候，mapDispatchToProps 并不起作用，mapStateToProps 同理
 * 因此，需要 export 另外一个已经将组件 connect 之后返回的组件
 *
 * https://howtoember.wordpress.com/2016/05/18/rendering-recursive-components-in-react-redux/
 */
// export default connect(null, mapDispatchToProps)(Node);

const TreeNode = connect(null, mapDispatchToProps)(Node);
export default TreeNode;

/** 树的实现
 * 参考
 * https://exp-team.github.io/blog/2017/04/05/js/react-tree-data/
 * https://github.com/HOUCe/react-handle-tree-data
 */
