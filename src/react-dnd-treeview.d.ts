import Immutable from "immutable";
import React from "react";

export declare type NodeID = string;

export declare interface Node {
  readonly id: NodeID;
  readonly title: string;
  readonly collapsed?: boolean;
  readonly selected?: boolean;
  readonly childIDs?: Immutable.List<NodeID>;
}

export declare type NodeMap = Immutable.Map<NodeID, Node>;

export declare interface MoveNode {
  (
    oldParentNodeID: NodeID,
    oldParentChildIndex: number,
    nodeID: NodeID,
    newParentNodeID: NodeID,
    newParentChildIndex: number
  ): void;
}

export declare interface TreeViewClassNames {
  readonly treeView: string;
  readonly nodeList: string;
  readonly node: string;
  readonly nodePositioningWrapper: string;
  readonly nodeDragging: string;
  readonly nodeChildren: string;
}

export declare interface TreeViewProps {
  readonly nodes: NodeMap;
  readonly rootNodeIDs: Immutable.Iterable.Indexed<NodeID>;

  readonly classNames: TreeViewClassNames;

  readonly renderNode: (node: Node) => JSX.Element;
  readonly onMoveNode: MoveNode;
}

export declare const TreeView: React.Factory<TreeViewProps>;
