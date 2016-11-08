import React, { Component } from "react";
import * as Immutable from "immutable";
import { DragDropContext, Backend as DragDropBackend } from "react-dnd";
import HTML5DragDropBackend from "react-dnd-html5-backend";
const TouchDragDropBackend = require("react-dnd-touch-backend").default;

import { TreeNode, TreeNodeList, TreeNodeID, TreeView, MoveTreeNodeArgs } from "react-dnd-treeview";

const styles = require("./styles.css");

interface TestNode extends TreeNode {
  readonly title: string;
  readonly children?: TestNodeList;
}

interface TestNodeList extends TreeNodeList {
  readonly items: Immutable.List<TestNode>;
}

const recursivelyUpdateNode = (
  node: TestNode,
  listUpdateFunc: (list: TestNodeList, parentNode: TreeNode) => TestNodeList,
  nodeUpdateFunc: (node: TestNode) => TestNode
) => {
  const children = node.children ? node.children : { items: Immutable.List<TestNode>() };
  const updateChildren = recursivelyUpdateList(children, node, listUpdateFunc, nodeUpdateFunc);
  if (updateChildren !== node.children) {
    node = Object.assign({}, node, {
      children: updateChildren,
    });
  }
  return nodeUpdateFunc(node);
};

const recursivelyUpdateList = (
  list: TestNodeList,
  parentNode: TreeNode,
  listUpdateFunc: (list: TestNodeList, parentNode: TreeNode) => TestNodeList,
  nodeUpdateFunc: (node: TestNode) => TestNode
) => {
  const mappedItems = list.items.map(item => recursivelyUpdateNode(item, listUpdateFunc, nodeUpdateFunc));
  if (!Immutable.is(mappedItems, list.items)) {
    list = Object.assign({}, list, {
      items: mappedItems,
    });
  }
  return listUpdateFunc(list, parentNode);
};



interface AppState {
  rootNodes: TestNodeList;
}

export class App extends Component<{}, AppState> {
  constructor() {
    super();
    this.state = {
      rootNodes: {
        items: Immutable.List<TestNode>([
          {
            id: "A",
            title: "A",
            children: {
              items: Immutable.List<TestNode>([
                {
                  id: "A1",
                  title: "A1",
                },
                {
                  id: "A2",
                  title: "A2",
                },
                {
                  id: "A3",
                  title: "A3",
                },
              ]),
            },
          },
          {
            id: "B",
            title: "B",
            children: {
              items: Immutable.List<TestNode>([
                {
                  id: "B1",
                  title: "B1",
                },
                {
                  id: "B2",
                  title: "B2",
                },
              ]),
            },
          },
          {
            id: "C",
            title: "C",
            children: {
              items: Immutable.List<TestNode>([
                {
                  id: "C1",
                  title: "C1",
                  children: {
                    items: Immutable.List<TestNode>([
                      {
                        id: "C1x",
                        title: "C1x",
                      },
                      {
                        id: "C1y",
                        title: "C1y",
                      },
                      {
                        id: "C1z",
                        title: "C1z",
                      },
                      {
                        id: "C1zz",
                        title: "C1zz",
                      },
                      {
                        id: "C1zzz",
                        title: "C1zzz",
                      },
                    ]),
                  },
                },
              ]),
            },
          },
        ]),
      },
    };
  }

  handleMoveNode = (args: MoveTreeNodeArgs) => {
    this.setState(Object.assign({}, this.state, {
      rootNodes: recursivelyUpdateList(
        this.state.rootNodes,
        null,
        (list, parentNode) =>
          parentNode === args.newParentNode && parentNode === args.oldParentNode
            ? Object.assign({}, list, {
              items:
              list.items
                .insert(args.newParentChildIndex, args.node as TestNode)
                .remove(args.oldParentChildIndex + (args.newParentChildIndex < args.oldParentChildIndex ? 1 : 0))
            })
            : parentNode === args.newParentNode
              ? Object.assign({}, list, {
                items: list.items.insert(args.newParentChildIndex, args.node as TestNode)
              })
              : parentNode === args.oldParentNode
                ? Object.assign({}, list, {
                  items: list.items.remove(args.oldParentChildIndex)
                })
                : list,
        item => item
      ),
    }));
  };

  setStateWithLog = (newState: AppState) => {
    console.log("new state: ", newState);
    this.setState(newState);
  };

  handleToggleCollapse = (node: TestNode) => {
    this.setStateWithLog(Object.assign({}, this.state, {
      rootNodes: recursivelyUpdateList(
        this.state.rootNodes,
        null,
        (list, parentNode) => list,
        item => item === node ? Object.assign({}, item, {
          isCollapsed: !item.isCollapsed,
        }) : item
      ),
    }));
  };

  renderNode = (node: TestNode) => (
    <div className={ styles.nodeItem }>
      { !node.children || node.children.items.isEmpty()
        ? null
        : <a
          style={{ fontSize: "0.5em", verticalAlign: "middle" }}
          onClick={ () => this.handleToggleCollapse(node) }
          >
          {node.isCollapsed ? "⊕" : "⊖"}
        </a>
      }
      Node: { node.title }
    </div>
  );

  render() {
    return (
      <TreeView
        rootNodes={ this.state.rootNodes }
        classNames={ styles }
        renderNode={ this.renderNode }
        onMoveNode={ this.handleMoveNode }
        />
    );
  }
}

export const DraggableApp: React.ComponentClass<{}> = DragDropContext(
  HTML5DragDropBackend
  // TouchDragDropBackend({ enableMouseEvents: true })
)(App);
