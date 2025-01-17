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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Sudoku AI Solver\",\n        description: \"Developed an AI system to solve Sudoku puzzles. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"GlucoGuard\",\n        description: \"Developed a mobile application for an automated glucose delivery device, providing a flexible UI for monitoring nocturnal hypoglycemic episodes and receiving alerts. Engineered a logistic regression ML model to predict optimal glucose administration times, leveraging data from the Dexcom API and Firebase. Implemented a Flask server to simulate bluetooth communication on a Raspberry Pi.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://docs.google.com/presentation/d/1Zqc5Ua1vgUs_oG18x9vr4XdF1Pmi6V-MnmFGzapmAXw/edit#slide=id.g2725bdaa23d_0_152\",\n        techStack: [\n            \"React Native\",\n            \"TypeScript\",\n            \"Python\",\n            \"Flask\",\n            \"Figma\",\n            \"HTML/CSS\",\n            \"ML\",\n            \"Dexcom API\",\n            \"Firebase\",\n            \"Raspberry Pi\"\n        ]\n    },\n    {\n        title: \"Edsight\",\n        description: \"Edsight is a free visual analytics platform designed to spur insight, learning, and decision-making for teachers and professional development facilitators. Edsight works with five practical measures developed and tested by researchers and educators.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://www.edsight.io/\",\n        techStack: [\n            \"Python\",\n            \"React\",\n            \"OpenAI API\",\n            \"Prompt Engineering\",\n            \"Research\"\n        ]\n    },\n    {\n        title: \"Columns Game\",\n        description: \"Created a puzzle-based columns game using PyGame libraries in Python, including UI design and visual elements. Incorporated various game mechanics using object-oriented programming.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"PyGame\",\n            \"OOP\"\n        ]\n    },\n    {\n        title: \"Flix\",\n        description: \"Flix is a movie browsing app that pulls data from The Movie Database API, allowing users to explore now-playing films and view detailed movie information and posters. Users can scroll through a list of movies, tap for more details, and toggle between a list and grid view using a CollectionView.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Flix\",\n        techStack: [\n            \"Swift\",\n            \"TMDb API\"\n        ]\n    },\n    {\n        title: \"Parstagram\",\n        description: \"This photo viewing app integrates with a custom Parse backend, enabling users to sign up, log in, and post photos with captions while viewing a global feed and interacting with comments. Features include user authentication, persistent login across app restarts, viewing the latest posts, and adding comments to shared photos.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Instagram\",\n        techStack: [\n            \"Swift\",\n            \"Parse SDK\",\n            \"OAuth\"\n        ]\n    },\n    {\n        title: \"Twitter Clone\",\n        description: \"This Twitter clone allows users to compose, favorite, and retweet tweets while providing a seamless experience with features like login persistence across app restarts, infinite tweet loading, and a pull-to-refresh option. It includes a stylish launch screen, user profile integration, and the ability to view tweets with profile pictures, usernames, and text.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Twitter\",\n        techStack: [\n            \"Swift\",\n            \"OAuth\",\n            \"Twitter API\"\n        ]\n    }\n];\nconst Project = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-4 sm:px-12 md:px-24 py-10\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"project-box bg-[#121212] shadow-md p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto\",\n                        ...(0,_constants_index__WEBPACK_IMPORTED_MODULE_3__.INVIEWSLIDE)(index % 2 === 0 ? -100 : 100, 0),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-64 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: project.image,\n                                    alt: \"thumbnail\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    project.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"inline-block bg-gray-500 text-white px-4 py-1 text-sm rounded-md hover:bg-gray-700\",\n                                        children: \"View\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 mb-4\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwQjtBQUNLO0FBQ2tCO0FBQ1g7QUFFdEMsTUFBTUksV0FBVztJQUNiO1FBQ0lDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscUNBQXFDO1FBQ3JDQyxXQUFXO1lBQUM7WUFBVTtZQUFPO1lBQWE7WUFBUztZQUFjO1NBQVc7SUFDaEY7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQLHFEQUFxRDtRQUNyREMsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFnQjtZQUFjO1lBQVU7WUFBUztZQUFTO1lBQVk7WUFBTTtZQUFjO1lBQVk7U0FBZTtJQUNySTtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1lBQXNCO1NBQVc7SUFDbEY7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQLHFEQUFxRDtRQUNyREMsV0FBVztZQUFDO1lBQVU7WUFBVTtTQUFNO0lBQzFDO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBUztTQUFXO0lBQ3BDO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBUztZQUFhO1NBQVE7SUFDOUM7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFTO1lBQVM7U0FBYztJQUNoRDtDQUNIO0FBRUQsTUFBTUUsVUFBVTtJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWtEQyxJQUFHOzswQkFDbEUsOERBQUNDO2dCQUFHRixXQUFVOzBCQUErRDs7Ozs7OzBCQUc3RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pSLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNkLGdEQUFNQSxDQUFDUSxHQUFHO3dCQUVUQyxXQUFVO3dCQUNULEdBQUdWLDZEQUFXQSxDQUFDZSxRQUFRLE1BQU0sSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFOzswQ0FFaEQsOERBQUNOO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDWCxrREFBS0E7b0NBQ0ppQixLQUFLRixRQUFRVCxLQUFLO29DQUNsQlksS0FBSTtvQ0FDSkMsUUFBTztvQ0FDUEMsV0FBVTtvQ0FDVlQsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQWdDSSxRQUFRWCxLQUFLOzs7Ozs7b0NBQzFEVyxRQUFRUCxJQUFJLGtCQUNYLDhEQUFDYTt3Q0FDQ0MsTUFBTVAsUUFBUVAsSUFBSTt3Q0FDbEJlLFFBQU87d0NBQ1BDLEtBQUk7d0NBQ0piLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7OzswQ0FLTCw4REFBQ2M7Z0NBQUVkLFdBQVU7MENBQXNCSSxRQUFRVixXQUFXOzs7Ozs7MENBRXRELDhEQUFDSztnQ0FBSUMsV0FBVTswQ0FDWkksUUFBUVIsU0FBUyxDQUFDTyxHQUFHLENBQUMsQ0FBQ1ksTUFBTUMsb0JBQzVCLDhEQUFDQzt3Q0FFQ2pCLFdBQVU7a0RBRVRlO3VDQUhJQzs7Ozs7Ozs7Ozs7dUJBL0JOWDs7Ozs7Ozs7Ozs7Ozs7OztBQTJDakI7S0FwRE1QO0FBc0ROLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWFzaGkvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBJTlZJRVdTTElERSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXhcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJXZWIgQ3Jhd2xlciBhbmQgU2VhcmNoIEVuZ2luZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgdGhlIGNvcmUgbG9naWMgb2YgYSBtdWx0aXRocmVhZGVkIFB5dGhvbiB3ZWIgY3Jhd2xlciB0byBpbmRleCA1MCwwMDArIFVDSSBkb21haW4gcGFnZXMsIGluY3JlYXNpbmcgY3Jhd2xlciBzcGVlZCBieSA1IHRpbWVzIGJ5IGFkZGluZyA1IHRocmVhZHMgdG8gYSBzaW5nbGUtdGhyZWFkZWQgYmFzZWxpbmUuIEJ1aWx0IGEgU2ltSGFzaCBhbGdvcml0aG0gdG8gZGV0ZWN0IGR1cGxpY2F0ZXMgYW5kIGF2b2lkZWQgODAlIG9mIGNyYXdsZXIgdHJhcHMgZHVyaW5nIGRlcGxveW1lbnQuIEVuZ2luZWVyZWQgYSBzZWFyY2ggZW5naW5lIGZyb20gc2NyYXRjaCB3aXRoIDwzMG1zIHF1ZXJ5IHJlc3BvbnNlIHRpbWUgZm9yIDUwLDAwMCsgcGFnZXMuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL3d3dy5maWxtYXRlLmNsdWIvXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiQysrXCIsIFwiVGhyZWFkaW5nXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN1ZG9rdSBBSSBTb2x2ZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGFuIEFJIHN5c3RlbSB0byBzb2x2ZSBTdWRva3UgcHV6emxlcy4gSW1wbGVtZW50ZWQgaGV1cmlzdGljcyBhbmQgYmFja3RyYWNraW5nIGZvciBlZmZpY2llbnQgc29sdXRpb24gbmF2aWdhdGlvbiwgcmVkdWNpbmcgYXZlcmFnZSBzb2x2ZSB0aW1lIGJ5IDQwJS5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8veXVqaXNhdG9qci5pdGNoLmlvL2hpZ2hzcGVlZGNoYXNlXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJKYXZhU2NyaXB0XCIsIFwiSFRNTC9DU1NcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdsdWNvR3VhcmRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGVkIGEgbW9iaWxlIGFwcGxpY2F0aW9uIGZvciBhbiBhdXRvbWF0ZWQgZ2x1Y29zZSBkZWxpdmVyeSBkZXZpY2UsIHByb3ZpZGluZyBhIGZsZXhpYmxlIFVJIGZvciBtb25pdG9yaW5nIG5vY3R1cm5hbCBoeXBvZ2x5Y2VtaWMgZXBpc29kZXMgYW5kIHJlY2VpdmluZyBhbGVydHMuIEVuZ2luZWVyZWQgYSBsb2dpc3RpYyByZWdyZXNzaW9uIE1MIG1vZGVsIHRvIHByZWRpY3Qgb3B0aW1hbCBnbHVjb3NlIGFkbWluaXN0cmF0aW9uIHRpbWVzLCBsZXZlcmFnaW5nIGRhdGEgZnJvbSB0aGUgRGV4Y29tIEFQSSBhbmQgRmlyZWJhc2UuIEltcGxlbWVudGVkIGEgRmxhc2sgc2VydmVyIHRvIHNpbXVsYXRlIGJsdWV0b290aCBjb21tdW5pY2F0aW9uIG9uIGEgUmFzcGJlcnJ5IFBpLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vcHJlc2VudGF0aW9uL2QvMVpxYzVVYTF2Z1VzX29HMTh4OXZyNFhkRjFQbWk2Vi1Nbm1GR3phcG1BWHcvZWRpdCNzbGlkZT1pZC5nMjcyNWJkYWEyM2RfMF8xNTJcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJSZWFjdCBOYXRpdmVcIiwgXCJUeXBlU2NyaXB0XCIsIFwiUHl0aG9uXCIsIFwiRmxhc2tcIiwgXCJGaWdtYVwiLCBcIkhUTUwvQ1NTXCIsIFwiTUxcIiwgXCJEZXhjb20gQVBJXCIsIFwiRmlyZWJhc2VcIiwgXCJSYXNwYmVycnkgUGlcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkVkc2lnaHRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRWRzaWdodCBpcyBhIGZyZWUgdmlzdWFsIGFuYWx5dGljcyBwbGF0Zm9ybSBkZXNpZ25lZCB0byBzcHVyIGluc2lnaHQsIGxlYXJuaW5nLCBhbmQgZGVjaXNpb24tbWFraW5nIGZvciB0ZWFjaGVycyBhbmQgcHJvZmVzc2lvbmFsIGRldmVsb3BtZW50IGZhY2lsaXRhdG9ycy4gRWRzaWdodCB3b3JrcyB3aXRoIGZpdmUgcHJhY3RpY2FsIG1lYXN1cmVzIGRldmVsb3BlZCBhbmQgdGVzdGVkIGJ5IHJlc2VhcmNoZXJzIGFuZCBlZHVjYXRvcnMuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5lZHNpZ2h0LmlvL1wiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIlJlYWN0XCIsIFwiT3BlbkFJIEFQSVwiLCBcIlByb21wdCBFbmdpbmVlcmluZ1wiLCBcIlJlc2VhcmNoXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDb2x1bW5zIEdhbWVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlZCBhIHB1enpsZS1iYXNlZCBjb2x1bW5zIGdhbWUgdXNpbmcgUHlHYW1lIGxpYnJhcmllcyBpbiBQeXRob24sIGluY2x1ZGluZyBVSSBkZXNpZ24gYW5kIHZpc3VhbCBlbGVtZW50cy4gSW5jb3Jwb3JhdGVkIHZhcmlvdXMgZ2FtZSBtZWNoYW5pY3MgdXNpbmcgb2JqZWN0LW9yaWVudGVkIHByb2dyYW1taW5nLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJQeUdhbWVcIiwgXCJPT1BcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZsaXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmxpeCBpcyBhIG1vdmllIGJyb3dzaW5nIGFwcCB0aGF0IHB1bGxzIGRhdGEgZnJvbSBUaGUgTW92aWUgRGF0YWJhc2UgQVBJLCBhbGxvd2luZyB1c2VycyB0byBleHBsb3JlIG5vdy1wbGF5aW5nIGZpbG1zIGFuZCB2aWV3IGRldGFpbGVkIG1vdmllIGluZm9ybWF0aW9uIGFuZCBwb3N0ZXJzLiBVc2VycyBjYW4gc2Nyb2xsIHRocm91Z2ggYSBsaXN0IG9mIG1vdmllcywgdGFwIGZvciBtb3JlIGRldGFpbHMsIGFuZCB0b2dnbGUgYmV0d2VlbiBhIGxpc3QgYW5kIGdyaWQgdmlldyB1c2luZyBhIENvbGxlY3Rpb25WaWV3LlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Fhc2hpc2luZ2hoL0ZsaXhcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJTd2lmdFwiLCBcIlRNRGIgQVBJXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQYXJzdGFncmFtXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcGhvdG8gdmlld2luZyBhcHAgaW50ZWdyYXRlcyB3aXRoIGEgY3VzdG9tIFBhcnNlIGJhY2tlbmQsIGVuYWJsaW5nIHVzZXJzIHRvIHNpZ24gdXAsIGxvZyBpbiwgYW5kIHBvc3QgcGhvdG9zIHdpdGggY2FwdGlvbnMgd2hpbGUgdmlld2luZyBhIGdsb2JhbCBmZWVkIGFuZCBpbnRlcmFjdGluZyB3aXRoIGNvbW1lbnRzLiBGZWF0dXJlcyBpbmNsdWRlIHVzZXIgYXV0aGVudGljYXRpb24sIHBlcnNpc3RlbnQgbG9naW4gYWNyb3NzIGFwcCByZXN0YXJ0cywgdmlld2luZyB0aGUgbGF0ZXN0IHBvc3RzLCBhbmQgYWRkaW5nIGNvbW1lbnRzIHRvIHNoYXJlZCBwaG90b3MuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vYWFzaGlzaW5naGgvSW5zdGFncmFtXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiU3dpZnRcIiwgXCJQYXJzZSBTREtcIiwgXCJPQXV0aFwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVHdpdHRlciBDbG9uZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIFR3aXR0ZXIgY2xvbmUgYWxsb3dzIHVzZXJzIHRvIGNvbXBvc2UsIGZhdm9yaXRlLCBhbmQgcmV0d2VldCB0d2VldHMgd2hpbGUgcHJvdmlkaW5nIGEgc2VhbWxlc3MgZXhwZXJpZW5jZSB3aXRoIGZlYXR1cmVzIGxpa2UgbG9naW4gcGVyc2lzdGVuY2UgYWNyb3NzIGFwcCByZXN0YXJ0cywgaW5maW5pdGUgdHdlZXQgbG9hZGluZywgYW5kIGEgcHVsbC10by1yZWZyZXNoIG9wdGlvbi4gSXQgaW5jbHVkZXMgYSBzdHlsaXNoIGxhdW5jaCBzY3JlZW4sIHVzZXIgcHJvZmlsZSBpbnRlZ3JhdGlvbiwgYW5kIHRoZSBhYmlsaXR5IHRvIHZpZXcgdHdlZXRzIHdpdGggcHJvZmlsZSBwaWN0dXJlcywgdXNlcm5hbWVzLCBhbmQgdGV4dC5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hYXNoaXNpbmdoaC9Ud2l0dGVyXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiU3dpZnRcIiwgXCJPQXV0aFwiLCBcIlR3aXR0ZXIgQVBJXCJdLFxuICAgIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyIHB4LTQgc206cHgtMTIgbWQ6cHgtMjQgcHktMTBcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1ncmlkIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgZ2FwLTggbWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtYm94IGJnLVsjMTIxMjEyXSBzaGFkb3ctbWQgcC02IHJvdW5kZWQtbGcgbWF4LXctc20gc206bWF4LXctbWQgbWQ6bWF4LXctbGcgbGc6bWF4LXcteGwgbXgtYXV0b1wiXG4gICAgICAgICAgICB7Li4uSU5WSUVXU0xJREUoaW5kZXggJSAyID09PSAwID8gLTEwMCA6IDEwMCwgMCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC02NCBtYi00XCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntwcm9qZWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIHtwcm9qZWN0LmxpbmsgJiYgKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0Lmxpbmt9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTEgdGV4dC1zbSByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTRcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC1ncmF5LTMwMCB0ZXh0LXNtIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgbXItMiBtYi0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiSU5WSUVXU0xJREUiLCJtb3Rpb24iLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRlY2hTdGFjayIsImxpbmsiLCJQcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMiIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCIsInRlY2giLCJpZHgiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});