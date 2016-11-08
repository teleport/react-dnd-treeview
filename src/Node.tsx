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

import { TreeNode, TreeNodeID, TreeNodeList, MoveTreeNode, TreeViewClassNames } from "./react-dnd-treeview.d.ts";
import { DraggedNode, TYPE } from "./DraggedNode";
import { DroppableTreeViewInsertTarget } from "./InsertTarget";

export interface TreeViewItemProps {
  readonly parentNode: TreeNode;
  readonly parentChildIndex: number;
  readonly precedingNode: TreeNode;
  readonly node: TreeNode;
  readonly classNames: TreeViewClassNames;
  readonly renderNode: (node: TreeNode) => JSX.Element;
  readonly onMoveNode: MoveTreeNode;
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
          { props.renderNode(props.node) }
        </div>
        {
          props.node.isCollapsed
            ? null
            :
            <div className={ props.classNames.nodeChildren }>
              { props.node.children && !props.node.children.items.isEmpty()
                ? <TreeViewItemList
                  parentNode={ props.node }
                  nodes={ props.node.children ? props.node.children : { items: Immutable.List<TreeNode>() } }
                  classNames={ props.classNames }
                  renderNode={ props.renderNode }
                  onMoveNode={ props.onMoveNode }
                  /> 
                : <DroppableTreeViewInsertTarget
                  insertBefore={ false }
                  parentNode={ props.node }
                  parentChildIndex={ 0 }
                  precedingNode={ null }
                  onMoveNode={ props.onMoveNode }
                  /> }
            </div>
        }
      </div>
    )
  );

const gatherNodeIDs = (node: TreeNode): Immutable.Set<TreeNodeID> =>
  Immutable.Set.of(node.id).union(node.children ? node.children.items.flatMap(gatherNodeIDs) : Immutable.List<string>()).toSet();

const nodeSource: DragSourceSpec<TreeViewItemProps> = {
  beginDrag: (props, monitor, component) => ({
    node: props.node,
    allSourceIDs: gatherNodeIDs(props.node),
    parentNode: props.parentNode,
    parentChildIndex: props.parentChildIndex,
    precedingNode: props.precedingNode,
  } as DraggedNode),
};

const collectNodeDragProps: (connect: DragSourceConnector, monitor: DragSourceMonitor) => TreeViewItemDragProps =
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  });

export const DraggableTreeViewItem: React.ComponentClass<TreeViewItemProps> = 
  DragSource(TYPE, nodeSource, collectNodeDragProps)(TreeViewItem);

export interface TreeViewItemListProps {
  readonly parentNode: TreeNode;
  readonly nodes: TreeNodeList;
  readonly renderNode: (node: TreeNode) => JSX.Element;
  readonly classNames: TreeViewClassNames;
  readonly onMoveNode: MoveTreeNode;
}

const nodesWithPredecessors = (nodes: Immutable.Iterable<number, TreeNode>):
  Immutable.Iterable<number, { node: TreeNode, precedingNode: TreeNode }> =>
  nodes
    .toIndexedSeq()
    .zipWith(
    (node, predecessor) => ({ node, precedingNode: predecessor }),
    Immutable.Seq.of<TreeNode>(null)
      .concat(nodes)
    );

// TODO: add a mechanism to apply the CSS equivalent:
// .nodePositioningWrapper:hover {
//   /* otherwise drop targets interfere with drag start */
//   z-index: 2;
// }

export const TreeViewItemList = (props: TreeViewItemListProps) => (
  <div className={ props.classNames.nodeList }>
    {
      nodesWithPredecessors(props.nodes.items).map((node, index) =>
        <div
          key={ node.node.id }
          style={ { position: "relative" } }
          className={ props.classNames.nodePositioningWrapper }
          >
          {
            index === 0
              ? <DroppableTreeViewInsertTarget
                insertBefore={ true }
                parentNode={ props.parentNode }
                parentChildIndex={ index }
                precedingNode={ null }
                onMoveNode={ props.onMoveNode }
                />
              : null
          }
          <DroppableTreeViewInsertTarget
            insertBefore={ false }
            parentNode={ props.parentNode }
            parentChildIndex={ index + 1 }
            precedingNode={ node.node }
            onMoveNode={ props.onMoveNode }
            />
          <DraggableTreeViewItem
            parentNode={ props.parentNode }
            parentChildIndex={ index }
            precedingNode={ node.precedingNode }
            node={ node.node }
            classNames={ props.classNames }
            renderNode={ props.renderNode }
            onMoveNode={ props.onMoveNode }
            />
        </div>
      )
    }
  </div>
);
