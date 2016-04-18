import React, { Component } from "react";
import Immutable from "immutable";
import { DragDropContext, Backend as DragDropBackend } from "react-dnd";
const HTML5DragDropBackend = require("react-dnd-html5-backend") as DragDropBackend;
const TouchDragDropBackend = require("react-dnd-touch-backend").default;

import { NodeMap, Node, NodeID, TreeView } from "react-dnd-treeview";

const styles = require("./styles.css");

interface AppState {
  nodes: NodeMap;
  rootNodeIDs: Immutable.List<NodeID>;
}

export class App extends Component<{}, AppState> {
  constructor() {
    super();
    this.state = {
      nodes: Immutable.List<Node>([
        {
          id: "A",
          title: "A",
          childIDs: Immutable.List.of("A1", "A2", "A3"),
        },
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
        {
          id: "B",
          title: "B",
          childIDs: Immutable.List.of("B1", "B2"),
        },
        {
          id: "B1",
          title: "B1",
        },
        {
          id: "B2",
          title: "B2",
        },
        {
          id: "C",
          title: "C",
          childIDs: Immutable.List.of("C1"),
        },
        {
          id: "C1",
          title: "C1",
          childIDs: Immutable.List.of("C1x", "C1y", "C1z", "C1zz", "C1zzz"),
        },
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
      ] as Node[]).toKeyedSeq().mapKeys((_, node) => node.id).toMap(),
      rootNodeIDs: Immutable.List.of("A", "B", "C"),
    };
  }

  handleMoveNode = (parentNodeID: NodeID, parentChildIndex: number, nodeID: NodeID, newParentNodeID: NodeID, newParentChildIndex: number) => {
    let nodes = this.state.nodes;
    let rootNodeIDs = this.state.rootNodeIDs;

    const getParentChildIDs = (parentNodeID: NodeID) =>
      parentNodeID === null
        ? rootNodeIDs
        : nodes.get(parentNodeID).childIDs;

    const updateParentChildIDs = (parentNodeID: NodeID, childIDs: Immutable.List<NodeID>) => {
      if (parentNodeID === null) {
        rootNodeIDs = childIDs;
      }
      else {
        nodes = nodes.update(parentNodeID, oldNode => Object.assign({}, oldNode, {
          childIDs,
        }));
      }
    }

    if (newParentNodeID === parentNodeID) {
      let childIDs = getParentChildIDs(parentNodeID).insert(newParentChildIndex, nodeID);
      childIDs = childIDs.remove(
        parentChildIndex +
        (newParentChildIndex < parentChildIndex ? 1 : 0)
      );
      updateParentChildIDs(parentNodeID, childIDs);
    }
    else {
      updateParentChildIDs(parentNodeID, getParentChildIDs(parentNodeID).remove(parentChildIndex));
      updateParentChildIDs(newParentNodeID, getParentChildIDs(newParentNodeID).insert(newParentChildIndex, nodeID));
    }

    this.setState({
      nodes,
      rootNodeIDs,
    });
  };

  handleToggleCollapse = (node: Node) => {
    this.setState(Object.assign({}, this.state, {
      nodes: this.state.nodes.update(node.id, oldNode => Object.assign({}, oldNode, {
        collapsed: !oldNode.collapsed,
      })),
    }));
  };

  renderNode = (node: Node) => (
    <div className={ styles.nodeItem }>
      { !node.childIDs || node.childIDs.isEmpty()
        ? null
        : <a
          style={{ fontSize: "0.5em", verticalAlign: "middle" }}
          onClick={ () => this.handleToggleCollapse(node) }
          >
          {node.collapsed ? "⊕" : "⊖"}
        </a>
      }
      Node: { node.title }
    </div>
  );

  render() {
    return (
      <TreeView
        nodes={ this.state.nodes }
        rootNodeIDs={ this.state.rootNodeIDs }
        classNames={ styles }
        renderNode={ this.renderNode }
        onMoveNode={ this.handleMoveNode }
        />
    );
  }
}

export const DraggableApp = DragDropContext(
  HTML5DragDropBackend
  // TouchDragDropBackend({ enableMouseEvents: true })
)(App);
