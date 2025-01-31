"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./components/ErrorPage.jsx":
/*!**********************************!*\
  !*** ./components/ErrorPage.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ErrorPage = ({ code , message  })=>{\n    const { 0: clicked , 1: setClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        code,\n                        \" | TPC\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl text-center py-20 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            width: \"400\",\n                            src: \"/img/bck3.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-extrabold text-white\",\n                        children: code\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-thin text-white text-opacity-75\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-amber-400 hover:bg-opacity-50 transition duration-200\",\n                        onClick: ()=>{\n                            setClicked(true);\n                            router.back();\n                        },\n                        children: clicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fad fa-spinner-third fa-spin text-white\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 28\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-arrow-left mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 90\n                                }, undefined),\n                                \"Go Back\"\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\components\\\\ErrorPage.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yUGFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUNQO0FBRWpDLE1BQU1HLFNBQVMsR0FBRyxDQUFDLEVBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFLEdBQUs7SUFDckMsTUFBTSxFQUxWLEdBS1dDLE9BQU8sR0FMbEIsR0FLb0JDLFVBQVUsTUFBSUwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0MsTUFBTU0sTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBRTFCLHFCQUFPOzswQkFDSCw4REFBQ0Qsa0RBQUk7MEJBQ0QsNEVBQUNTLE9BQUs7O3dCQUFFTCxJQUFJO3dCQUFDLFFBQU07Ozs7Ozs2QkFBUTs7Ozs7eUJBQ3hCOzBCQUVQLDhEQUFDTSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUNBQXFDOztrQ0FDcEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw0QkFBNEI7a0NBQzdDLDRFQUFDQyxLQUFHOzRCQUFDQyxLQUFLLEVBQUMsS0FBSzs0QkFBQ0MsR0FBRyxFQUFDLGVBQWU7Ozs7O3FDQUFHOzs7OztpQ0FDakM7a0NBQ0EsOERBQUNDLElBQUU7d0JBQUNKLFNBQVMsRUFBQyxvQ0FBb0M7a0NBQUVQLElBQUk7Ozs7O2lDQUFNO2tDQUM5RCw4REFBQ1ksR0FBQzt3QkFBQ0wsU0FBUyxFQUFDLDhDQUE4QztrQ0FBRU4sT0FBTzs7Ozs7aUNBQUs7a0NBQ3pFLDhEQUFDWSxRQUFNO3dCQUNITixTQUFTLEVBQUMsaUpBQWlKO3dCQUMzSk8sT0FBTyxFQUFFLElBQU07NEJBQ1hYLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDakJDLE1BQU0sQ0FBQ1csSUFBSSxFQUFFLENBQUM7eUJBQ2pCO2tDQUVBYixPQUFPLGlCQUFHLDhEQUFDYyxHQUFDOzRCQUFDVCxTQUFTLEVBQUMseUNBQXlDOzs7OztxQ0FBRyxpQkFBRzs7OENBQUUsOERBQUNTLEdBQUM7b0NBQUNULFNBQVMsRUFBQyx1QkFBdUI7Ozs7OzZDQUFHO2dDQUFBLFNBQU87O3dDQUFHOzs7OztpQ0FDckg7Ozs7Ozt5QkFDUDs7b0JBQ1A7Q0FDTjtBQUVELGlFQUFlUixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdXNpY01ha2VyLy4vY29tcG9uZW50cy9FcnJvclBhZ2UuanN4PzY2NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEVycm9yUGFnZSA9ICh7IGNvZGUsIG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e2NvZGV9IHwgVFBDPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIHRleHQtY2VudGVyIHB5LTIwIG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxpbWcgd2lkdGg9XCI0MDBcIiBzcmM9XCIvaW1nL2JjazMucG5nXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlXCI+e2NvZGV9PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXRoaW4gdGV4dC13aGl0ZSB0ZXh0LW9wYWNpdHktNzVcIj57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDIgc2hhZG93LWxnIG10LTIgc2hhZG93LWFtYmVyLTYwMC8yMCByb3VuZGVkLXhsIHB5LTIgZm9udC1tZWRpdW0gcHgtNyB0ZXh0LXppbmMtOTAwIGJnLWFtYmVyLTQwMCBob3ZlcjpiZy1vcGFjaXR5LTUwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2xpY2tlZCA/IDxpIGNsYXNzTmFtZT1cImZhZCBmYS1zcGlubmVyLXRoaXJkIGZhLXNwaW4gdGV4dC13aGl0ZVwiIC8+IDogPD48aSBjbGFzc05hbWU9J2ZhIGZhLWFycm93LWxlZnQgbXItMicgLz5HbyBCYWNrPC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJFcnJvclBhZ2UiLCJjb2RlIiwibWVzc2FnZSIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwicm91dGVyIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJ3aWR0aCIsInNyYyIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ErrorPage.jsx\n");

/***/ }),

/***/ "./pages/404.jsx":
/*!***********************!*\
  !*** ./pages/404.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ErrorPage */ \"./components/ErrorPage.jsx\");\n\n\nconst UnkownPage = ()=>{\n    let messages = [\n        \"Have you lost your way, kiddo?\",\n        \"Damn it! This dead-end road.\",\n        \"The Aurors blocked this road, Harry!\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        code: 404,\n        message: messages[Math.floor(Math.random() * messages.length)] || \"Page not found.\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Liliia Piasta\\\\Desktop\\\\Discord-Bot-Website-main\\\\pages\\\\404.jsx\",\n        lineNumber: 9,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnkownPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFnRDtBQUNoRCxNQUFNQyxVQUFVLEdBQUcsSUFBTTtJQUNyQixJQUFJQyxRQUFRLEdBQUc7UUFDWCxnQ0FBZ0M7UUFDaEMsOEJBQThCO1FBQzlCLHNDQUFzQztLQUN6QztJQUVELHFCQUFPLDhEQUFDRiw2REFBUztRQUFDRyxJQUFJLEVBQUUsR0FBRztRQUFFQyxPQUFPLEVBQUVGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUNMLFFBQVEsQ0FBQ00sTUFBTSxDQUFDLENBQUMsSUFBSSxpQkFBaUI7Ozs7O2lCQUFJO0NBQ3JIO0FBRUQsaUVBQWVQLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL011c2ljTWFrZXIvLi9wYWdlcy80MDQuanN4PzViM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yUGFnZSc7XHJcbmNvbnN0IFVua293blBhZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWVzc2FnZXMgPSBbXHJcbiAgICAgICAgJ0hhdmUgeW91IGxvc3QgeW91ciB3YXksIGtpZGRvPycsXHJcbiAgICAgICAgJ0RhbW4gaXQhIFRoaXMgZGVhZC1lbmQgcm9hZC4nLFxyXG4gICAgICAgICdUaGUgQXVyb3JzIGJsb2NrZWQgdGhpcyByb2FkLCBIYXJyeSEnXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiA8RXJyb3JQYWdlIGNvZGU9ezQwNH0gbWVzc2FnZT17bWVzc2FnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm1lc3NhZ2VzLmxlbmd0aCldIHx8IFwiUGFnZSBub3QgZm91bmQuXCJ9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVua293blBhZ2U7IFxyXG5cclxuIl0sIm5hbWVzIjpbIkVycm9yUGFnZSIsIlVua293blBhZ2UiLCJtZXNzYWdlcyIsImNvZGUiLCJtZXNzYWdlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.jsx"));
module.exports = __webpack_exports__;

})();