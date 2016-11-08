import React from "react";
import {
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  DropTargetSpec,
  ConnectDropTarget,
} from "react-dnd";

import { TreeNode, TreeNodeID, MoveTreeNode } from "./react-dnd-treeview.d.ts";
import { TYPE, DraggedNode } from "./DraggedNode";
import { Styles } from "./InsertTarget.styles.ts";

export interface TreeViewInsertTargetProps {
  readonly parentNode: TreeNode;
  readonly parentChildIndex: number;
  readonly precedingNode: TreeNode;
  readonly insertBefore: boolean;
  readonly onMoveNode: MoveTreeNode;
}

interface TreeViewInsertTargetDropProps {
  readonly connectDropTarget: ConnectDropTarget;
  readonly canDrop: boolean;
  readonly isDropping: boolean;
}

const TreeViewInsertTarget = (props: TreeViewInsertTargetProps & TreeViewInsertTargetDropProps) =>
  props.connectDropTarget(
    <div
      style={
        Object.assign(
          {},
          props.insertBefore ? Styles.insertBeforeTarget : Styles.insertAfterTarget,
          props.canDrop ? Styles.insertTargetCanDrop : {},
          props.isDropping ? Styles.insertTargetDropping : {}
        )
      }
      >
      <div style={ props.isDropping ? Styles.insertTargetMarkerDropping : {} } />
    </div>
  );

const handleCanDrop = (
  props: TreeViewInsertTargetProps,
  monitor: DropTargetMonitor,
  item: DraggedNode
) => (
    !(
      props.parentNode === item.parentNode &&
      (
        props.parentChildIndex === item.parentChildIndex ||
        props.parentChildIndex === item.parentChildIndex + 1
      )
    ) &&
    !item.allSourceIDs.contains(props.parentNode ? props.parentNode.id : null)
  );

const handleDrop = (
  props: TreeViewInsertTargetProps,
  monitor: DropTargetMonitor,
  component: React.Component<TreeViewInsertTargetProps, any>,
  item: DraggedNode
) => (
    props.onMoveNode({
      oldParentNode: item.parentNode,
      oldParentChildIndex: item.parentChildIndex,
      oldPrecedingNode: item.precedingNode,
      node: item.node,
      newParentNode: props.parentNode,
      newParentChildIndex: props.parentChildIndex,
      newPrecedingNode: props.precedingNode,
    }),
    ({
      parentNode: props.parentNode,
      parentChildIndex: props.parentChildIndex,
    })
  );

const nodeTarget: DropTargetSpec<TreeViewInsertTargetProps> = {
  drop: (props, monitor, component) => monitor.didDrop()
    ? undefined // some child already handled drop
    : handleDrop(props, monitor, component, monitor.getItem() as DraggedNode),
  canDrop: (props, monitor) => handleCanDrop(props, monitor, monitor.getItem() as DraggedNode),
};

const collectNodeDropProps =
  (connect: DropTargetConnector, monitor: DropTargetMonitor): TreeViewInsertTargetDropProps => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isDropping: monitor.isOver({ shallow: true }) && monitor.canDrop(),
  });

export const DroppableTreeViewInsertTarget: React.ComponentClass<TreeViewInsertTargetProps> =
  DropTarget([TYPE], nodeTarget, collectNodeDropProps)(TreeViewInsertTarget);
