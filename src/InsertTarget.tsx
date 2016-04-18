import classnames from "classnames";
import React from "react";
import {
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  DropTargetSpec,
  ConnectDropTarget,
} from "react-dnd";

import { NodeID, MoveNode } from "./react-dnd-treeview.d.ts";
import { TYPE, DraggedNode } from "./DraggedNode";

const styles = require("./styles.css");

export interface TreeViewInsertTargetProps {
  readonly parentNodeID: NodeID;
  readonly parentChildIndex: number;
  readonly insertBefore: boolean;
  readonly onMoveNode: MoveNode;
}

interface TreeViewInsertTargetDropProps {
  readonly connectDropTarget: ConnectDropTarget;
  readonly canDrop: boolean;
  readonly isDropping: boolean;
}

const TreeViewInsertTarget = (props: TreeViewInsertTargetProps & TreeViewInsertTargetDropProps) =>
  props.connectDropTarget(
    <div
      className={
        classnames(
          props.insertBefore ? styles.insertBeforeTarget : styles.insertAfterTarget,
          {
            [styles.insertTargetCanDrop]: props.canDrop,
            [styles.insertTargetDropping]: props.isDropping,
          }
        )
      }>
      <div className={ styles.insertTargetMarker } />
    </div>
  );

const handleCanDrop = (
  props: TreeViewInsertTargetProps,
  monitor: DropTargetMonitor,
  item: DraggedNode
) => (
    !(
      props.parentNodeID === item.parentNodeID &&
      (
        props.parentChildIndex === item.parentChildIndex ||
        props.parentChildIndex === item.parentChildIndex + 1
      )
    ) &&
    !item.allSourceIDs.contains(props.parentNodeID)
  );

const handleDrop = (
  props: TreeViewInsertTargetProps,
  monitor: DropTargetMonitor,
  component: React.Component<TreeViewInsertTargetProps, any>,
  item: DraggedNode
) => (
    console.log("Dropped", monitor.getItem(), "before", props.parentNodeID, "child", props.parentChildIndex),
    props.onMoveNode(
      item.parentNodeID,
      item.parentChildIndex,
      item.sourceID,
      props.parentNodeID,
      props.parentChildIndex
    ),
    ({
      parentNodeID: props.parentNodeID,
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

export const DroppableTreeViewInsertTarget =
  DropTarget([TYPE], nodeTarget, collectNodeDropProps)(TreeViewInsertTarget);
