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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Sudoku AI Solver\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Glucoguard\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Skillsight\",\n        description: \"Developed an AI system to solve Sudoku puzzles, ranking top 8% among 100+ teams in terms of efficiency/effectiveness. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Columns Game\",\n        description: \"Created a puzzle-based columns game using PyGame libraries in Python, including UI design and visual elements. Incorporated various game mechanics using object-oriented programming.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"PyGame\",\n            \"OOP\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Flix\",\n        description: \"Flix is a movie browsing app that pulls data from The Movie Database API, allowing users to explore now-playing films and view detailed movie information and posters. Users can scroll through a list of movies, tap for more details, and toggle between a list and grid view using a CollectionView.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Flix\",\n        techStack: [\n            \"Swift\",\n            \"TMDb API\"\n        ]\n    },\n    {\n        title: \"Parstagram\",\n        description: \"This photo viewing app integrates with a custom Parse backend, enabling users to sign up, log in, and post photos with captions while viewing a global feed and interacting with comments. Features include user authentication, persistent login across app restarts, viewing the latest posts, and adding comments to shared photos.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Instagram\",\n        techStack: [\n            \"Swift\",\n            \"Parse SDK\",\n            \"OAuth\"\n        ]\n    },\n    {\n        title: \"Twitter Clone\",\n        description: \"This Twitter clone allows users to compose, favorite, and retweet tweets while providing a seamless experience with features like login persistence across app restarts, infinite tweet loading, and a pull-to-refresh option. It includes a stylish launch screen, user profile integration, and the ability to view tweets with profile pictures, usernames, and text.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Twitter\",\n        techStack: [\n            \"Swift\",\n            \"OAuth\",\n            \"Twitter API\"\n        ]\n    }\n];\nconst Project = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-4 sm:px-12 md:px-24 py-10\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"project-box bg-[#121212] shadow-md p-6 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-64 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: project.image,\n                                    alt: \"thumbnail\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    project.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"inline-block bg-gray-500 text-white px-4 py-1 text-sm rounded-md hover:bg-gray-700\",\n                                        children: \"View\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 mb-4\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDSztBQUUvQixNQUFNRSxXQUFXO0lBQ2I7UUFDSUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxQ0FBcUM7UUFDckNDLFdBQVc7WUFBQztZQUFVO1lBQU87WUFBYTtZQUFTO1lBQWM7U0FBVztJQUNoRjtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscURBQXFEO1FBQ3JEQyxXQUFXO1lBQUM7WUFBVTtZQUFTO1lBQWM7U0FBVztJQUM1RDtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFVO1lBQVM7WUFBYztTQUFXO0lBQzVEO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUCxxREFBcUQ7UUFDckRDLFdBQVc7WUFBQztZQUFVO1lBQVU7WUFBTztTQUFXO0lBQ3REO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBUztTQUFXO0lBQ3BDO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBUztZQUFhO1NBQVE7SUFDOUM7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFTO1lBQVM7U0FBYztJQUNoRDtDQUNIO0FBRUQsTUFBTUUsVUFBVTtJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWtEQyxJQUFHOzswQkFDbEUsOERBQUNDO2dCQUFHRixXQUFVOzBCQUErRDs7Ozs7OzBCQUc3RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pSLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNOO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNULGtEQUFLQTtvQ0FDSmUsS0FBS0YsUUFBUVQsS0FBSztvQ0FDbEJZLEtBQUk7b0NBQ0pDLFFBQU87b0NBQ1BDLFdBQVU7b0NBQ1ZULFdBQVU7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUFnQ0ksUUFBUVgsS0FBSzs7Ozs7O29DQUMxRFcsUUFBUVAsSUFBSSxrQkFDWCw4REFBQ2E7d0NBQ0NDLE1BQU1QLFFBQVFQLElBQUk7d0NBQ2xCZSxRQUFPO3dDQUNQQyxLQUFJO3dDQUNKYixXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7MENBS0wsOERBQUNjO2dDQUFFZCxXQUFVOzBDQUFzQkksUUFBUVYsV0FBVzs7Ozs7OzBDQUV0RCw4REFBQ0s7Z0NBQUlDLFdBQVU7MENBQ1pJLFFBQVFSLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLENBQUNZLE1BQU1DLG9CQUM1Qiw4REFBQ0M7d0NBRUNqQixXQUFVO2tEQUVUZTt1Q0FISUM7Ozs7Ozs7Ozs7O3VCQTlCTlg7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ2pCO0tBbkRNUDtBQXFETixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2Fhc2hpL3BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIldlYiBDcmF3bGVyIGFuZCBTZWFyY2ggRW5naW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCB0aGUgY29yZSBsb2dpYyBvZiBhIG11bHRpdGhyZWFkZWQgUHl0aG9uIHdlYiBjcmF3bGVyIHRvIGluZGV4IDUwLDAwMCsgVUNJIGRvbWFpbiBwYWdlcywgaW5jcmVhc2luZyBjcmF3bGVyIHNwZWVkIGJ5IDUgdGltZXMgYnkgYWRkaW5nIDUgdGhyZWFkcyB0byBhIHNpbmdsZS10aHJlYWRlZCBiYXNlbGluZS4gQnVpbHQgYSBTaW1IYXNoIGFsZ29yaXRobSB0byBkZXRlY3QgZHVwbGljYXRlcyBhbmQgYXZvaWRlZCA4MCUgb2YgY3Jhd2xlciB0cmFwcyBkdXJpbmcgZGVwbG95bWVudC4gRW5naW5lZXJlZCBhIHNlYXJjaCBlbmdpbmUgZnJvbSBzY3JhdGNoIHdpdGggPDMwbXMgcXVlcnkgcmVzcG9uc2UgdGltZSBmb3IgNTAsMDAwKyBwYWdlcy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8vd3d3LmZpbG1hdGUuY2x1Yi9cIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJDKytcIiwgXCJUaHJlYWRpbmdcIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3Vkb2t1IEFJIFNvbHZlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLCByYW5raW5nIHRvcCA4JSBhbW9uZyAxMDArIHRlYW1zIGluIHRlcm1zIG9mIGVmZmljaWVuY3kvZWZmZWN0aXZlbmVzcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdsdWNvZ3VhcmRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcywgcmFua2luZyB0b3AgOCUgYW1vbmcgMTAwKyB0ZWFtcyBpbiB0ZXJtcyBvZiBlZmZpY2llbmN5L2VmZmVjdGl2ZW5lc3MuIEltcGxlbWVudGVkIGhldXJpc3RpY3MgYW5kIGJhY2t0cmFja2luZyBmb3IgZWZmaWNpZW50IHNvbHV0aW9uIG5hdmlnYXRpb24sIHJlZHVjaW5nIGF2ZXJhZ2Ugc29sdmUgdGltZSBieSA0MCUuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiSmF2YVNjcmlwdFwiLCBcIkhUTUwvQ1NTXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTa2lsbHNpZ2h0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCBhbiBBSSBzeXN0ZW0gdG8gc29sdmUgU3Vkb2t1IHB1enpsZXMsIHJhbmtpbmcgdG9wIDglIGFtb25nIDEwMCsgdGVhbXMgaW4gdGVybXMgb2YgZWZmaWNpZW5jeS9lZmZlY3RpdmVuZXNzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29sdW1ucyBHYW1lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZWQgYSBwdXp6bGUtYmFzZWQgY29sdW1ucyBnYW1lIHVzaW5nIFB5R2FtZSBsaWJyYXJpZXMgaW4gUHl0aG9uLCBpbmNsdWRpbmcgVUkgZGVzaWduIGFuZCB2aXN1YWwgZWxlbWVudHMuIEluY29ycG9yYXRlZCB2YXJpb3VzIGdhbWUgbWVjaGFuaWNzIHVzaW5nIG9iamVjdC1vcmllbnRlZCBwcm9ncmFtbWluZy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiUHlHYW1lXCIsIFwiT09QXCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZsaXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmxpeCBpcyBhIG1vdmllIGJyb3dzaW5nIGFwcCB0aGF0IHB1bGxzIGRhdGEgZnJvbSBUaGUgTW92aWUgRGF0YWJhc2UgQVBJLCBhbGxvd2luZyB1c2VycyB0byBleHBsb3JlIG5vdy1wbGF5aW5nIGZpbG1zIGFuZCB2aWV3IGRldGFpbGVkIG1vdmllIGluZm9ybWF0aW9uIGFuZCBwb3N0ZXJzLiBVc2VycyBjYW4gc2Nyb2xsIHRocm91Z2ggYSBsaXN0IG9mIG1vdmllcywgdGFwIGZvciBtb3JlIGRldGFpbHMsIGFuZCB0b2dnbGUgYmV0d2VlbiBhIGxpc3QgYW5kIGdyaWQgdmlldyB1c2luZyBhIENvbGxlY3Rpb25WaWV3LlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Fhc2hpc2luZ2hoL0ZsaXhcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJTd2lmdFwiLCBcIlRNRGIgQVBJXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQYXJzdGFncmFtXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcGhvdG8gdmlld2luZyBhcHAgaW50ZWdyYXRlcyB3aXRoIGEgY3VzdG9tIFBhcnNlIGJhY2tlbmQsIGVuYWJsaW5nIHVzZXJzIHRvIHNpZ24gdXAsIGxvZyBpbiwgYW5kIHBvc3QgcGhvdG9zIHdpdGggY2FwdGlvbnMgd2hpbGUgdmlld2luZyBhIGdsb2JhbCBmZWVkIGFuZCBpbnRlcmFjdGluZyB3aXRoIGNvbW1lbnRzLiBGZWF0dXJlcyBpbmNsdWRlIHVzZXIgYXV0aGVudGljYXRpb24sIHBlcnNpc3RlbnQgbG9naW4gYWNyb3NzIGFwcCByZXN0YXJ0cywgdmlld2luZyB0aGUgbGF0ZXN0IHBvc3RzLCBhbmQgYWRkaW5nIGNvbW1lbnRzIHRvIHNoYXJlZCBwaG90b3MuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vYWFzaGlzaW5naGgvSW5zdGFncmFtXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiU3dpZnRcIiwgXCJQYXJzZSBTREtcIiwgXCJPQXV0aFwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVHdpdHRlciBDbG9uZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIFR3aXR0ZXIgY2xvbmUgYWxsb3dzIHVzZXJzIHRvIGNvbXBvc2UsIGZhdm9yaXRlLCBhbmQgcmV0d2VldCB0d2VldHMgd2hpbGUgcHJvdmlkaW5nIGEgc2VhbWxlc3MgZXhwZXJpZW5jZSB3aXRoIGZlYXR1cmVzIGxpa2UgbG9naW4gcGVyc2lzdGVuY2UgYWNyb3NzIGFwcCByZXN0YXJ0cywgaW5maW5pdGUgdHdlZXQgbG9hZGluZywgYW5kIGEgcHVsbC10by1yZWZyZXNoIG9wdGlvbi4gSXQgaW5jbHVkZXMgYSBzdHlsaXNoIGxhdW5jaCBzY3JlZW4sIHVzZXIgcHJvZmlsZSBpbnRlZ3JhdGlvbiwgYW5kIHRoZSBhYmlsaXR5IHRvIHZpZXcgdHdlZXRzIHdpdGggcHJvZmlsZSBwaWN0dXJlcywgdXNlcm5hbWVzLCBhbmQgdGV4dC5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hYXNoaXNpbmdoaC9Ud2l0dGVyXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiU3dpZnRcIiwgXCJPQXV0aFwiLCBcIlR3aXR0ZXIgQVBJXCJdLFxuICAgIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyIHB4LTQgc206cHgtMTIgbWQ6cHgtMjQgcHktMTBcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1ncmlkIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgZ2FwLTggbWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1ib3ggYmctWyMxMjEyMTJdIHNoYWRvdy1tZCBwLTYgcm91bmRlZC1sZyBtYXgtdy14cyBzbTptYXgtdy1zbSBtZDptYXgtdy1tZCBsZzptYXgtdy1sZyBteC1hdXRvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLTY0IG1iLTRcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD1cInRodW1ibmFpbFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAge3Byb2plY3QubGluayAmJiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QubGlua31cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMSB0ZXh0LXNtIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFZpZXdcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbWItNFwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICB7cHJvamVjdC50ZWNoU3RhY2subWFwKCh0ZWNoLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB0ZXh0LWdyYXktMzAwIHRleHQtc20gcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBtci0yIG1iLTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGVjaFN0YWNrIiwibGluayIsIlByb2plY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgyIiwibWFwIiwicHJvamVjdCIsImluZGV4Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJwIiwidGVjaCIsImlkeCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});