"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ProjectsSection.jsx":
/*!****************************************!*\
  !*** ./components/ProjectsSection.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    }\n];\nconst Project = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-4 sm:px-12 md:px-24 py-10\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"project-box bg-[#121212] shadow-md p-6 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-64 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: project.image,\n                                    alt: \"thumbnail\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    project.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"inline-block bg-gray-500 text-white px-4 py-1 text-sm rounded-md hover:bg-gray-700\",\n                                        children: \"View\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 mb-4\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSztBQUUvQixNQUFNRSxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxXQUFXO1lBQUM7WUFBVTtZQUFPO1lBQWE7WUFBUztZQUFjO1NBQVc7SUFDOUU7Q0FFRDtBQUVELE1BQU1DLFVBQVU7SUFDZCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFrREMsSUFBRzs7MEJBQ2xFLDhEQUFDQztnQkFBR0YsV0FBVTswQkFBK0Q7Ozs7OzswQkFHN0UsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaUixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDTjt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVCxrREFBS0E7b0NBQ0plLEtBQUtGLFFBQVFULEtBQUs7b0NBQ2xCWSxLQUFJO29DQUNKQyxRQUFPO29DQUNQQyxXQUFVO29DQUNWVCxXQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBR0YsV0FBVTtrREFBZ0NJLFFBQVFYLEtBQUs7Ozs7OztvQ0FDMURXLFFBQVFSLElBQUksa0JBQ1gsOERBQUNjO3dDQUNDQyxNQUFNUCxRQUFRUixJQUFJO3dDQUNsQmdCLFFBQU87d0NBQ1BDLEtBQUk7d0NBQ0piLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7OzswQ0FLTCw4REFBQ2M7Z0NBQUVkLFdBQVU7MENBQXNCSSxRQUFRVixXQUFXOzs7Ozs7MENBRXRELDhEQUFDSztnQ0FBSUMsV0FBVTswQ0FDWkksUUFBUVAsU0FBUyxDQUFDTSxHQUFHLENBQUMsQ0FBQ1ksTUFBTUMsb0JBQzVCLDhEQUFDQzt3Q0FFQ2pCLFdBQVU7a0RBRVRlO3VDQUhJQzs7Ozs7Ozs7Ozs7dUJBOUJOWDs7Ozs7Ozs7Ozs7Ozs7OztBQTBDakI7S0FuRE1QO0FBcUROLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWFzaGkvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiV2ViIENyYXdsZXIgYW5kIFNlYXJjaCBFbmdpbmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgdGhlIGNvcmUgbG9naWMgb2YgYSBtdWx0aXRocmVhZGVkIFB5dGhvbiB3ZWIgY3Jhd2xlciB0byBpbmRleCA1MCwwMDArIFVDSSBkb21haW4gcGFnZXMsIGluY3JlYXNpbmcgY3Jhd2xlciBzcGVlZCBieSA1IHRpbWVzIGJ5IGFkZGluZyA1IHRocmVhZHMgdG8gYSBzaW5nbGUtdGhyZWFkZWQgYmFzZWxpbmUuIEJ1aWx0IGEgU2ltSGFzaCBhbGdvcml0aG0gdG8gZGV0ZWN0IGR1cGxpY2F0ZXMgYW5kIGF2b2lkZWQgODAlIG9mIGNyYXdsZXIgdHJhcHMgZHVyaW5nIGRlcGxveW1lbnQuIEVuZ2luZWVyZWQgYSBzZWFyY2ggZW5naW5lIGZyb20gc2NyYXRjaCB3aXRoIDwzMG1zIHF1ZXJ5IHJlc3BvbnNlIHRpbWUgZm9yIDUwLDAwMCsgcGFnZXMuXCIsXG4gICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmlsbWF0ZS5jbHViL1wiLFxuICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiQysrXCIsIFwiVGhyZWFkaW5nXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gIH0sXG4gIC8vIEFkZGl0aW9uYWwgcHJvamVjdCBvYmplY3RzLi4uXG5dO1xuXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyIHB4LTQgc206cHgtMTIgbWQ6cHgtMjQgcHktMTBcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1ncmlkIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTEyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtYm94IGJnLVsjMTIxMjEyXSBzaGFkb3ctbWQgcC02IHJvdW5kZWQtbGcgbWF4LXcteHMgc206bWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGcgbXgtYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC02NCBtYi00XCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntwcm9qZWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0LmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0Lmxpbmt9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTEgdGV4dC1zbSByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTRcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC1ncmF5LTMwMCB0ZXh0LXNtIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgbXItMiBtYi0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImxpbmsiLCJ0ZWNoU3RhY2siLCJQcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMiIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCIsInRlY2giLCJpZHgiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});