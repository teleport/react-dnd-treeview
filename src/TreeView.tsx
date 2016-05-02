import React from "react";
import Immutable from "immutable";
import {
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSourceSpec,
  ConnectDragSource,
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  DropTargetSpec,
  ConnectDropTarget,
} from "react-dnd";

import { NodeMap, Node, NodeID, TreeViewProps } from "./react-dnd-treeview.d.ts";
import "./InsertTarget";
import { TreeViewNode, TreeViewItemList } from "./Node";


function buildTreeViewNodeList(
  nodes: NodeMap,
  nodeIDs: Immutable.Iterable.Indexed<NodeID>,
  parentNodeID: NodeID): Immutable.Iterable.Indexed<TreeViewNode> {
  return (nodeIDs || Immutable.List()).map((id, index) =>
    ((node: Node) =>
      ({
        node,
        parentNodeID,
        parentChildIndex: index,
        id,
        collapsed: node.collapsed,
        children: buildTreeViewNodeList(nodes, node.childIDs, id),
      })
    )(nodes.get(id))
  ).toIndexedSeq();
}

export const TreeView: React.Factory<TreeViewProps> =
  (props: TreeViewProps) => (
    <div className={ props.classNames.treeView }>
      <TreeViewItemList
        nodes={ buildTreeViewNodeList(props.nodes, props.rootNodeIDs, null) }
        renderNode={ props.renderNode }
        classNames={ props.classNames }
        onMoveNode={ props.onMoveNode }
        />
    </div>
  );
