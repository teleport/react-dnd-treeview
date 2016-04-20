(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("immutable"), require("classnames"), require("react-dnd"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "immutable", "classnames", "react-dnd"], factory);
	else if(typeof exports === 'object')
		exports["react-dnd-treeview"] = factory(require("react"), require("immutable"), require("classnames"), require("react-dnd"));
	else
		root["react-dnd-treeview"] = factory(root["React"], root["Immutable"], root["classnames"], root["react-dnd"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TreeView = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	__webpack_require__(4);
	
	var _Node = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function buildTreeViewNodeList(nodes, nodeIDs, parentNodeID) {
	    return (nodeIDs || _immutable2.default.List()).map(function (id, index) {
	        return function (node) {
	            return {
	                node: node,
	                parentNodeID: parentNodeID,
	                parentChildIndex: index,
	                id: id,
	                title: node.title,
	                collapsed: node.collapsed,
	                selected: node.selected,
	                children: buildTreeViewNodeList(nodes, node.childIDs, id)
	            };
	        }(nodes.get(id));
	    }).toIndexedSeq();
	}
	var TreeView = exports.TreeView = function TreeView(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: props.classNames.treeView },
	        _react2.default.createElement(_Node.TreeViewItemList, { nodes: buildTreeViewNodeList(props.nodes, props.rootNodeIDs, null), renderNode: props.renderNode, classNames: props.classNames, onMoveNode: props.onMoveNode })
	    );
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TreeView.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DroppableTreeViewInsertTarget = undefined;
	
	var _classnames2 = __webpack_require__(5);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(6);
	
	var _DraggedNode = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var styles = __webpack_require__(8);
	var TreeViewInsertTarget = function TreeViewInsertTarget(props) {
	    var _classnames;
	
	    return props.connectDropTarget(_react2.default.createElement(
	        "div",
	        { className: (0, _classnames3.default)(props.insertBefore ? styles.insertBeforeTarget : styles.insertAfterTarget, (_classnames = {}, _defineProperty(_classnames, styles.insertTargetCanDrop, props.canDrop), _defineProperty(_classnames, styles.insertTargetDropping, props.isDropping), _classnames)) },
	        _react2.default.createElement("div", { className: styles.insertTargetMarker })
	    ));
	};
	var handleCanDrop = function handleCanDrop(props, monitor, item) {
	    return !(props.parentNodeID === item.parentNodeID && (props.parentChildIndex === item.parentChildIndex || props.parentChildIndex === item.parentChildIndex + 1)) && !item.allSourceIDs.contains(props.parentNodeID);
	};
	var handleDrop = function handleDrop(props, monitor, component, item) {
	    return console.log("Dropped", monitor.getItem(), "before", props.parentNodeID, "child", props.parentChildIndex), props.onMoveNode(item.parentNodeID, item.parentChildIndex, item.sourceID, props.parentNodeID, props.parentChildIndex), {
	        parentNodeID: props.parentNodeID,
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "InsertTarget.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TYPE = exports.TYPE = "Node";
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DraggedNode.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!./styles.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".styles__nodePositioningWrapper___3kWuO {\r\n  position: relative;\r\n}\r\n\r\n.styles__nodePositioningWrapper___3kWuO:hover {\r\n  /* otherwise drop targets interfere with drag start */\r\n  z-index: 2;\r\n}\r\n\r\n.styles__insertBeforeTarget___28T-u, .styles__insertAfterTarget___3OIXV {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 1em;\r\n  position: absolute;\r\n  z-index: 1;\r\n  display: none;\r\n}\r\n\r\n.styles__insertBeforeTarget___28T-u {\r\n  top: -0.5em;\r\n}\r\n\r\n.styles__insertAfterTarget___3OIXV {\r\n  bottom: -0.5em;\r\n}\r\n\r\n.styles__insertTargetCanDrop___1U760 {\r\n  display: flex;\r\n}\r\n\r\n.styles__insertTargetDropping___2_on4 .styles__insertTargetMarker___8V9Bh {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 3px;\r\n  border-radius: 2px;\r\n  background: linear-gradient(90deg, gray, white);\r\n  align-self: center;\r\n}\r\n\r\n/* Debugging */\r\n\r\n/*\r\n.insertBeforeTarget, .insertAfterTarget {\r\n  opacity: 0.5;\r\n}\r\n\r\n.insertTargetDropping {\r\n  opacity: 0.9;\r\n}\r\n\r\n.insertBeforeTarget {\r\n  background-color: #ffffdd;\r\n}\r\n\r\n.insertAfterTarget {\r\n  background-color: #ffddff;\r\n}\r\n*/\r\n", "", {"version":3,"sources":["/./src/styles.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB;;AAED;EACE,sDAAsD;EACtD,WAAW;CACZ;;AAED;EACE,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,cAAc;CACf;;AAED;EACE,YAAY;CACb;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,gDAAgD;EAChD,mBAAmB;CACpB;;AAED,eAAe;;AAEf;;;;;;;;;;;;;;;;EAgBE","file":"styles.css","sourcesContent":[".nodePositioningWrapper {\r\n  position: relative;\r\n}\r\n\r\n.nodePositioningWrapper:hover {\r\n  /* otherwise drop targets interfere with drag start */\r\n  z-index: 2;\r\n}\r\n\r\n.insertBeforeTarget, .insertAfterTarget {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 1em;\r\n  position: absolute;\r\n  z-index: 1;\r\n  display: none;\r\n}\r\n\r\n.insertBeforeTarget {\r\n  top: -0.5em;\r\n}\r\n\r\n.insertAfterTarget {\r\n  bottom: -0.5em;\r\n}\r\n\r\n.insertTargetCanDrop {\r\n  display: flex;\r\n}\r\n\r\n.insertTargetDropping .insertTargetMarker {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 3px;\r\n  border-radius: 2px;\r\n  background: linear-gradient(90deg, gray, white);\r\n  align-self: center;\r\n}\r\n\r\n/* Debugging */\r\n\r\n/*\r\n.insertBeforeTarget, .insertAfterTarget {\r\n  opacity: 0.5;\r\n}\r\n\r\n.insertTargetDropping {\r\n  opacity: 0.9;\r\n}\r\n\r\n.insertBeforeTarget {\r\n  background-color: #ffffdd;\r\n}\r\n\r\n.insertAfterTarget {\r\n  background-color: #ffddff;\r\n}\r\n*/\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"nodePositioningWrapper": "styles__nodePositioningWrapper___3kWuO",
		"insertBeforeTarget": "styles__insertBeforeTarget___28T-u",
		"insertAfterTarget": "styles__insertAfterTarget___3OIXV",
		"insertTargetCanDrop": "styles__insertTargetCanDrop___1U760",
		"insertTargetDropping": "styles__insertTargetDropping___2_on4",
		"insertTargetMarker": "styles__insertTargetMarker___8V9Bh"
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TreeViewItemList = exports.DraggableTreeViewItem = undefined;
	
	var _immutable = __webpack_require__(3);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _classnames2 = __webpack_require__(5);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(6);
	
	var _DraggedNode = __webpack_require__(7);
	
	var _InsertTarget = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var styles = __webpack_require__(8);
	var TreeViewItem = function TreeViewItem(props) {
	    return props.connectDragSource(_react2.default.createElement(
	        "div",
	        { className: (0, _classnames3.default)(props.classNames.node, _defineProperty({}, props.classNames.nodeDragging, props.isDragging)), key: props.node.id },
	        _react2.default.createElement(
	            "div",
	            null,
	            props.renderNode(props.node.node)
	        ),
	        props.node.collapsed ? null : _react2.default.createElement(
	            "div",
	            { className: props.classNames.nodeChildren },
	            !props.node.children.isEmpty() ? _react2.default.createElement(TreeViewItemList, { nodes: props.node.children, classNames: props.classNames, renderNode: props.renderNode, onMoveNode: props.onMoveNode }) : null
	        )
	    ));
	};
	var gatherNodeIDs = function gatherNodeIDs(node) {
	    return _immutable2.default.Set.of(node.id).union(node.children.flatMap(gatherNodeIDs)).toSet();
	};
	var nodeSource = {
	    beginDrag: function beginDrag(props, monitor, component) {
	        return {
	            sourceID: props.node.id,
	            allSourceIDs: gatherNodeIDs(props.node),
	            parentNodeID: props.node.parentNodeID,
	            parentChildIndex: props.node.parentChildIndex
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
	var TreeViewItemList = exports.TreeViewItemList = function TreeViewItemList(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: props.classNames.nodeList },
	        props.nodes.map(function (node, index) {
	            return _react2.default.createElement(
	                "div",
	                { key: node.id, className: (0, _classnames3.default)(styles.nodePositioningWrapper, props.classNames.nodePositioningWrapper) },
	                index === 0 ? _react2.default.createElement(_InsertTarget.DroppableTreeViewInsertTarget, { insertBefore: true, parentNodeID: node.parentNodeID, parentChildIndex: index, onMoveNode: props.onMoveNode }) : null,
	                _react2.default.createElement(_InsertTarget.DroppableTreeViewInsertTarget, { insertBefore: false, parentNodeID: node.parentNodeID, parentChildIndex: index + 1, onMoveNode: props.onMoveNode }),
	                _react2.default.createElement(DraggableTreeViewItem, { node: node, classNames: props.classNames, renderNode: props.renderNode, onMoveNode: props.onMoveNode })
	            );
	        })
	    );
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Teleport\\src\\react-dnd-treeview\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Node.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-dnd-treeview.js.map