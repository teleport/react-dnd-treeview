import Immutable from "immutable";

import { TreeNode, TreeNodeID } from "./react-dnd-treeview.d.ts";

export const TYPE = "TreeNode";

export interface DraggedNode {
  node: TreeNode;
  allSourceIDs: Immutable.Set<TreeNodeID>;
  parentNode: TreeNode;
  parentChildIndex: number;
  precedingNode: TreeNode;
}
