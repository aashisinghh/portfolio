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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Sudoku AI Solver\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Glucoguard\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Skillsight\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Columns Game\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Flix App\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Parstagram\",\n        description: \"This photo viewing app integrates with a custom Parse backend, enabling users to sign up, log in, and post photos with captions while viewing a global feed and interacting with comments. Features include user authentication, persistent login across app restarts, viewing the latest posts, and adding comments to shared photos.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Twitter Clone\",\n        description: \"Allows users to compose, favorite, and retweet tweets while providing a seamless experience with features like login persistence across app restarts, infinite tweet loading, and a pull-to-refresh option. It includes a stylish launch screen, user profile integration, and the ability to view tweets with profile pictures, usernames, and text.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Twitter\",\n        techStack: [\n            \"Swift\",\n            \"OAuth\",\n            \"Twitter API\"\n        ]\n    }\n];\nconst Project = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-4 sm:px-12 md:px-24 py-10\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"project-box bg-[#121212] shadow-md p-6 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-64 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: project.image,\n                                    alt: \"thumbnail\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    project.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"inline-block bg-gray-500 text-white px-4 py-1 text-sm rounded-md hover:bg-gray-700\",\n                                        children: \"View\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 mb-4\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSztBQUUvQixNQUFNRSxXQUFXO0lBQ2I7UUFDSUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxQ0FBcUM7UUFDckNDLFdBQVc7WUFBQztZQUFVO1lBQU87WUFBYTtZQUFTO1lBQWM7U0FBVztJQUNoRjtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFVO1lBQVM7WUFBYztTQUFXO0lBQzVEO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxREFBcUQ7UUFDckRDLFdBQVc7WUFBQztZQUFVO1lBQVM7WUFBYztTQUFXO0lBQzVEO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFTO1lBQVM7U0FBYztJQUNoRDtDQUNIO0FBRUQsTUFBTUUsVUFBVTtJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWtEQyxJQUFHOzswQkFDbEUsOERBQUNDO2dCQUFHRixXQUFVOzBCQUErRDs7Ozs7OzBCQUc3RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pSLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNOO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNULGtEQUFLQTtvQ0FDSmUsS0FBS0YsUUFBUVQsS0FBSztvQ0FDbEJZLEtBQUk7b0NBQ0pDLFFBQU87b0NBQ1BDLFdBQVU7b0NBQ1ZULFdBQVU7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUFnQ0ksUUFBUVgsS0FBSzs7Ozs7O29DQUMxRFcsUUFBUVAsSUFBSSxrQkFDWCw4REFBQ2E7d0NBQ0NDLE1BQU1QLFFBQVFQLElBQUk7d0NBQ2xCZSxRQUFPO3dDQUNQQyxLQUFJO3dDQUNKYixXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7MENBS0wsOERBQUNjO2dDQUFFZCxXQUFVOzBDQUFzQkksUUFBUVYsV0FBVzs7Ozs7OzBDQUV0RCw4REFBQ0s7Z0NBQUlDLFdBQVU7MENBQ1pJLFFBQVFSLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLENBQUNZLE1BQU1DLG9CQUM1Qiw4REFBQ0M7d0NBRUNqQixXQUFVO2tEQUVUZTt1Q0FISUM7Ozs7Ozs7Ozs7O3VCQTlCTlg7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ2pCO0tBbkRNUDtBQXFETixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2Fhc2hpL3BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIldlYiBDcmF3bGVyIGFuZCBTZWFyY2ggRW5naW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCB0aGUgY29yZSBsb2dpYyBvZiBhIG11bHRpdGhyZWFkZWQgUHl0aG9uIHdlYiBjcmF3bGVyIHRvIGluZGV4IDUwLDAwMCsgVUNJIGRvbWFpbiBwYWdlcywgaW5jcmVhc2luZyBjcmF3bGVyIHNwZWVkIGJ5IDUgdGltZXMgYnkgYWRkaW5nIDUgdGhyZWFkcyB0byBhIHNpbmdsZS10aHJlYWRlZCBiYXNlbGluZS4gQnVpbHQgYSBTaW1IYXNoIGFsZ29yaXRobSB0byBkZXRlY3QgZHVwbGljYXRlcyBhbmQgYXZvaWRlZCA4MCUgb2YgY3Jhd2xlciB0cmFwcyBkdXJpbmcgZGVwbG95bWVudC4gRW5naW5lZXJlZCBhIHNlYXJjaCBlbmdpbmUgZnJvbSBzY3JhdGNoIHdpdGggPDMwbXMgcXVlcnkgcmVzcG9uc2UgdGltZSBmb3IgNTAsMDAwKyBwYWdlcy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8vd3d3LmZpbG1hdGUuY2x1Yi9cIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJDKytcIiwgXCJUaHJlYWRpbmdcIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3Vkb2t1IEFJIFNvbHZlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdsdWNvZ3VhcmRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTa2lsbHNpZ2h0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhbiBBSSBzeXN0ZW0gdG8gc29sdmUgU3Vkb2t1IHB1enpsZXMsIHJhbmtpbmcgdG9wIDglIGFtb25nIDEwMCsgdGVhbXMgaW4gdGVybXMgb2YgZWZmaWNpZW5jeS9lZmZlY3RpdmVuZXNzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29sdW1ucyBHYW1lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhbiBBSSBzeXN0ZW0gdG8gc29sdmUgU3Vkb2t1IHB1enpsZXMsIHJhbmtpbmcgdG9wIDglIGFtb25nIDEwMCsgdGVhbXMgaW4gdGVybXMgb2YgZWZmaWNpZW5jeS9lZmZlY3RpdmVuZXNzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmxpeCBBcHBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQYXJzdGFncmFtXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcGhvdG8gdmlld2luZyBhcHAgaW50ZWdyYXRlcyB3aXRoIGEgY3VzdG9tIFBhcnNlIGJhY2tlbmQsIGVuYWJsaW5nIHVzZXJzIHRvIHNpZ24gdXAsIGxvZyBpbiwgYW5kIHBvc3QgcGhvdG9zIHdpdGggY2FwdGlvbnMgd2hpbGUgdmlld2luZyBhIGdsb2JhbCBmZWVkIGFuZCBpbnRlcmFjdGluZyB3aXRoIGNvbW1lbnRzLiBGZWF0dXJlcyBpbmNsdWRlIHVzZXIgYXV0aGVudGljYXRpb24sIHBlcnNpc3RlbnQgbG9naW4gYWNyb3NzIGFwcCByZXN0YXJ0cywgdmlld2luZyB0aGUgbGF0ZXN0IHBvc3RzLCBhbmQgYWRkaW5nIGNvbW1lbnRzIHRvIHNoYXJlZCBwaG90b3MuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJUd2l0dGVyIENsb25lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB1c2VycyB0byBjb21wb3NlLCBmYXZvcml0ZSwgYW5kIHJldHdlZXQgdHdlZXRzIHdoaWxlIHByb3ZpZGluZyBhIHNlYW1sZXNzIGV4cGVyaWVuY2Ugd2l0aCBmZWF0dXJlcyBsaWtlIGxvZ2luIHBlcnNpc3RlbmNlIGFjcm9zcyBhcHAgcmVzdGFydHMsIGluZmluaXRlIHR3ZWV0IGxvYWRpbmcsIGFuZCBhIHB1bGwtdG8tcmVmcmVzaCBvcHRpb24uIEl0IGluY2x1ZGVzIGEgc3R5bGlzaCBsYXVuY2ggc2NyZWVuLCB1c2VyIHByb2ZpbGUgaW50ZWdyYXRpb24sIGFuZCB0aGUgYWJpbGl0eSB0byB2aWV3IHR3ZWV0cyB3aXRoIHByb2ZpbGUgcGljdHVyZXMsIHVzZXJuYW1lcywgYW5kIHRleHQuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vYWFzaGlzaW5naGgvVHdpdHRlclwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlN3aWZ0XCIsIFwiT0F1dGhcIiwgXCJUd2l0dGVyIEFQSVwiXSxcbiAgICB9LFxuXTtcblxuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWNvbnRhaW5lciBweC00IHNtOnB4LTEyIG1kOnB4LTI0IHB5LTEwXCIgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTQgbWItOCBtZDptYi0xMlwiPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtZ3JpZCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0yIGdhcC04IG1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtYm94IGJnLVsjMTIxMjEyXSBzaGFkb3ctbWQgcC02IHJvdW5kZWQtbGcgbWF4LXcteHMgc206bWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGcgbXgtYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC02NCBtYi00XCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntwcm9qZWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0LmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0Lmxpbmt9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTEgdGV4dC1zbSByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTRcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC1ncmF5LTMwMCB0ZXh0LXNtIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgbXItMiBtYi0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRlY2hTdGFjayIsImxpbmsiLCJQcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMiIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCIsInRlY2giLCJpZHgiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});