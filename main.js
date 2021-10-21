/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/doodles.png */ \"./src/assets/imgs/doodles.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 95vh;\\n  width: 95vw;\\n  display: grid;\\n  grid-template-columns: 4fr 1fr;\\n  grid-template-rows: 1fr 4fr;\\n  justify-content: center;\\n  align-items: center;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n#container {\\n  display: flex;\\n  margin: 1%;\\n  border: solid rgb(136, 196, 67);\\n  background-color: rgba(195, 235, 149, 0.863);\\n}\\n\\n/*header*/\\nheader {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  grid-column: 1 / 3;\\n  border: solid red;\\n  padding: 15px;\\n  gap: 5px;\\n}\\n\\nh1 {\\n  font-family: 'Cedarville Cursive', cursive;\\n  font-size: 3em;\\n  background-color: white;\\n  border-radius: 50%;\\n  padding: 5px;\\n}\\n\\nhr {\\n  width: 100%;\\n  color: red;\\n}\\n\\n#project-button,\\n#todo-button {\\n  font-size: medium;\\n  font-weight: bold;\\n  border-radius: 30%;\\n  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 1);\\n  background-color: rgba(195, 235, 149, 0.863);\\n  border: solid rgb(136, 196, 67);\\n}\\n\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n/*projects*/\\n#project-container {\\n  margin: 0.5em;\\n  padding: 0.5em;\\n  border: solid rgb(136, 196, 67);\\n}\\n\\nli {\\n  margin: 5px;\\n  padding: 5px;\\n  gap: 5px;\\n}\\n\\nli:hover {\\n  color: purple;\\n  cursor: pointer;\\n}\\n\\n.project-delete {\\n  margin: 10px;\\n  padding: 5px;\\n  background-color: red;\\n}\\n\\n.selected {\\n  background-color: rgb(136, 196, 67);\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\\n}\\n\\n/*todos*/\\n#todo-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: 0.5em;\\n  padding: 0.5em;\\n  border: solid rgb(136, 196, 67);\\n}\\n\\n.todo {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0.5em;\\n  padding: 0.5em;\\n  gap: 0.5em;\\n  border: dashed red;\\n  border-radius: 10%;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\\n}\\n\\n.todo:hover {\\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);\\n}\\n\\n.todo-delete {\\n  align-self: flex-end;\\n  background-color: red;\\n}\\n\\nh4:hover {\\n  color: purple;\\n  cursor: pointer;\\n}\\n\\n.todo-priority-button {\\n  color: yellow;\\n}\\n\\n.description {\\n  background-color: rgba(195, 235, 149, 0.863);\\n  border: solid rgb(136, 196, 67);\\n  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5);\\n}\\n\\n/*forms*/\\n#form-div {\\n  margin: 0.5em;\\n  padding: 0.5em;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0.5em;\\n  padding: 0.5em;\\n  gap: 0.5em;\\n  border: solid red;\\n  background-color: white;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n\\n.visible {\\n  visibility: visible;\\n}\\n\\n/*footer*/\\nfooter {\\n  position: absolute;\\n  bottom: 0;\\n  font: bold italic 1.4em monospace;\\n  color: white;\\n  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/imgs/doodles.png":
/*!*************************************!*\
  !*** ./src/assets/imgs/doodles.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57a1b264e490f59edba1.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/imgs/doodles.png?");

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectListItem\": () => (/* binding */ projectListItem),\n/* harmony export */   \"todoItem\": () => (/* binding */ todoItem),\n/* harmony export */   \"defaultStart\": () => (/* binding */ defaultStart)\n/* harmony export */ });\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete */ \"./src/components/complete.js\");\n/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation */ \"./src/components/creation.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/components/projects.js\");\n\n\n\n\n// dynamically change todo container contents on different project selection\nconst dynamicTodoContainer = (project) => {\n  // clear container\n  while (todoContainer.firstElementChild) {\n    todoContainer.removeChild(todoContainer.firstElementChild);\n  }\n  // fill container\n  for (let i = 0; i < project.todos.length; i++) {\n    todoItem(project.todos[i]);\n  }\n};\n\n// set active project list item\nconst setActiveLi = (li) => {\n  li.classList.add('selected');\n};\n\nconst resetActiveLi = () => {\n  document.querySelectorAll('.selected').forEach((listItem) => {\n    listItem.classList.remove('selected');\n  });\n};\n\n// Projects\nconst newProjectButton = document.querySelector('#project-button');\nconst projectList = document.querySelector('#project-list');\nconst projectForm = document.querySelector('#project-form');\nconst projectFormSubmit = document.querySelector('#project-form-submit');\n\nnewProjectButton.addEventListener('click', () => {\n  projectForm.classList.toggle('visible');\n});\n\nprojectFormSubmit.addEventListener('click', () => {\n  projectForm.classList.toggle('visible');\n  const project = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createProject)(document.querySelector('#project-title').value);\n  projectListItem(project);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectAdd)(project);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(project);\n  dynamicTodoContainer(project);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n});\n\nconst projectListItem = (project) => {\n  const newProjectListItem = document.createElement('li');\n  resetActiveLi();\n  setActiveLi(newProjectListItem);\n  newProjectListItem.textContent = project.title;\n  newProjectListItem.addEventListener('click', () => {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(project);\n    dynamicTodoContainer(project);\n    resetActiveLi();\n    setActiveLi(newProjectListItem);\n  });\n  const projectDelete = document.createElement('button');\n  projectDelete.classList.add('project-delete');\n  projectDelete.textContent = 'DEL';\n  projectDelete.addEventListener('click', () => {\n    // dynamicCurrentProject(project, newProjectListItem);\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectRemove)(project);\n    projectList.removeChild(newProjectListItem);\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newProjectListItem.appendChild(projectDelete);\n  projectList.appendChild(newProjectListItem);\n};\n\n// Todos\nconst newTodoButton = document.querySelector('#todo-button');\nconst todoContainer = document.querySelector('#todo-container');\nconst todoForm = document.querySelector('#todo-form');\nconst todoFormSubmit = document.querySelector('#todo-form-submit');\n\nnewTodoButton.addEventListener('click', () => {\n  todoForm.classList.toggle('visible');\n});\n\ntodoFormSubmit.addEventListener('click', () => {\n  todoForm.classList.toggle('visible');\n  const todo = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    document.querySelector('#priority').checked,\n    document.querySelector('#title').value,\n    document.querySelector('#description').value,\n    document.querySelector('#due-date').value\n  ); // aka everything in the todo form\n  todoItem(todo);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addTodoToCurrentProject)(todo);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n});\n\nconst todoItem = (todo) => {\n  // card\n  const newTodoCard = document.createElement('div');\n  newTodoCard.classList.add('todo');\n  // delete button\n  const todoDelete = document.createElement('button');\n  todoDelete.classList.add('todo-delete');\n  todoDelete.textContent = 'X';\n  todoDelete.addEventListener('click', () => {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.removeTodoFromCurrentProject)(todo);\n    todoContainer.removeChild(newTodoCard);\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newTodoCard.appendChild(todoDelete);\n  // title\n  const todoTitle = document.createElement('h4');\n  todoTitle.textContent = todo.title;\n  if (todo.complete == true) {\n    todoTitle.style.textDecoration = 'line-through';\n  }\n  todoTitle.addEventListener('click', () => {\n    if (todo.complete == false) {\n      todoTitle.style.textDecoration = 'line-through';\n      (0,_complete__WEBPACK_IMPORTED_MODULE_0__.complete)(todo);\n    } else {\n      todoTitle.style.textDecoration = 'none';\n      (0,_complete__WEBPACK_IMPORTED_MODULE_0__.undoComplete)(todo);\n    }\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newTodoCard.appendChild(todoTitle);\n  // priority\n  const todoPriority = document.createElement('button');\n  todoPriority.classList.add('todo-priority-button');\n  if (todo.priority == true) {\n    todoPriority.style.backgroundColor = 'red';\n    todoPriority.textContent = 'HIGH PRIORITY!';\n  } else {\n    todoPriority.style.backgroundColor = 'green';\n    todoPriority.textContent = 'Low Priority';\n  }\n  todoPriority.addEventListener('click', () => {\n    if (todo.priority == true) {\n      todoPriority.style.backgroundColor = 'green';\n      todoPriority.textContent = 'Low Priority';\n      todo.priority = false;\n    } else {\n      todoPriority.style.backgroundColor = 'red';\n      todoPriority.textContent = 'HIGH PRIORITY!';\n      todo.priority = true;\n    }\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newTodoCard.appendChild(todoPriority);\n  // description\n  const todoDescription = document.createElement('button');\n  todoDescription.classList.add('description');\n  todoDescription.textContent = 'Description';\n  todoDescription.addEventListener('click', () => {\n    alert(todo.description);\n  });\n  newTodoCard.appendChild(todoDescription);\n  // duedate\n  const todoDueDate = document.createElement('h5');\n  todoDueDate.textContent = todo.dueDate;\n  newTodoCard.appendChild(todoDueDate);\n  // card\n  todoContainer.appendChild(newTodoCard);\n};\n\n// Default starting project & todos using the same processes as above\nconst defaultStart = () => {\n  // default project set up\n  const defaultProject = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createProject)('Default Project');\n  projectListItem(defaultProject);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectAdd)(defaultProject);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(defaultProject);\n\n  // default todos set up\n  // 1\n  const defaultTodoOne = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    true,\n    'Default Todo #1',\n    'Take care of task one',\n    '1/1/2021'\n  );\n  todoItem(defaultTodoOne);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addTodoToCurrentProject)(defaultTodoOne);\n  // 2\n  const defaultTodoTwo = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    false,\n    'Default Todo #2',\n    'Take care of task two',\n    '1/1/2022'\n  );\n  todoItem(defaultTodoTwo);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addTodoToCurrentProject)(defaultTodoTwo);\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/UI.js?");

/***/ }),

/***/ "./src/components/complete.js":
/*!************************************!*\
  !*** ./src/components/complete.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"complete\": () => (/* binding */ complete),\n/* harmony export */   \"undoComplete\": () => (/* binding */ undoComplete)\n/* harmony export */ });\nconst complete = (todo) => (todo.complete = true);\nconst undoComplete = (todo) => (todo.complete = false);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/complete.js?");

/***/ }),

/***/ "./src/components/creation.js":
/*!************************************!*\
  !*** ./src/components/creation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/components/objects.js\");\n\n\nconst createProject = (title) => {\n  const newProject = new _objects__WEBPACK_IMPORTED_MODULE_0__.Project(title);\n  return newProject;\n};\n\nconst createTodo = (priority, title, description, dueDate) => {\n  const newTodo = new _objects__WEBPACK_IMPORTED_MODULE_0__.Todo(priority, title, description, dueDate);\n  return newTodo;\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/creation.js?");

/***/ }),

/***/ "./src/components/objects.js":
/*!***********************************!*\
  !*** ./src/components/objects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Todo {\n  constructor(priority, title, description, dueDate) {\n    this.priority = priority;\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.complete = false;\n  }\n}\n\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.todos = [];\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/objects.js?");

/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFolder\": () => (/* binding */ projectFolder),\n/* harmony export */   \"projectAdd\": () => (/* binding */ projectAdd),\n/* harmony export */   \"projectRemove\": () => (/* binding */ projectRemove),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"setCurrentProject\": () => (/* binding */ setCurrentProject),\n/* harmony export */   \"addTodoToCurrentProject\": () => (/* binding */ addTodoToCurrentProject),\n/* harmony export */   \"removeTodoFromCurrentProject\": () => (/* binding */ removeTodoFromCurrentProject),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"retrieveSave\": () => (/* binding */ retrieveSave)\n/* harmony export */ });\n/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation */ \"./src/components/creation.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/components/UI.js\");\n\n\n\n// grand project array\nlet projectFolder = [];\n\nconst projectAdd = (project) => projectFolder.push(project);\n\nconst projectRemove = (project) => {\n  const index = projectFolder.indexOf(project);\n  projectFolder.splice(index, 1);\n};\n\n// current project\nlet currentProject = (0,_creation__WEBPACK_IMPORTED_MODULE_0__.createProject)('currentProject');\n\nconst setCurrentProject = (project) => (currentProject = project);\n\nconst addTodoToCurrentProject = (todo) => currentProject.todos.push(todo);\n\nconst removeTodoFromCurrentProject = (todo) => {\n  const index = currentProject.todos.indexOf(todo);\n  currentProject.todos.splice(index, 1);\n};\n\n// Save\nconst save = (projectFolder) => {\n  localStorage.setItem('projectFolder', JSON.stringify(projectFolder));\n};\n\n// Retrieve\nconst retrieveSave = () => {\n  const savedProjectFolder = localStorage.getItem('projectFolder');\n  if (savedProjectFolder && savedProjectFolder.length) {\n    projectFolder = JSON.parse(savedProjectFolder);\n    if (projectFolder.length >= 1) {\n      // load all projects\n      for (let i = 0; i < projectFolder.length; i++) {\n        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.projectListItem)(projectFolder[i]);\n      }\n      // just make todo container show the last project loaded's todos and select it as current project\n      for (\n        let i = 0;\n        i < projectFolder[projectFolder.length - 1].todos.length;\n        i++\n      ) {\n        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.todoItem)(projectFolder[projectFolder.length - 1].todos[i]);\n      }\n      currentProject = projectFolder[projectFolder.length - 1];\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/projects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UI */ \"./src/components/UI.js\");\n/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/projects */ \"./src/components/projects.js\");\n/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.css */ \"./src/assets/styles/style.css\");\n\n\n\n\n(function saveCheck() {\n  (0,_components_projects__WEBPACK_IMPORTED_MODULE_1__.retrieveSave)();\n  if (!localStorage.projectFolder || _components_projects__WEBPACK_IMPORTED_MODULE_1__.projectFolder.length < 1) {\n    (0,_components_UI__WEBPACK_IMPORTED_MODULE_0__.defaultStart)();\n  }\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;