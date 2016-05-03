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

import { TreeNode, TreeNodeID, TreeViewProps } from "./react-dnd-treeview.d.ts";
import "./InsertTarget";
import { TreeViewItemList } from "./Node";


export const TreeView: React.Factory<TreeViewProps> =
  (props: TreeViewProps) => (
    <div className={ props.classNames.treeView }>
      <TreeViewItemList
        parentNode={ null }
        nodes={ props.rootNodes }
        renderNode={ props.renderNode }
        classNames={ props.classNames }
        onMoveNode={ props.onMoveNode }
        />
    </div>
  );
