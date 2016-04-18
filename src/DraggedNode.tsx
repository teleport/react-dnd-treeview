import Immutable from "immutable";

import { NodeID } from "./react-dnd-treeview.d.ts";

export const TYPE = "Node";

export interface DraggedNode {
  sourceID: NodeID;
  allSourceIDs: Immutable.Set<NodeID>;
  parentNodeID: NodeID;
  parentChildIndex: number;
}
