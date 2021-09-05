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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectListItem\": () => (/* binding */ projectListItem),\n/* harmony export */   \"todoItem\": () => (/* binding */ todoItem),\n/* harmony export */   \"defaultStart\": () => (/* binding */ defaultStart)\n/* harmony export */ });\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete */ \"./src/complete.js\");\n/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation */ \"./src/creation.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n//dynamically change todo container contents on different project selection\nconst dynamicTodoContainer = (project) => {\n  //clear container\n  while (todoContainer.firstElementChild) {\n    todoContainer.removeChild(todoContainer.firstElementChild);\n  }\n  //fill container\n  for (let i = 0; i < project.todos.length; i++) {\n    todoItem(project.todos[i]);\n  }\n};\n\n//set active project list item\nconst setActiveLi = (li) => {\n  li.classList.add('selected');\n};\n\nconst resetActiveLi = () => {\n  document.querySelectorAll('.selected').forEach((listItem) => {\n    listItem.classList.remove('selected');\n  });\n};\n\n//Projects\nconst newProjectButton = document.querySelector('#project-button');\nconst projectList = document.querySelector('#project-list');\nconst projectForm = document.querySelector('#project-form');\nconst projectFormSubmit = document.querySelector('#project-form-submit');\n\nnewProjectButton.addEventListener('click', () => {\n  projectForm.classList.toggle('visible');\n});\n\nprojectFormSubmit.addEventListener('click', () => {\n  projectForm.classList.toggle('visible');\n  const project = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createProject)(document.querySelector('#project-title').value);\n  projectListItem(project);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectAdd)(project);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(project);\n  dynamicTodoContainer(project);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n});\n\nconst projectListItem = (project) => {\n  const newProjectListItem = document.createElement('li');\n  resetActiveLi();\n  setActiveLi(newProjectListItem);\n  newProjectListItem.textContent = project.title;\n  newProjectListItem.addEventListener('click', () => {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(project);\n    dynamicTodoContainer(project);\n    resetActiveLi();\n    setActiveLi(newProjectListItem);\n  });\n  const projectDelete = document.createElement('button');\n  projectDelete.classList.add('project-delete');\n  projectDelete.textContent = 'DEL';\n  projectDelete.addEventListener('click', () => {\n    //dynamicCurrentProject(project, newProjectListItem);\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectRemove)(project);\n    projectList.removeChild(newProjectListItem);\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newProjectListItem.appendChild(projectDelete);\n  projectList.appendChild(newProjectListItem);\n};\n\n//Todos\nconst newTodoButton = document.querySelector('#todo-button');\nconst todoContainer = document.querySelector('#todo-container');\nconst todoForm = document.querySelector('#todo-form');\nconst todoFormSubmit = document.querySelector('#todo-form-submit');\n\nnewTodoButton.addEventListener('click', () => {\n  todoForm.classList.toggle('visible');\n});\n\ntodoFormSubmit.addEventListener('click', () => {\n  todoForm.classList.toggle('visible');\n  const todo = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    document.querySelector('#priority').checked,\n    document.querySelector('#title').value,\n    document.querySelector('#description').value,\n    document.querySelector('#due-date').value\n  ); //aka everything in the todo form\n  todoItem(todo);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addTodoToCurrentProject)(todo);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n});\n\nconst todoItem = (todo) => {\n  //card\n  const newTodoCard = document.createElement('div');\n  newTodoCard.classList.add('todo');\n  //delete button\n  const todoDelete = document.createElement('button');\n  todoDelete.classList.add('todo-delete');\n  todoDelete.textContent = 'X';\n  todoDelete.addEventListener('click', () => {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.removeTodoFromCurrentProject)(todo);\n    todoContainer.removeChild(newTodoCard);\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newTodoCard.appendChild(todoDelete);\n  //title\n  const todoTitle = document.createElement('h4');\n  todoTitle.textContent = todo.title;\n  if (todo.complete == true) {\n    todoTitle.style.textDecoration = 'line-through';\n  }\n  todoTitle.addEventListener('click', () => {\n    if (todo.complete == false) {\n      todoTitle.style.textDecoration = 'line-through';\n      (0,_complete__WEBPACK_IMPORTED_MODULE_0__.complete)(todo);\n    } else {\n      todoTitle.style.textDecoration = 'none';\n      (0,_complete__WEBPACK_IMPORTED_MODULE_0__.undoComplete)(todo);\n    }\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newTodoCard.appendChild(todoTitle);\n  //priority\n  const todoPriority = document.createElement('button');\n  todoPriority.classList.add('todo-priority-button');\n  if (todo.priority == true) {\n    todoPriority.style.backgroundColor = 'red';\n    todoPriority.textContent = 'HIGH PRIORITY!';\n  } else {\n    todoPriority.style.backgroundColor = 'green';\n    todoPriority.textContent = 'Low Priority';\n  }\n  todoPriority.addEventListener('click', () => {\n    if (todo.priority == true) {\n      todoPriority.style.backgroundColor = 'green';\n      todoPriority.textContent = 'Low Priority';\n      todo.priority = false;\n    } else {\n      todoPriority.style.backgroundColor = 'red';\n      todoPriority.textContent = 'HIGH PRIORITY!';\n      todo.priority = true;\n    }\n    (0,_projects__WEBPACK_IMPORTED_MODULE_2__.save)(_projects__WEBPACK_IMPORTED_MODULE_2__.projectFolder);\n  });\n  newTodoCard.appendChild(todoPriority);\n  //description\n  const todoDescription = document.createElement('button');\n  todoDescription.classList.add('description');\n  todoDescription.textContent = 'Description';\n  todoDescription.addEventListener('click', () => {\n    alert(todo.description);\n  });\n  newTodoCard.appendChild(todoDescription);\n  //duedate\n  const todoDueDate = document.createElement('h5');\n  todoDueDate.textContent = todo.dueDate;\n  newTodoCard.appendChild(todoDueDate);\n  //card\n  todoContainer.appendChild(newTodoCard);\n};\n\n//Default starting project & todos using the same processes as above\nconst defaultStart = () => {\n  //default project set up\n  const defaultProject = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createProject)('Default Project');\n  projectListItem(defaultProject);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectAdd)(defaultProject);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(defaultProject);\n\n  //default todos set up\n  //1\n  const defaultTodoOne = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    true,\n    'Default Todo #1',\n    'Take care of task one',\n    '1/1/2021'\n  );\n  todoItem(defaultTodoOne);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addTodoToCurrentProject)(defaultTodoOne);\n  //2\n  const defaultTodoTwo = (0,_creation__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    false,\n    'Default Todo #2',\n    'Take care of task two',\n    '1/1/2022'\n  );\n  todoItem(defaultTodoTwo);\n  (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addTodoToCurrentProject)(defaultTodoTwo);\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"complete\": () => (/* binding */ complete),\n/* harmony export */   \"undoComplete\": () => (/* binding */ undoComplete)\n/* harmony export */ });\nconst complete = (todo) => (todo.complete = true);\nconst undoComplete = (todo) => (todo.complete = false);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/complete.js?");

/***/ }),

/***/ "./src/creation.js":
/*!*************************!*\
  !*** ./src/creation.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n\nconst createProject = (title) => {\n  const newProject = new _objects__WEBPACK_IMPORTED_MODULE_0__.Project(title);\n  return newProject;\n};\n\nconst createTodo = (priority, title, description, dueDate) => {\n  const newTodo = new _objects__WEBPACK_IMPORTED_MODULE_0__.Todo(priority, title, description, dueDate);\n  return newTodo;\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/creation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n(function saveCheck() {\n  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.retrieveSave)();\n  if (!localStorage.projectFolder || _projects__WEBPACK_IMPORTED_MODULE_1__.projectFolder.length < 1) {\n    (0,_UI__WEBPACK_IMPORTED_MODULE_0__.defaultStart)();\n  }\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Todo {\n  constructor(priority, title, description, dueDate) {\n    this.priority = priority;\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.complete = false;\n  }\n}\n\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.todos = [];\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/objects.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFolder\": () => (/* binding */ projectFolder),\n/* harmony export */   \"projectAdd\": () => (/* binding */ projectAdd),\n/* harmony export */   \"projectRemove\": () => (/* binding */ projectRemove),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"setCurrentProject\": () => (/* binding */ setCurrentProject),\n/* harmony export */   \"addTodoToCurrentProject\": () => (/* binding */ addTodoToCurrentProject),\n/* harmony export */   \"removeTodoFromCurrentProject\": () => (/* binding */ removeTodoFromCurrentProject),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"retrieveSave\": () => (/* binding */ retrieveSave)\n/* harmony export */ });\n/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation */ \"./src/creation.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\n//grand project array\nvar projectFolder = [];\n\nconst projectAdd = (project) => projectFolder.push(project);\n\nconst projectRemove = (project) => {\n  const index = projectFolder.indexOf(project);\n  projectFolder.splice(index, 1);\n};\n\n//current project\nvar currentProject = (0,_creation__WEBPACK_IMPORTED_MODULE_0__.createProject)('currentProject');\n\nconst setCurrentProject = (project) => (currentProject = project);\n\nconst addTodoToCurrentProject = (todo) => currentProject.todos.push(todo);\n\nconst removeTodoFromCurrentProject = (todo) => {\n  const index = currentProject.todos.indexOf(todo);\n  currentProject.todos.splice(index, 1);\n};\n\n//Save\nconst save = (projectFolder) => {\n  localStorage.setItem('projectFolder', JSON.stringify(projectFolder));\n};\n\n//Retrieve\nconst retrieveSave = () => {\n  var savedProjectFolder = localStorage.getItem('projectFolder');\n  if (savedProjectFolder && savedProjectFolder.length) {\n    projectFolder = JSON.parse(savedProjectFolder);\n    if (projectFolder.length >= 1) {\n      //load all projects\n      for (let i = 0; i < projectFolder.length; i++) {\n        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.projectListItem)(projectFolder[i]);\n      }\n      //just make todo container show the last project loaded's todos and select it as current project\n      for (\n        let i = 0;\n        i < projectFolder[projectFolder.length - 1].todos.length;\n        i++\n      ) {\n        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.todoItem)(projectFolder[projectFolder.length - 1].todos[i]);\n      }\n      currentProject = projectFolder[projectFolder.length - 1];\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;