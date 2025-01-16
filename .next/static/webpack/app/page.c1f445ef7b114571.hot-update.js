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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Sudoku AI Solver\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Glucoguard\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Skillsight\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Columns Game\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Flix App\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Parstagram\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Twitter Clone\",\n        description: \"Allows users to compose, favorite, and retweet tweets while providing a seamless experience with features like login persistence across app restarts, infinite tweet loading, and a pull-to-refresh option. It includes a stylish launch screen, user profile integration, and the ability to view tweets with profile pictures, usernames, and text.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Twitter\",\n        techStack: [\n            \"Swift\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    }\n];\nconst Project = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-4 sm:px-12 md:px-24 py-10\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"project-box bg-[#121212] shadow-md p-6 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-64 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: project.image,\n                                    alt: \"thumbnail\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    project.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"inline-block bg-gray-500 text-white px-4 py-1 text-sm rounded-md hover:bg-gray-700\",\n                                        children: \"View\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 mb-4\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSztBQUUvQixNQUFNRSxXQUFXO0lBQ2I7UUFDSUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxQ0FBcUM7UUFDckNDLFdBQVc7WUFBQztZQUFVO1lBQU87WUFBYTtZQUFTO1lBQWM7U0FBVztJQUNoRjtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFVO1lBQVM7WUFBYztTQUFXO0lBQzVEO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxREFBcUQ7UUFDckRDLFdBQVc7WUFBQztZQUFVO1lBQVM7WUFBYztTQUFXO0lBQzVEO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFTO1lBQVM7WUFBYztTQUFXO0lBQzNEO0NBQ0g7QUFFRCxNQUFNRSxVQUFVO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBa0RDLElBQUc7OzBCQUNsRSw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQStEOzs7Ozs7MEJBRzdFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlIsU0FBU1csR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ047d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1Qsa0RBQUtBO29DQUNKZSxLQUFLRixRQUFRVCxLQUFLO29DQUNsQlksS0FBSTtvQ0FDSkMsUUFBTztvQ0FDUEMsV0FBVTtvQ0FDVlQsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQWdDSSxRQUFRWCxLQUFLOzs7Ozs7b0NBQzFEVyxRQUFRUCxJQUFJLGtCQUNYLDhEQUFDYTt3Q0FDQ0MsTUFBTVAsUUFBUVAsSUFBSTt3Q0FDbEJlLFFBQU87d0NBQ1BDLEtBQUk7d0NBQ0piLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7OzswQ0FLTCw4REFBQ2M7Z0NBQUVkLFdBQVU7MENBQXNCSSxRQUFRVixXQUFXOzs7Ozs7MENBRXRELDhEQUFDSztnQ0FBSUMsV0FBVTswQ0FDWkksUUFBUVIsU0FBUyxDQUFDTyxHQUFHLENBQUMsQ0FBQ1ksTUFBTUMsb0JBQzVCLDhEQUFDQzt3Q0FFQ2pCLFdBQVU7a0RBRVRlO3VDQUhJQzs7Ozs7Ozs7Ozs7dUJBOUJOWDs7Ozs7Ozs7Ozs7Ozs7OztBQTBDakI7S0FuRE1QO0FBcUROLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWFzaGkvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2ViIENyYXdsZXIgYW5kIFNlYXJjaCBFbmdpbmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIHRoZSBjb3JlIGxvZ2ljIG9mIGEgbXVsdGl0aHJlYWRlZCBQeXRob24gd2ViIGNyYXdsZXIgdG8gaW5kZXggNTAsMDAwKyBVQ0kgZG9tYWluIHBhZ2VzLCBpbmNyZWFzaW5nIGNyYXdsZXIgc3BlZWQgYnkgNSB0aW1lcyBieSBhZGRpbmcgNSB0aHJlYWRzIHRvIGEgc2luZ2xlLXRocmVhZGVkIGJhc2VsaW5lLiBCdWlsdCBhIFNpbUhhc2ggYWxnb3JpdGhtIHRvIGRldGVjdCBkdXBsaWNhdGVzIGFuZCBhdm9pZGVkIDgwJSBvZiBjcmF3bGVyIHRyYXBzIGR1cmluZyBkZXBsb3ltZW50LiBFbmdpbmVlcmVkIGEgc2VhcmNoIGVuZ2luZSBmcm9tIHNjcmF0Y2ggd2l0aCA8MzBtcyBxdWVyeSByZXNwb25zZSB0aW1lIGZvciA1MCwwMDArIHBhZ2VzLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly93d3cuZmlsbWF0ZS5jbHViL1wiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkMrK1wiLCBcIlRocmVhZGluZ1wiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTdWRva3UgQUkgU29sdmVyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhbiBBSSBzeXN0ZW0gdG8gc29sdmUgU3Vkb2t1IHB1enpsZXMsIHJhbmtpbmcgdG9wIDglIGFtb25nIDEwMCsgdGVhbXMgaW4gdGVybXMgb2YgZWZmaWNpZW5jeS9lZmZlY3RpdmVuZXNzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiR2x1Y29ndWFyZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlNraWxsc2lnaHRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDb2x1bW5zIEdhbWVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJGbGl4IEFwcFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlBhcnN0YWdyYW1cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJUd2l0dGVyIENsb25lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB1c2VycyB0byBjb21wb3NlLCBmYXZvcml0ZSwgYW5kIHJldHdlZXQgdHdlZXRzIHdoaWxlIHByb3ZpZGluZyBhIHNlYW1sZXNzIGV4cGVyaWVuY2Ugd2l0aCBmZWF0dXJlcyBsaWtlIGxvZ2luIHBlcnNpc3RlbmNlIGFjcm9zcyBhcHAgcmVzdGFydHMsIGluZmluaXRlIHR3ZWV0IGxvYWRpbmcsIGFuZCBhIHB1bGwtdG8tcmVmcmVzaCBvcHRpb24uIEl0IGluY2x1ZGVzIGEgc3R5bGlzaCBsYXVuY2ggc2NyZWVuLCB1c2VyIHByb2ZpbGUgaW50ZWdyYXRpb24sIGFuZCB0aGUgYWJpbGl0eSB0byB2aWV3IHR3ZWV0cyB3aXRoIHByb2ZpbGUgcGljdHVyZXMsIHVzZXJuYW1lcywgYW5kIHRleHQuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vYWFzaGlzaW5naGgvVHdpdHRlclwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlN3aWZ0XCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbl07XG5cbmNvbnN0IFByb2plY3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1jb250YWluZXIgcHgtNCBzbTpweC0xMiBtZDpweC0yNCBweS0xMFwiIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC00IG1iLTggbWQ6bWItMTJcIj5cbiAgICAgICAgUHJvamVjdHNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWdyaWQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBnYXAtOCBtYXgtdy1zY3JlZW4teGwgbXgtYXV0b1wiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWJveCBiZy1bIzEyMTIxMl0gc2hhZG93LW1kIHAtNiByb3VuZGVkLWxnIG1heC13LXhzIHNtOm1heC13LXNtIG1kOm1heC13LW1kIGxnOm1heC13LWxnIG14LWF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtNjQgbWItNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PVwidGh1bWJuYWlsXCJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57cHJvamVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICB7cHJvamVjdC5saW5rICYmIChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5saW5rfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgcHgtNCBweS0xIHRleHQtc20gcm91bmRlZC1tZCBob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtYi00XCI+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hTdGFjay5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIG1yLTIgbWItMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0ZWNoU3RhY2siLCJsaW5rIiwiUHJvamVjdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDIiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInAiLCJ0ZWNoIiwiaWR4Iiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});