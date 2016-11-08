(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dnd"), require("immutable"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dnd", "immutable", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["react-dnd-treeview"] = factory(require("react"), require("react-dnd"), require("immutable"), require("classnames"));
	else
		root["react-dnd-treeview"] = factory(root["React"], root["react-dnd"], root["Immutable"], root["classnames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	exports.TreeView = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(3);
	
	var _Node = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TreeView = exports.TreeView = function TreeView(props) {
	      return _react2.default.createElement(
	            "div",
	            { className: props.classNames.treeView },
	            _react2.default.createElement(_Node.TreeViewItemList, { parentNode: null, nodes: props.rootNodes, renderNode: props.renderNode, classNames: props.classNames, onMoveNode: props.onMoveNode })
	      );
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DroppableTreeViewInsertTarget = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(4);
	
	var _DraggedNode = __webpack_require__(5);
	
	var _InsertTargetStyles = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TreeViewInsertTarget = function TreeViewInsertTarget(props) {
	    return props.connectDropTarget(_react2.default.createElement(
	        "div",
	        { style: Object.assign({}, props.insertBefore ? _InsertTargetStyles.Styles.insertBeforeTarget : _InsertTargetStyles.Styles.insertAfterTarget, props.canDrop ? _InsertTargetStyles.Styles.insertTargetCanDrop : {}, props.isDropping ? _InsertTargetStyles.Styles.insertTargetDropping : {}) },
	        _react2.default.createElement("div", { style: props.isDropping ? _InsertTargetStyles.Styles.insertTargetMarkerDropping : {} })
	    ));
	};
	var handleCanDrop = function handleCanDrop(props, monitor, item) {
	    return !(props.parentNode === item.parentNode && (props.parentChildIndex === item.parentChildIndex || props.parentChildIndex === item.parentChildIndex + 1)) && !item.allSourceIDs.contains(props.parentNode ? props.parentNode.id : null);
	};
	var handleDrop = function handleDrop(props, monitor, component, item) {
	    return props.onMoveNode({
	        oldParentNode: item.parentNode,
	        oldParentChildIndex: item.parentChildIndex,
	        oldPrecedingNode: item.precedingNode,
	        node: item.node,
	        newParentNode: props.parentNode,
	        newParentChildIndex: props.parentChildIndex,
	        newPrecedingNode: props.precedingNode
	    }), {
	        parentNode: props.parentNode,
	        parentChildIndex: props.parentChildIndex
	    };
	};
	var nodeTarget = {
	    drop: function drop(props, monitor, component) {
	        return monitor.didDrop() ? undefined // some child already handled drop
	        : handleDrop(props, monitor, component, monitor.getItem());
	    },
	    canDrop: function canDrop(props, monitor) {
	        return handleCanDrop(props, monitor, monitor.getItem());
	    }
	};
	var collectNodeDropProps = function collectNodeDropProps(connect, monitor) {
	    return {
	        connectDropTarget: connect.dropTarget(),
	        canDrop: monitor.canDrop(),
	        isDropping: monitor.isOver({ shallow: true }) && monitor.canDrop()
	    };
	};
	var DroppableTreeViewInsertTarget = exports.DroppableTreeViewInsertTarget = (0, _reactDnd.DropTarget)([_DraggedNode.TYPE], nodeTarget, collectNodeDropProps)(TreeViewInsertTarget);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TYPE = exports.TYPE = "TreeNode";

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var NormalStyles;
	(function (NormalStyles) {
	    NormalStyles.insertTarget = {
	        boxSizing: "border-box",
	        width: "100%",
	        height: "1em",
	        position: "absolute",
	        zIndex: 1,
	        display: "none"
	    };
	    NormalStyles.insertBeforeTarget = {
	        top: "-0.5em"
	    };
	    NormalStyles.insertAfterTarget = {
	        bottom: "-0.5em"
	    };
	    NormalStyles.insertTargetCanDrop = {
	        display: "flex"
	    };
	    NormalStyles.insertTargetDropping = {};
	    NormalStyles.insertTargetMarkerDropping = {
	        boxSizing: "border-box",
	        width: "100%",
	        height: "3px",
	        borderRadius: "2px",
	        background: "linear-gradient(90deg, gray, white)",
	        alignSelf: "center"
	    };
	})(NormalStyles || (NormalStyles = {}));
	var DebugStyles;
	(function (DebugStyles) {
	    DebugStyles.insertTarget = {
	        opacity: 0.5
	    };
	    DebugStyles.insertTargetCanDrop = {};
	    DebugStyles.insertTargetDropping = {
	        opacity: 0.9
	    };
	    DebugStyles.insertBeforeTarget = {
	        backgroundColor: "#ffffdd"
	    };
	    DebugStyles.insertAfterTarget = {
	        backgroundColor: "#ffddff"
	    };
	})(DebugStyles || (DebugStyles = {}));
	var isDebug = false;
	var Styles = exports.Styles = undefined;
	(function (Styles) {
	    Styles.insertBeforeTarget = Object.assign({}, NormalStyles.insertTarget, NormalStyles.insertBeforeTarget, isDebug ? DebugStyles.insertTarget : {}, isDebug ? DebugStyles.insertBeforeTarget : {});
	    Styles.insertAfterTarget = Object.assign({}, NormalStyles.insertTarget, NormalStyles.insertAfterTarget, isDebug ? DebugStyles.insertTarget : {}, isDebug ? DebugStyles.insertAfterTarget : {});
	    Styles.insertTargetCanDrop = Object.assign({}, NormalStyles.insertTargetCanDrop, isDebug ? DebugStyles.insertTargetCanDrop : {});
	    Styles.insertTargetDropping = Object.assign({}, NormalStyles.insertTargetDropping, isDebug ? DebugStyles.insertTargetDropping : {});
	    Styles.insertTargetMarkerDropping = NormalStyles.insertTargetMarkerDropping;
	})(Styles || (exports.Styles = Styles = {}));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TreeViewItemList = exports.DraggableTreeViewItem = undefined;
	
	var _immutable = __webpack_require__(8);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _classnames2 = __webpack_require__(9);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(4);
	
	var _DraggedNode = __webpack_require__(5);
	
	var _InsertTarget = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var TreeViewItem = function TreeViewItem(props) {
	    return props.connectDragSource(_react2.default.createElement(
	        "div",
	        { className: (0, _classnames3.default)(props.classNames.node, _defineProperty({}, props.classNames.nodeDragging, props.isDragging)), key: props.node.id },
	        _react2.default.createElement(
	            "div",
	            null,
	            props.renderNode(props.node)
	        ),
	        props.node.isCollapsed ? null : _react2.default.createElement(
	            "div",
	            { className: props.classNames.nodeChildren },
	            props.node.children && !props.node.children.items.isEmpty() ? _react2.default.createElement(TreeViewItemList, { parentNode: props.node, nodes: props.node.children ? props.node.children : { items: _immutable2.default.List() }, classNames: props.classNames, renderNode: props.renderNode, onMoveNode: props.onMoveNode }) : _react2.default.createElement(_InsertTarget.DroppableTreeViewInsertTarget, { insertBefore: false, parentNode: props.node, parentChildIndex: 0, precedingNode: null, onMoveNode: props.onMoveNode })
	        )
	    ));
	};
	var gatherNodeIDs = function gatherNodeIDs(node) {
	    return _immutable2.default.Set.of(node.id).union(node.children ? node.children.items.flatMap(gatherNodeIDs) : _immutable2.default.List()).toSet();
	};
	var nodeSource = {
	    beginDrag: function beginDrag(props, monitor, component) {
	        return {
	            node: props.node,
	            allSourceIDs: gatherNodeIDs(props.node),
	            parentNode: props.parentNode,
	            parentChildIndex: props.parentChildIndex,
	            precedingNode: props.precedingNode
	        };
	    }
	};
	var collectNodeDragProps = function collectNodeDragProps(connect, monitor) {
	    return {
	        connectDragSource: connect.dragSource(),
	        isDragging: monitor.isDragging()
	    };
	};
	var DraggableTreeViewItem = exports.DraggableTreeViewItem = (0, _reactDnd.DragSource)(_DraggedNode.TYPE, nodeSource, collectNodeDragProps)(TreeViewItem);
	var nodesWithPredecessors = function nodesWithPredecessors(nodes) {
	    return nodes.toIndexedSeq().zipWith(function (node, predecessor) {
	        return { node: node, precedingNode: predecessor };
	    }, _immutable2.default.Seq.of(null).concat(nodes));
	};
	// TODO: add a mechanism to apply the CSS equivalent:
	// .nodePositioningWrapper:hover {
	//   /* otherwise drop targets interfere with drag start */
	//   z-index: 2;
	// }
	var TreeViewItemList = exports.TreeViewItemList = function TreeViewItemList(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: props.classNames.nodeList },
	        nodesWithPredecessors(props.nodes.items).map(function (node, index) {
	            return _react2.default.createElement(
	                "div",
	                { key: node.node.id, style: { position: "relative" }, className: props.classNames.nodePositioningWrapper },
	                index === 0 ? _react2.default.createElement(_InsertTarget.DroppableTreeViewInsertTarget, { insertBefore: true, parentNode: props.parentNode, parentChildIndex: index, precedingNode: null, onMoveNode: props.onMoveNode }) : null,
	                _react2.default.createElement(_InsertTarget.DroppableTreeViewInsertTarget, { insertBefore: false, parentNode: props.parentNode, parentChildIndex: index + 1, precedingNode: node.node, onMoveNode: props.onMoveNode }),
	                _react2.default.createElement(DraggableTreeViewItem, { parentNode: props.parentNode, parentChildIndex: index, precedingNode: node.precedingNode, node: node.node, classNames: props.classNames, renderNode: props.renderNode, onMoveNode: props.onMoveNode })
	            );
	        })
	    );
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-dnd-treeview.js.map