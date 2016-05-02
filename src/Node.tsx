import Immutable from "immutable";
import classnames from "classnames";
import React from "react";
import {
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSourceSpec,
  ConnectDragSource,
} from "react-dnd";

import { Node, NodeID, MoveNode, TreeViewClassNames } from "./react-dnd-treeview.d.ts";
import { DraggedNode, TYPE } from "./DraggedNode";
import { DroppableTreeViewInsertTarget } from "./InsertTarget";

const styles = require("./styles.css");

export interface TreeViewNode {
  readonly parentNodeID: NodeID;
  readonly parentChildIndex: number;
  readonly id: NodeID;
  readonly collapsed?: boolean;
  readonly children: Immutable.Iterable.Indexed<TreeViewNode>;
  readonly node: Node;
}

export interface TreeViewItemProps {
  readonly node: TreeViewNode;
  readonly classNames: TreeViewClassNames;
  readonly renderNode: (node: Node) => JSX.Element;
  readonly onMoveNode: MoveNode;
}

interface TreeViewItemDragProps {
  readonly connectDragSource: ConnectDragSource;
  readonly isDragging: boolean;
}

const TreeViewItem: (props: TreeViewItemProps & TreeViewItemDragProps) => React.ReactElement<TreeViewItemProps> =
  (props) => (
    props.connectDragSource<TreeViewItemProps>(
      <div
        className={
          classnames(props.classNames.node, {
            [props.classNames.nodeDragging]: props.isDragging,
          }) }
        key={ props.node.id }
        >
        <div>
          { props.renderNode(props.node.node) }
        </div>
        {
          props.node.collapsed
            ? null
            :
            <div className={ props.classNames.nodeChildren }>
              { !props.node.children.isEmpty()
                ? <TreeViewItemList
                  nodes={ props.node.children }
                  classNames={ props.classNames }
                  renderNode={ props.renderNode }
                  onMoveNode={ props.onMoveNode }
                  />
                : null }
            </div>
        }
      </div>
    )
  );

const gatherNodeIDs = (node: TreeViewNode): Immutable.Set<NodeID> =>
  Immutable.Set.of(node.id).union(node.children.flatMap(gatherNodeIDs)).toSet();

const nodeSource: DragSourceSpec<TreeViewItemProps> = {
  beginDrag: (props, monitor, component) => ({
    sourceID: props.node.id,
    allSourceIDs: gatherNodeIDs(props.node),
    parentNodeID: props.node.parentNodeID,
    parentChildIndex: props.node.parentChildIndex,
  } as DraggedNode),
};

const collectNodeDragProps: (connect: DragSourceConnector, monitor: DragSourceMonitor) => TreeViewItemDragProps =
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  });

export const DraggableTreeViewItem = DragSource(TYPE, nodeSource, collectNodeDragProps)(TreeViewItem);

export interface TreeViewItemListProps {
  readonly nodes: Immutable.Iterable.Indexed<TreeViewNode>;
  readonly renderNode: (node: Node) => JSX.Element;
  readonly classNames: TreeViewClassNames;
  readonly onMoveNode: MoveNode;
}

export const TreeViewItemList = (props: TreeViewItemListProps) => (
  <div className={ props.classNames.nodeList }>
    {
      props.nodes.map((node, index) =>
        <div
          key={ node.id }
          className={ classnames(styles.nodePositioningWrapper, props.classNames.nodePositioningWrapper) }
          >
          {
            index === 0
              ? <DroppableTreeViewInsertTarget
                insertBefore={ true }
                parentNodeID={ node.parentNodeID }
                parentChildIndex={ index }
                onMoveNode={ props.onMoveNode }
                />
              : null
          }
          <DroppableTreeViewInsertTarget
            insertBefore={ false }
            parentNodeID={ node.parentNodeID }
            parentChildIndex={ index + 1 }
            onMoveNode={ props.onMoveNode }
            />
          <DraggableTreeViewItem
            node={ node }
            classNames={ props.classNames }
            renderNode={ props.renderNode }
            onMoveNode={ props.onMoveNode }
            />
        </div>
      )
    }
  </div>
);
