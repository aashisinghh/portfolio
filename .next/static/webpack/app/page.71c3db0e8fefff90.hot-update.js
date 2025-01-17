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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _public_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public//arrow-icon.svg */ \"(app-pages-browser)/./public/arrow-icon.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst projects = [\n    {\n        title: \"Web Crawler and Search Engine\",\n        description: \"Developed the core logic of a multithreaded Python web crawler to index 50,000+ UCI domain pages, increasing crawler speed by 5 times by adding 5 threads to a single-threaded baseline. Built a SimHash algorithm to detect duplicates and avoided 80% of crawler traps during deployment. Engineered a search engine from scratch with <30ms query response time for 50,000+ pages.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://www.filmate.club/\",\n        techStack: [\n            \"Python\",\n            \"C++\",\n            \"Threading\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"Sudoku AI Solver\",\n        description: \"Developed an AI system to solve Sudoku puzzles. Implemented heuristics and backtracking for efficient solution navigation, reducing average solve time by 40%.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"Flask\",\n            \"JavaScript\",\n            \"HTML/CSS\"\n        ]\n    },\n    {\n        title: \"GlucoGuard\",\n        description: \"Developed a mobile application for an automated glucose delivery device, providing a flexible UI for monitoring nocturnal hypoglycemic episodes and receiving alerts. Engineered a logistic regression ML model to predict optimal glucose administration times, leveraging data from the Dexcom API and Firebase. Implemented a Flask server to simulate bluetooth communication on a Raspberry Pi.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://docs.google.com/presentation/d/1Zqc5Ua1vgUs_oG18x9vr4XdF1Pmi6V-MnmFGzapmAXw/edit#slide=id.g2725bdaa23d_0_152\",\n        techStack: [\n            \"React Native\",\n            \"TypeScript\",\n            \"Python\",\n            \"Flask\",\n            \"Figma\",\n            \"HTML/CSS\",\n            \"ML\",\n            \"Dexcom API\",\n            \"Firebase\",\n            \"Raspberry Pi\"\n        ]\n    },\n    {\n        title: \"Edsight\",\n        description: \"Edsight is a free visual analytics platform designed to spur insight, learning, and decision-making for teachers and professional development facilitators. Edsight works with five practical measures developed and tested by researchers and educators.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://www.edsight.io/\",\n        techStack: [\n            \"Python\",\n            \"React\",\n            \"OpenAI API\",\n            \"Prompt Engineering\",\n            \"Research\"\n        ]\n    },\n    {\n        title: \"Columns Game\",\n        description: \"Created a puzzle-based columns game using PyGame libraries in Python, including UI design and visual elements. Incorporated various game mechanics using object-oriented programming.\",\n        image: '/public/images/cover-photo.png',\n        // link: \"https://yujisatojr.itch.io/highspeedchase\",\n        techStack: [\n            \"Python\",\n            \"PyGame\",\n            \"OOP\"\n        ]\n    },\n    {\n        title: \"Flix\",\n        description: \"Flix is a movie browsing app that pulls data from The Movie Database API, allowing users to explore now-playing films and view detailed movie information and posters. Users can scroll through a list of movies, tap for more details, and toggle between a list and grid view using a CollectionView.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Flix\",\n        techStack: [\n            \"Swift\",\n            \"TMDb API\"\n        ]\n    },\n    {\n        title: \"Parstagram\",\n        description: \"This photo viewing app integrates with a custom Parse backend, enabling users to sign up, log in, and post photos with captions while viewing a global feed and interacting with comments. Features include user authentication, persistent login across app restarts, viewing the latest posts, and adding comments to shared photos.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Instagram\",\n        techStack: [\n            \"Swift\",\n            \"Parse SDK\",\n            \"OAuth\"\n        ]\n    },\n    {\n        title: \"Twitter Clone\",\n        description: \"This Twitter clone allows users to compose, favorite, and retweet tweets while providing a seamless experience with features like login persistence across app restarts, infinite tweet loading, and a pull-to-refresh option. It includes a stylish launch screen, user profile integration, and the ability to view tweets with profile pictures, usernames, and text.\",\n        image: '/public/images/cover-photo.png',\n        link: \"https://github.com/aashisinghh/Twitter\",\n        techStack: [\n            \"Swift\",\n            \"OAuth\",\n            \"Twitter API\"\n        ]\n    }\n];\nconst Project = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects-container px-4 sm:px-12 md:px-24 py-10\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        className: \"project-box bg-[#121212] shadow-md p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto\",\n                        ...(0,_constants_index__WEBPACK_IMPORTED_MODULE_3__.INVIEWSLIDE)(index % 2 === 0 ? -100 : 100, 0),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-64 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: project.image,\n                                    alt: \"thumbnail\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    project.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"inline-block bg-gray-500 text-white px-4 py-1 text-sm rounded-md hover:bg-gray-700\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: _public_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            alt: \"Arrow Icon\",\n                                            width: 32,\n                                            height: 32\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 mb-4\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-start\",\n                                children: project.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                        children: tech\n                                    }, idx, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aashi/portfolio/components/ProjectsSection.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Project;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQUNrQjtBQUNYO0FBQ1k7QUFFbEQsTUFBTUssV0FBVztJQUNiO1FBQ0lDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1AscUNBQXFDO1FBQ3JDQyxXQUFXO1lBQUM7WUFBVTtZQUFPO1lBQWE7WUFBUztZQUFjO1NBQVc7SUFDaEY7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQLHFEQUFxRDtRQUNyREMsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1NBQVc7SUFDNUQ7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFnQjtZQUFjO1lBQVU7WUFBUztZQUFTO1lBQVk7WUFBTTtZQUFjO1lBQVk7U0FBZTtJQUNySTtJQUNBO1FBQ0lILE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BFLE1BQU07UUFDTkQsV0FBVztZQUFDO1lBQVU7WUFBUztZQUFjO1lBQXNCO1NBQVc7SUFDbEY7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQLHFEQUFxRDtRQUNyREMsV0FBVztZQUFDO1lBQVU7WUFBVTtTQUFNO0lBQzFDO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBUztTQUFXO0lBQ3BDO0lBQ0E7UUFDSUgsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEUsTUFBTTtRQUNORCxXQUFXO1lBQUM7WUFBUztZQUFhO1NBQVE7SUFDOUM7SUFDQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQRSxNQUFNO1FBQ05ELFdBQVc7WUFBQztZQUFTO1lBQVM7U0FBYztJQUNoRDtDQUNIO0FBRUQsTUFBTUUsVUFBVTtJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWtEQyxJQUFHOzswQkFDbEUsOERBQUNDO2dCQUFHRixXQUFVOzBCQUErRDs7Ozs7OzBCQUc3RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pSLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNmLGdEQUFNQSxDQUFDUyxHQUFHO3dCQUVUQyxXQUFVO3dCQUNULEdBQUdYLDZEQUFXQSxDQUFDZ0IsUUFBUSxNQUFNLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRTs7MENBRWhELDhEQUFDTjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1osa0RBQUtBO29DQUNKa0IsS0FBS0YsUUFBUVQsS0FBSztvQ0FDbEJZLEtBQUk7b0NBQ0pDLFFBQU87b0NBQ1BDLFdBQVU7b0NBQ1ZULFdBQVU7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUFnQ0ksUUFBUVgsS0FBSzs7Ozs7O29DQUMxRFcsUUFBUVAsSUFBSSxrQkFDWCw4REFBQ2E7d0NBQ0NDLE1BQU1QLFFBQVFQLElBQUk7d0NBQ2xCZSxRQUFPO3dDQUNQQyxLQUFJO3dDQUNKYixXQUFVO2tEQUVWLDRFQUFDYzs0Q0FBSVIsS0FBS2YsOERBQVNBOzRDQUFFZ0IsS0FBSTs0Q0FBYVEsT0FBTzs0Q0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSS9ELDhEQUFDQztnQ0FBRWpCLFdBQVU7MENBQXNCSSxRQUFRVixXQUFXOzs7Ozs7MENBRXRELDhEQUFDSztnQ0FBSUMsV0FBVTswQ0FDWkksUUFBUVIsU0FBUyxDQUFDTyxHQUFHLENBQUMsQ0FBQ2UsTUFBTUMsb0JBQzVCLDhEQUFDQzt3Q0FFQ3BCLFdBQVU7a0RBRVRrQjt1Q0FISUM7Ozs7Ozs7Ozs7O3VCQS9CTmQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ2pCO0tBcERNUDtBQXNETixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2Fhc2hpL3BvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgSU5WSUVXU0xJREUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgQXJyb3dJY29uIGZyb20gJy4uL3B1YmxpYy8vYXJyb3ctaWNvbi5zdmcnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIldlYiBDcmF3bGVyIGFuZCBTZWFyY2ggRW5naW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BlZCB0aGUgY29yZSBsb2dpYyBvZiBhIG11bHRpdGhyZWFkZWQgUHl0aG9uIHdlYiBjcmF3bGVyIHRvIGluZGV4IDUwLDAwMCsgVUNJIGRvbWFpbiBwYWdlcywgaW5jcmVhc2luZyBjcmF3bGVyIHNwZWVkIGJ5IDUgdGltZXMgYnkgYWRkaW5nIDUgdGhyZWFkcyB0byBhIHNpbmdsZS10aHJlYWRlZCBiYXNlbGluZS4gQnVpbHQgYSBTaW1IYXNoIGFsZ29yaXRobSB0byBkZXRlY3QgZHVwbGljYXRlcyBhbmQgYXZvaWRlZCA4MCUgb2YgY3Jhd2xlciB0cmFwcyBkdXJpbmcgZGVwbG95bWVudC4gRW5naW5lZXJlZCBhIHNlYXJjaCBlbmdpbmUgZnJvbSBzY3JhdGNoIHdpdGggPDMwbXMgcXVlcnkgcmVzcG9uc2UgdGltZSBmb3IgNTAsMDAwKyBwYWdlcy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8vd3d3LmZpbG1hdGUuY2x1Yi9cIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJDKytcIiwgXCJUaHJlYWRpbmdcIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3Vkb2t1IEFJIFNvbHZlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYW4gQUkgc3lzdGVtIHRvIHNvbHZlIFN1ZG9rdSBwdXp6bGVzLiBJbXBsZW1lbnRlZCBoZXVyaXN0aWNzIGFuZCBiYWNrdHJhY2tpbmcgZm9yIGVmZmljaWVudCBzb2x1dGlvbiBuYXZpZ2F0aW9uLCByZWR1Y2luZyBhdmVyYWdlIHNvbHZlIHRpbWUgYnkgNDAlLlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIC8vIGxpbms6IFwiaHR0cHM6Ly95dWppc2F0b2pyLml0Y2guaW8vaGlnaHNwZWVkY2hhc2VcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkphdmFTY3JpcHRcIiwgXCJIVE1ML0NTU1wiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiR2x1Y29HdWFyZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYSBtb2JpbGUgYXBwbGljYXRpb24gZm9yIGFuIGF1dG9tYXRlZCBnbHVjb3NlIGRlbGl2ZXJ5IGRldmljZSwgcHJvdmlkaW5nIGEgZmxleGlibGUgVUkgZm9yIG1vbml0b3Jpbmcgbm9jdHVybmFsIGh5cG9nbHljZW1pYyBlcGlzb2RlcyBhbmQgcmVjZWl2aW5nIGFsZXJ0cy4gRW5naW5lZXJlZCBhIGxvZ2lzdGljIHJlZ3Jlc3Npb24gTUwgbW9kZWwgdG8gcHJlZGljdCBvcHRpbWFsIGdsdWNvc2UgYWRtaW5pc3RyYXRpb24gdGltZXMsIGxldmVyYWdpbmcgZGF0YSBmcm9tIHRoZSBEZXhjb20gQVBJIGFuZCBGaXJlYmFzZS4gSW1wbGVtZW50ZWQgYSBGbGFzayBzZXJ2ZXIgdG8gc2ltdWxhdGUgYmx1ZXRvb3RoIGNvbW11bmljYXRpb24gb24gYSBSYXNwYmVycnkgUGkuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9wcmVzZW50YXRpb24vZC8xWnFjNVVhMXZnVXNfb0cxOHg5dnI0WGRGMVBtaTZWLU1ubUZHemFwbUFYdy9lZGl0I3NsaWRlPWlkLmcyNzI1YmRhYTIzZF8wXzE1MlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlJlYWN0IE5hdGl2ZVwiLCBcIlR5cGVTY3JpcHRcIiwgXCJQeXRob25cIiwgXCJGbGFza1wiLCBcIkZpZ21hXCIsIFwiSFRNTC9DU1NcIiwgXCJNTFwiLCBcIkRleGNvbSBBUElcIiwgXCJGaXJlYmFzZVwiLCBcIlJhc3BiZXJyeSBQaVwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRWRzaWdodFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFZHNpZ2h0IGlzIGEgZnJlZSB2aXN1YWwgYW5hbHl0aWNzIHBsYXRmb3JtIGRlc2lnbmVkIHRvIHNwdXIgaW5zaWdodCwgbGVhcm5pbmcsIGFuZCBkZWNpc2lvbi1tYWtpbmcgZm9yIHRlYWNoZXJzIGFuZCBwcm9mZXNzaW9uYWwgZGV2ZWxvcG1lbnQgZmFjaWxpdGF0b3JzLiBFZHNpZ2h0IHdvcmtzIHdpdGggZml2ZSBwcmFjdGljYWwgbWVhc3VyZXMgZGV2ZWxvcGVkIGFuZCB0ZXN0ZWQgYnkgcmVzZWFyY2hlcnMgYW5kIGVkdWNhdG9ycy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmVkc2lnaHQuaW8vXCIsXG4gICAgICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiUmVhY3RcIiwgXCJPcGVuQUkgQVBJXCIsIFwiUHJvbXB0IEVuZ2luZWVyaW5nXCIsIFwiUmVzZWFyY2hcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbHVtbnMgR2FtZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGVkIGEgcHV6emxlLWJhc2VkIGNvbHVtbnMgZ2FtZSB1c2luZyBQeUdhbWUgbGlicmFyaWVzIGluIFB5dGhvbiwgaW5jbHVkaW5nIFVJIGRlc2lnbiBhbmQgdmlzdWFsIGVsZW1lbnRzLiBJbmNvcnBvcmF0ZWQgdmFyaW91cyBnYW1lIG1lY2hhbmljcyB1c2luZyBvYmplY3Qtb3JpZW50ZWQgcHJvZ3JhbW1pbmcuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL3l1amlzYXRvanIuaXRjaC5pby9oaWdoc3BlZWRjaGFzZVwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIlB5R2FtZVwiLCBcIk9PUFwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmxpeFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGbGl4IGlzIGEgbW92aWUgYnJvd3NpbmcgYXBwIHRoYXQgcHVsbHMgZGF0YSBmcm9tIFRoZSBNb3ZpZSBEYXRhYmFzZSBBUEksIGFsbG93aW5nIHVzZXJzIHRvIGV4cGxvcmUgbm93LXBsYXlpbmcgZmlsbXMgYW5kIHZpZXcgZGV0YWlsZWQgbW92aWUgaW5mb3JtYXRpb24gYW5kIHBvc3RlcnMuIFVzZXJzIGNhbiBzY3JvbGwgdGhyb3VnaCBhIGxpc3Qgb2YgbW92aWVzLCB0YXAgZm9yIG1vcmUgZGV0YWlscywgYW5kIHRvZ2dsZSBiZXR3ZWVuIGEgbGlzdCBhbmQgZ3JpZCB2aWV3IHVzaW5nIGEgQ29sbGVjdGlvblZpZXcuXCIsXG4gICAgICAgIGltYWdlOiAnL3B1YmxpYy9pbWFnZXMvY292ZXItcGhvdG8ucG5nJyxcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vYWFzaGlzaW5naGgvRmxpeFwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFtcIlN3aWZ0XCIsIFwiVE1EYiBBUElcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlBhcnN0YWdyYW1cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBwaG90byB2aWV3aW5nIGFwcCBpbnRlZ3JhdGVzIHdpdGggYSBjdXN0b20gUGFyc2UgYmFja2VuZCwgZW5hYmxpbmcgdXNlcnMgdG8gc2lnbiB1cCwgbG9nIGluLCBhbmQgcG9zdCBwaG90b3Mgd2l0aCBjYXB0aW9ucyB3aGlsZSB2aWV3aW5nIGEgZ2xvYmFsIGZlZWQgYW5kIGludGVyYWN0aW5nIHdpdGggY29tbWVudHMuIEZlYXR1cmVzIGluY2x1ZGUgdXNlciBhdXRoZW50aWNhdGlvbiwgcGVyc2lzdGVudCBsb2dpbiBhY3Jvc3MgYXBwIHJlc3RhcnRzLCB2aWV3aW5nIHRoZSBsYXRlc3QgcG9zdHMsIGFuZCBhZGRpbmcgY29tbWVudHMgdG8gc2hhcmVkIHBob3Rvcy5cIixcbiAgICAgICAgaW1hZ2U6ICcvcHVibGljL2ltYWdlcy9jb3Zlci1waG90by5wbmcnLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hYXNoaXNpbmdoaC9JbnN0YWdyYW1cIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJTd2lmdFwiLCBcIlBhcnNlIFNES1wiLCBcIk9BdXRoXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJUd2l0dGVyIENsb25lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgVHdpdHRlciBjbG9uZSBhbGxvd3MgdXNlcnMgdG8gY29tcG9zZSwgZmF2b3JpdGUsIGFuZCByZXR3ZWV0IHR3ZWV0cyB3aGlsZSBwcm92aWRpbmcgYSBzZWFtbGVzcyBleHBlcmllbmNlIHdpdGggZmVhdHVyZXMgbGlrZSBsb2dpbiBwZXJzaXN0ZW5jZSBhY3Jvc3MgYXBwIHJlc3RhcnRzLCBpbmZpbml0ZSB0d2VldCBsb2FkaW5nLCBhbmQgYSBwdWxsLXRvLXJlZnJlc2ggb3B0aW9uLiBJdCBpbmNsdWRlcyBhIHN0eWxpc2ggbGF1bmNoIHNjcmVlbiwgdXNlciBwcm9maWxlIGludGVncmF0aW9uLCBhbmQgdGhlIGFiaWxpdHkgdG8gdmlldyB0d2VldHMgd2l0aCBwcm9maWxlIHBpY3R1cmVzLCB1c2VybmFtZXMsIGFuZCB0ZXh0LlwiLFxuICAgICAgICBpbWFnZTogJy9wdWJsaWMvaW1hZ2VzL2NvdmVyLXBob3RvLnBuZycsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Fhc2hpc2luZ2hoL1R3aXR0ZXJcIixcbiAgICAgICAgdGVjaFN0YWNrOiBbXCJTd2lmdFwiLCBcIk9BdXRoXCIsIFwiVHdpdHRlciBBUElcIl0sXG4gICAgfSxcbl07XG5cbmNvbnN0IFByb2plY3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1jb250YWluZXIgcHgtNCBzbTpweC0xMiBtZDpweC0yNCBweS0xMFwiIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC00IG1iLTggbWQ6bWItMTJcIj5cbiAgICAgICAgUHJvamVjdHNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWdyaWQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBnYXAtOCBtYXgtdy1zY3JlZW4teGwgbXgtYXV0b1wiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1ib3ggYmctWyMxMjEyMTJdIHNoYWRvdy1tZCBwLTYgcm91bmRlZC1sZyBtYXgtdy1zbSBzbTptYXgtdy1tZCBtZDptYXgtdy1sZyBsZzptYXgtdy14bCBteC1hdXRvXCJcbiAgICAgICAgICAgIHsuLi5JTlZJRVdTTElERShpbmRleCAlIDIgPT09IDAgPyAtMTAwIDogMTAwLCAwKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLTY0IG1iLTRcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD1cInRodW1ibmFpbFwiXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAge3Byb2plY3QubGluayAmJiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QubGlua31cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMSB0ZXh0LXNtIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBcnJvd0ljb259IGFsdD1cIkFycm93IEljb25cIiB3aWR0aD17MzJ9IGhlaWdodD17MzJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTRcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC1ncmF5LTMwMCB0ZXh0LXNtIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgbXItMiBtYi0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiSU5WSUVXU0xJREUiLCJtb3Rpb24iLCJBcnJvd0ljb24iLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRlY2hTdGFjayIsImxpbmsiLCJQcm9qZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMiIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwidGVjaCIsImlkeCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectsSection.jsx\n"));

/***/ })

});