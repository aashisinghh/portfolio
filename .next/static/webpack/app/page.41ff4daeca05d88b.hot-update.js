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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Sudoku AI Solver\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Glucoguard\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Skillsight\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Backend Evaluation System\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Columns Game\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Flix App\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Parstagram App\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    }\n];\nfunction Project() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-10 py-5 text-center\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"project text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: project.link,\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full h-64\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: project.image,\n                                        alt: \"thumbnail\",\n                                        layout: \"fill\",\n                                        objectFit: \"cover\",\n                                        className: \"rounded-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: project.link,\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl mt-4 hover:underline, font-bold\",\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 mt-2\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap mt-4 justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 29\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n}\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSztBQUUvQixNQUFNRSxXQUFXO0lBQ2I7UUFDSUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxQ0FBcUM7UUFDckNDLFdBQVc7WUFBQztZQUFVO1lBQU87WUFBYTtZQUFTO1lBQWM7U0FBVztJQUNoRjtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtDQUNIO0FBRUQsU0FBU0M7SUFDTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUE0Q0MsSUFBRzs7MEJBQzFELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBbUM7Ozs7OzswQkFDakQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWUCxTQUFTVSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3BCLDhEQUFDTjt3QkFBZ0JDLFdBQVU7OzBDQUN2Qiw4REFBQ007Z0NBQUVDLE1BQU1ILFFBQVFJLElBQUk7Z0NBQUVDLFFBQU87Z0NBQVNDLEtBQUk7MENBQ3ZDLDRFQUFDWDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ1Isa0RBQUtBO3dDQUNGbUIsS0FBS1AsUUFBUVIsS0FBSzt3Q0FDbEJnQixLQUFJO3dDQUNKQyxRQUFPO3dDQUNQQyxXQUFVO3dDQUNWZCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUl0Qiw4REFBQ007Z0NBQUVDLE1BQU1ILFFBQVFJLElBQUk7Z0NBQUVDLFFBQU87Z0NBQVNDLEtBQUk7MENBQ3ZDLDRFQUFDSztvQ0FBR2YsV0FBVTs4Q0FBMkNJLFFBQVFWLEtBQUs7Ozs7Ozs7Ozs7OzBDQUUxRSw4REFBQ3NCO2dDQUFFaEIsV0FBVTswQ0FBc0JJLFFBQVFULFdBQVc7Ozs7OzswQ0FHdEQsOERBQUNJO2dDQUFJQyxXQUFVOzBDQUNaSSxRQUFRUCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxDQUFDYyxNQUFNQyxvQkFDNUIsOERBQUNDO3dDQUFlbkIsV0FBVTtrREFDdkJpQjt1Q0FEUUM7Ozs7Ozs7Ozs7O3VCQXBCVGI7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QjlCO0tBcENTUDtBQXNDVCxpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2Fhc2hpL3BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIldlYiBDcmF3bGVyIGFuZCBTZWFyY2ggRW5naW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCB0aGUgY29yZSBsb2dpYyBvZiBhIG11bHRpdGhyZWFkZWQgUHl0aG9uIHdlYiBjcmF3bGVyIHRvIGluZGV4IDUwLDAwMCsgVUNJIGRvbWFpbiBwYWdlcywgaW5jcmVhc2luZyBjcmF3bGVyIHNwZWVkIGJ5IDUgdGltZXMgYnkgYWRkaW5nIDUgdGhyZWFkcyB0byBhIHNpbmdsZS10aHJlYWRlZCBiYXNlbGluZS4gQnVpbHQgYSBTaW1IYXNoIGFsZ29yaXRobSB0byBkZXRlY3QgZHVwbGljYXRlcyBhbmQgYXZvaWRlZCA4MCUgb2YgY3Jhd2xlciB0cmFwcyBkdXJpbmcgZGVwbG95bWVudC4gRW5naW5lZXJlZCBhIHNlYXJjaCBlbmdpbmUgZnJvbSBzY3JhdGNoIHdpdGggPDMwbXMgcXVlcnkgcmVzcG9uc2UgdGltZSBmb3IgNTAsMDAwKyBwYWdlcy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8vd3d3LmZpbG1hdGUuY2x1Yi9cIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJDKytcIiwgXCJUaHJlYWRpbmdcIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3Vkb2t1IEFJIFNvbHZlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdsdWNvZ3VhcmRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTa2lsbHNpZ2h0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhbiBBSSBzeXN0ZW0gdG8gc29sdmUgU3Vkb2t1IHB1enpsZXMsIHJhbmtpbmcgdG9wIDglIGFtb25nIDEwMCsgdGVhbXMgaW4gdGVybXMgb2YgZWZmaWNpZW5jeS9lZmZlY3RpdmVuZXNzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQmFja2VuZCBFdmFsdWF0aW9uIFN5c3RlbVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbHVtbnMgR2FtZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZsaXggQXBwXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhbiBBSSBzeXN0ZW0gdG8gc29sdmUgU3Vkb2t1IHB1enpsZXMsIHJhbmtpbmcgdG9wIDglIGFtb25nIDEwMCsgdGVhbXMgaW4gdGVybXMgb2YgZWZmaWNpZW5jeS9lZmZlY3RpdmVuZXNzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUGFyc3RhZ3JhbSBBcHBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG5dO1xuXG5mdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyIHB4LTEwIHB5LTUgdGV4dC1jZW50ZXJcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTggbWQ6bWItMTJcIj5Qcm9qZWN0czwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWdyaWQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBnYXAtMTJcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInByb2plY3QgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLTY0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidGh1bWJuYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtdC00IGhvdmVyOnVuZGVybGluZSwgZm9udC1ib2xkXCI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXQtMlwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRlY2ggU3RhY2sgU2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hTdGFjay5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aWR4fSBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHRleHQtc20gcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBtci0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRlY2hTdGFjayIsIlByb2plY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgxIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwiYSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDIiLCJwIiwidGVjaCIsImlkeCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});