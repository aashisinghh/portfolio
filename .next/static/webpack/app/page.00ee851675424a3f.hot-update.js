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

/***/ "(app-pages-browser)/./components/ExperienceSection.jsx":
/*!******************************************!*\
  !*** ./components/ExperienceSection.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__  auto */ \n\n\n\nconst timelineData = [\n    {\n        label: \"UCI Molloi Imaging Physics Lab\",\n        date: \"September 2024 – Present\",\n        title: \"Machine Learning Researcher\",\n        location: \"Irvine, CA\",\n        company: \"Molloi Imaging Physics Lab @ UCI School of Medicine\",\n        content: \"Contributing to deep learning-based cardiovascular disease diagnosis through heart chamber segmentation and non-invasive medical imaging techniques. Evaluating and improving CyTran, a GAN-based model, for translating contrast and non-contrast CT scans.\",\n        techStack: [\n            \"Python\",\n            \"PyTorch\",\n            \"Deep Learning\",\n            \"Machine Learning\"\n        ],\n        logo: \"/molloi-logo.jpg\"\n    },\n    {\n        label: \"UCI HERO Lab\",\n        date: \"September 2024 – Present\",\n        title: \"Software Development Researcher\",\n        location: \"Irvine, CA\",\n        company: \"HERO Lab @ UCI School of Engineering\",\n        content: \"Developing a deep learning system to reconstruct ECG signals from real-time facial video using cWGANs. Leveraging AWS SageMaker for model training, deployment, and experimentation.\",\n        techStack: [\n            \"Python\",\n            \"Deep Learning\",\n            \"AWS SageMaker\",\n            \"AWS S3\",\n            \"Machine Learning\",\n            \"OpenCV\"\n        ],\n        logo: \"/hero-logo.png\"\n    },\n    {\n        label: \"UCI Design and Partnership Lab\",\n        date: \"January 2024 – Present\",\n        title: \"Software Developer\",\n        location: \"Irvine, CA\",\n        company: \"Design and Partnership Lab\",\n        content: \"Collaborating with Chan Zuckerberg Initiative to develop an AI dashboard for evaluating student performance using LLMs. Employing advanced prompt engineering techniques, such as few-shot learning, chain-of-thought prompting, to assess ~500 student responses on the AUHSD 5 C's performance rubric with 75% accuracy. Creating and refining ~130 domains/subdomains to evaluate diverse student skills based on AUHSD performance criteria.\",\n        techStack: [\n            \"Python\",\n            \"OpenAI API\",\n            \"Prompt Engineering\",\n            \"LLMs\"\n        ],\n        logo: \"/daplab-logo.jpg\"\n    },\n    {\n        label: \"UnitedHealth Group\",\n        date: \"June 2024 – August 2024\",\n        title: \"Software Engineering Intern\",\n        location: \"Boston, MA\",\n        company: \"UnitedHealth Group – Optum\",\n        content: \"Engineered a next best activity recommendation ML model for UnitedHealthcare Rewards App users using Amazon Personalize, resulting in a 30% increase in user engagement based on preliminary testing. Utilized AWS Glue to process and transform over 5 million user data records into clean datasets for model training. Built and deployed a GraphQL API using AWS Lambda and AWS AppSync that exposed interaction with the ML model, integrating recommendation data within a frontend proof of concept. Implemented a Cloud Development Kit (CDK) to automate infrastructure as code (IaC) creating reusable modules for AWS services, and integrated a CI/CD pipeline with GitHub Actions, which led to a 35% faster deployment cycle.\",\n        techStack: [\n            \"AWS Lambda\",\n            \"AWS AppSync\",\n            \"AWS Personalize\",\n            \"AWS Glue\",\n            \"AWS S3\",\n            \"AWS DynamoDB\",\n            \"AWS CDK\",\n            \"Python\",\n            \"React Native\",\n            \"GitHub Actions\",\n            \"CI/CD\",\n            \"ML\"\n        ],\n        logo: \"/unitedhealthgroup-logo.jpg\"\n    },\n    {\n        label: \"IMD Solutions\",\n        date: \"January 2024 – May 2024\",\n        title: \"Software Engineering Intern\",\n        location: \"Newport Beach, CA\",\n        company: \"IMD Solutions\",\n        content: \"Developed a mobile application for the Automated Glucose Delivery Device (GlucoGuard), providing a flexible user interface for monitoring nocturnal hypoglycemic episodes and receiving alerts to enhance patient safety. Engineered a logistic regression ML model with an average precision score of 93.1% to predict optimal glucose administration times as a preventative measure, leveraging sandbox data from the Dexcom API and Firebase. Implemented a Flask server to simulate bluetooth communication on a Raspberry Pi, facilitating device interactions.\",\n        techStack: [\n            \"React Native\",\n            \"TypeScript\",\n            \"Python\",\n            \"Flask\",\n            \"Figma\",\n            \"HTML/CSS\",\n            \"ML\",\n            \"Dexcom API\",\n            \"Firebase\",\n            \"Raspberry Pi\"\n        ]\n    }\n];\nconst Timeline = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"relative font-inter antialiased min-h-screen flex flex-col justify-center overflow-hidden\",\n        id: \"experience\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative max-w-4xl mx-auto p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                    children: \"Experience\"\n                }, void 0, false, {\n                    fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    className: \"relative border-s-2 border-gray-200 dark:border-gray-700\",\n                    children: timelineData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-10 ms-16\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                ...(0,_constants_index__WEBPACK_IMPORTED_MODULE_2__.INVIEWSLIDE)(100, 0),\n                                className: \"bg-[#121212] p-6 rounded-lg shadow-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap justify-between items-center mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full -start-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: item.logo || \"/briefcase-icon.svg\",\n                                                    alt: \"Logo\",\n                                                    className: \"\".concat(item.logo ? \"w-16 h-16 object-cover rounded-full\" : \"w-8 h-8\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-xl font-semibold text-gray-900 dark:text-white\",\n                                                        children: item.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-md text-gray-400 dark:text-gray-500\",\n                                                        children: item.company\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col items-end\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-sm text-gray-400 dark:text-gray-500\",\n                                                        children: item.date\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-sm text-gray-400 dark:text-gray-500\",\n                                                        children: item.location\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-base font-normal text-gray-500 dark:text-gray-400 mb-4\",\n                                        children: item.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap mt-4 justify-start\",\n                                        children: item.techStack.map((tech, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2\",\n                                                children: tech\n                                            }, idx, false, {\n                                                fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aashi/portfolio/components/ExperienceSection.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Timeline;\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRXhwZXJpZW5jZVNlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFDbUM7QUFDdkI7QUFFdEMsTUFBTUksZUFBZTtJQUNuQjtRQUNFQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FDRTtRQUNGQyxXQUFXO1lBQUM7WUFBVTtZQUFXO1lBQWlCO1NBQW1CO1FBQ3JFQyxNQUFNO0lBQ1I7SUFDQTtRQUNFUCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsU0FDRTtRQUNGQyxXQUFXO1lBQUM7WUFBVTtZQUFpQjtZQUFpQjtZQUFVO1lBQW9CO1NBQVM7UUFDL0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VQLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxTQUNFO1FBQ0ZDLFdBQVc7WUFBQztZQUFVO1lBQWM7WUFBc0I7U0FBTztRQUNqRUMsTUFBTTtJQUNSO0lBQ0E7UUFDRVAsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFNBQ0U7UUFDRkMsV0FBVztZQUFDO1lBQWM7WUFBZTtZQUFtQjtZQUFZO1lBQVU7WUFBZ0I7WUFBVztZQUFVO1lBQWdCO1lBQWtCO1lBQVM7U0FBSztRQUN2S0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVAsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFNBQ0U7UUFDRkMsV0FBVztZQUFDO1lBQWdCO1lBQWM7WUFBVTtZQUFTO1lBQVM7WUFBWTtZQUFNO1lBQWM7WUFBWTtTQUFlO0lBRW5JO0NBQ0Q7QUFFRCxNQUFNRSxXQUFXO0lBQ2YscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7UUFBNEZDLElBQUc7a0JBQzdHLDRFQUFDQztZQUFJRixXQUFVOzs4QkFDYiw4REFBQ0c7b0JBQUdILFdBQVU7OEJBQStEOzs7Ozs7OEJBQzdFLDhEQUFDSTtvQkFBR0osV0FBVTs4QkFDWFgsYUFBYWdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdkIsOERBQUNDOzRCQUFlUixXQUFVO3NDQUN4Qiw0RUFBQ1osZ0RBQU1BLENBQUNjLEdBQUc7Z0NBQ1IsR0FBR2hCLDZEQUFXQSxDQUFDLEtBQUssRUFBRTtnQ0FDdkJjLFdBQVU7O2tEQUNWLDhEQUFDRTt3Q0FBSUYsV0FBVTs7MERBRWIsOERBQUNTO2dEQUFLVCxXQUFVOzBEQUNkLDRFQUFDVTtvREFDQ0MsS0FBS0wsS0FBS1QsSUFBSSxJQUFJO29EQUNsQmUsS0FBSTtvREFDSlosV0FBVyxHQUVWLE9BRENNLEtBQUtULElBQUksR0FBRyx3Q0FBd0M7Ozs7Ozs7Ozs7OzBEQUkxRCw4REFBQ0s7Z0RBQUlGLFdBQVU7O2tFQUNiLDhEQUFDUzt3REFBS1QsV0FBVTtrRUFBdURNLEtBQUtkLEtBQUs7Ozs7OztrRUFDakYsOERBQUNpQjt3REFBS1QsV0FBVTtrRUFBNENNLEtBQUtaLE9BQU87Ozs7Ozs7Ozs7OzswREFFMUUsOERBQUNRO2dEQUFJRixXQUFVOztrRUFDYiw4REFBQ1M7d0RBQUtULFdBQVU7a0VBQTRDTSxLQUFLZixJQUFJOzs7Ozs7a0VBQ3JFLDhEQUFDa0I7d0RBQUtULFdBQVU7a0VBQTRDTSxLQUFLYixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRzdFLDhEQUFDb0I7d0NBQUViLFdBQVU7a0RBQ1ZNLEtBQUtYLE9BQU87Ozs7OztrREFFZiw4REFBQ087d0NBQUlGLFdBQVU7a0RBQ1pNLEtBQUtWLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDLENBQUNTLE1BQU1DLG9CQUN6Qiw4REFBQ047Z0RBQWVULFdBQVU7MERBQ3ZCYzsrQ0FEUUM7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBN0JWUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNyQjtLQWhETVQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaS9wb3J0Zm9saW8vY29tcG9uZW50cy9FeHBlcmllbmNlU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJTlZJRVdTTElERSwgVFlQRVdSSVRFUiB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXhcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcblxuY29uc3QgdGltZWxpbmVEYXRhID0gW1xuICB7XG4gICAgbGFiZWw6IFwiVUNJIE1vbGxvaSBJbWFnaW5nIFBoeXNpY3MgTGFiXCIsXG4gICAgZGF0ZTogXCJTZXB0ZW1iZXIgMjAyNCDigJMgUHJlc2VudFwiLFxuICAgIHRpdGxlOiBcIk1hY2hpbmUgTGVhcm5pbmcgUmVzZWFyY2hlclwiLFxuICAgIGxvY2F0aW9uOiBcIklydmluZSwgQ0FcIixcbiAgICBjb21wYW55OiBcIk1vbGxvaSBJbWFnaW5nIFBoeXNpY3MgTGFiIEAgVUNJIFNjaG9vbCBvZiBNZWRpY2luZVwiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIkNvbnRyaWJ1dGluZyB0byBkZWVwIGxlYXJuaW5nLWJhc2VkIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2UgZGlhZ25vc2lzIHRocm91Z2ggaGVhcnQgY2hhbWJlciBzZWdtZW50YXRpb24gYW5kIG5vbi1pbnZhc2l2ZSBtZWRpY2FsIGltYWdpbmcgdGVjaG5pcXVlcy4gRXZhbHVhdGluZyBhbmQgaW1wcm92aW5nIEN5VHJhbiwgYSBHQU4tYmFzZWQgbW9kZWwsIGZvciB0cmFuc2xhdGluZyBjb250cmFzdCBhbmQgbm9uLWNvbnRyYXN0IENUIHNjYW5zLlwiLFxuICAgIHRlY2hTdGFjazogW1wiUHl0aG9uXCIsIFwiUHlUb3JjaFwiLCBcIkRlZXAgTGVhcm5pbmdcIiwgXCJNYWNoaW5lIExlYXJuaW5nXCJdLFxuICAgIGxvZ286IFwiL21vbGxvaS1sb2dvLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiVUNJIEhFUk8gTGFiXCIsXG4gICAgZGF0ZTogXCJTZXB0ZW1iZXIgMjAyNCDigJMgUHJlc2VudFwiLFxuICAgIHRpdGxlOiBcIlNvZnR3YXJlIERldmVsb3BtZW50IFJlc2VhcmNoZXJcIixcbiAgICBsb2NhdGlvbjogXCJJcnZpbmUsIENBXCIsXG4gICAgY29tcGFueTogXCJIRVJPIExhYiBAIFVDSSBTY2hvb2wgb2YgRW5naW5lZXJpbmdcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJEZXZlbG9waW5nIGEgZGVlcCBsZWFybmluZyBzeXN0ZW0gdG8gcmVjb25zdHJ1Y3QgRUNHIHNpZ25hbHMgZnJvbSByZWFsLXRpbWUgZmFjaWFsIHZpZGVvIHVzaW5nIGNXR0FOcy4gTGV2ZXJhZ2luZyBBV1MgU2FnZU1ha2VyIGZvciBtb2RlbCB0cmFpbmluZywgZGVwbG95bWVudCwgYW5kIGV4cGVyaW1lbnRhdGlvbi5cIixcbiAgICB0ZWNoU3RhY2s6IFtcIlB5dGhvblwiLCBcIkRlZXAgTGVhcm5pbmdcIiwgXCJBV1MgU2FnZU1ha2VyXCIsIFwiQVdTIFMzXCIsIFwiTWFjaGluZSBMZWFybmluZ1wiLCBcIk9wZW5DVlwiXSxcbiAgICBsb2dvOiBcIi9oZXJvLWxvZ28ucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJVQ0kgRGVzaWduIGFuZCBQYXJ0bmVyc2hpcCBMYWJcIixcbiAgICBkYXRlOiBcIkphbnVhcnkgMjAyNCDigJMgUHJlc2VudFwiLFxuICAgIHRpdGxlOiBcIlNvZnR3YXJlIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIklydmluZSwgQ0FcIixcbiAgICBjb21wYW55OiBcIkRlc2lnbiBhbmQgUGFydG5lcnNoaXAgTGFiXCIsXG4gICAgY29udGVudDpcbiAgICAgIFwiQ29sbGFib3JhdGluZyB3aXRoIENoYW4gWnVja2VyYmVyZyBJbml0aWF0aXZlIHRvIGRldmVsb3AgYW4gQUkgZGFzaGJvYXJkIGZvciBldmFsdWF0aW5nIHN0dWRlbnQgcGVyZm9ybWFuY2UgdXNpbmcgTExNcy4gRW1wbG95aW5nIGFkdmFuY2VkIHByb21wdCBlbmdpbmVlcmluZyB0ZWNobmlxdWVzLCBzdWNoIGFzIGZldy1zaG90IGxlYXJuaW5nLCBjaGFpbi1vZi10aG91Z2h0IHByb21wdGluZywgdG8gYXNzZXNzIH41MDAgc3R1ZGVudCByZXNwb25zZXMgb24gdGhlIEFVSFNEIDUgQydzIHBlcmZvcm1hbmNlIHJ1YnJpYyB3aXRoIDc1JSBhY2N1cmFjeS4gQ3JlYXRpbmcgYW5kIHJlZmluaW5nIH4xMzAgZG9tYWlucy9zdWJkb21haW5zIHRvIGV2YWx1YXRlIGRpdmVyc2Ugc3R1ZGVudCBza2lsbHMgYmFzZWQgb24gQVVIU0QgcGVyZm9ybWFuY2UgY3JpdGVyaWEuXCIsXG4gICAgdGVjaFN0YWNrOiBbXCJQeXRob25cIiwgXCJPcGVuQUkgQVBJXCIsIFwiUHJvbXB0IEVuZ2luZWVyaW5nXCIsIFwiTExNc1wiXSxcbiAgICBsb2dvOiBcIi9kYXBsYWItbG9nby5qcGdcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlVuaXRlZEhlYWx0aCBHcm91cFwiLFxuICAgIGRhdGU6IFwiSnVuZSAyMDI0IOKAkyBBdWd1c3QgMjAyNFwiLFxuICAgIHRpdGxlOiBcIlNvZnR3YXJlIEVuZ2luZWVyaW5nIEludGVyblwiLFxuICAgIGxvY2F0aW9uOiBcIkJvc3RvbiwgTUFcIixcbiAgICBjb21wYW55OiBcIlVuaXRlZEhlYWx0aCBHcm91cCDigJMgT3B0dW1cIixcbiAgICBjb250ZW50OlxuICAgICAgXCJFbmdpbmVlcmVkIGEgbmV4dCBiZXN0IGFjdGl2aXR5IHJlY29tbWVuZGF0aW9uIE1MIG1vZGVsIGZvciBVbml0ZWRIZWFsdGhjYXJlIFJld2FyZHMgQXBwIHVzZXJzIHVzaW5nIEFtYXpvbiBQZXJzb25hbGl6ZSwgcmVzdWx0aW5nIGluIGEgMzAlIGluY3JlYXNlIGluIHVzZXIgZW5nYWdlbWVudCBiYXNlZCBvbiBwcmVsaW1pbmFyeSB0ZXN0aW5nLiBVdGlsaXplZCBBV1MgR2x1ZSB0byBwcm9jZXNzIGFuZCB0cmFuc2Zvcm0gb3ZlciA1IG1pbGxpb24gdXNlciBkYXRhIHJlY29yZHMgaW50byBjbGVhbiBkYXRhc2V0cyBmb3IgbW9kZWwgdHJhaW5pbmcuIEJ1aWx0IGFuZCBkZXBsb3llZCBhIEdyYXBoUUwgQVBJIHVzaW5nIEFXUyBMYW1iZGEgYW5kIEFXUyBBcHBTeW5jIHRoYXQgZXhwb3NlZCBpbnRlcmFjdGlvbiB3aXRoIHRoZSBNTCBtb2RlbCwgaW50ZWdyYXRpbmcgcmVjb21tZW5kYXRpb24gZGF0YSB3aXRoaW4gYSBmcm9udGVuZCBwcm9vZiBvZiBjb25jZXB0LiBJbXBsZW1lbnRlZCBhIENsb3VkIERldmVsb3BtZW50IEtpdCAoQ0RLKSB0byBhdXRvbWF0ZSBpbmZyYXN0cnVjdHVyZSBhcyBjb2RlIChJYUMpIGNyZWF0aW5nIHJldXNhYmxlIG1vZHVsZXMgZm9yIEFXUyBzZXJ2aWNlcywgYW5kIGludGVncmF0ZWQgYSBDSS9DRCBwaXBlbGluZSB3aXRoIEdpdEh1YiBBY3Rpb25zLCB3aGljaCBsZWQgdG8gYSAzNSUgZmFzdGVyIGRlcGxveW1lbnQgY3ljbGUuXCIsXG4gICAgdGVjaFN0YWNrOiBbXCJBV1MgTGFtYmRhXCIsIFwiQVdTIEFwcFN5bmNcIiwgXCJBV1MgUGVyc29uYWxpemVcIiwgXCJBV1MgR2x1ZVwiLCBcIkFXUyBTM1wiLCBcIkFXUyBEeW5hbW9EQlwiLCBcIkFXUyBDREtcIiwgXCJQeXRob25cIiwgXCJSZWFjdCBOYXRpdmVcIiwgXCJHaXRIdWIgQWN0aW9uc1wiLCBcIkNJL0NEXCIsIFwiTUxcIl0sXG4gICAgbG9nbzogXCIvdW5pdGVkaGVhbHRoZ3JvdXAtbG9nby5qcGdcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIklNRCBTb2x1dGlvbnNcIixcbiAgICBkYXRlOiBcIkphbnVhcnkgMjAyNCDigJMgTWF5IDIwMjRcIixcbiAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlcmluZyBJbnRlcm5cIixcbiAgICBsb2NhdGlvbjogXCJOZXdwb3J0IEJlYWNoLCBDQVwiLFxuICAgIGNvbXBhbnk6IFwiSU1EIFNvbHV0aW9uc1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIkRldmVsb3BlZCBhIG1vYmlsZSBhcHBsaWNhdGlvbiBmb3IgdGhlIEF1dG9tYXRlZCBHbHVjb3NlIERlbGl2ZXJ5IERldmljZSAoR2x1Y29HdWFyZCksIHByb3ZpZGluZyBhIGZsZXhpYmxlIHVzZXIgaW50ZXJmYWNlIGZvciBtb25pdG9yaW5nIG5vY3R1cm5hbCBoeXBvZ2x5Y2VtaWMgZXBpc29kZXMgYW5kIHJlY2VpdmluZyBhbGVydHMgdG8gZW5oYW5jZSBwYXRpZW50IHNhZmV0eS4gRW5naW5lZXJlZCBhIGxvZ2lzdGljIHJlZ3Jlc3Npb24gTUwgbW9kZWwgd2l0aCBhbiBhdmVyYWdlIHByZWNpc2lvbiBzY29yZSBvZiA5My4xJSB0byBwcmVkaWN0IG9wdGltYWwgZ2x1Y29zZSBhZG1pbmlzdHJhdGlvbiB0aW1lcyBhcyBhIHByZXZlbnRhdGl2ZSBtZWFzdXJlLCBsZXZlcmFnaW5nIHNhbmRib3ggZGF0YSBmcm9tIHRoZSBEZXhjb20gQVBJIGFuZCBGaXJlYmFzZS4gSW1wbGVtZW50ZWQgYSBGbGFzayBzZXJ2ZXIgdG8gc2ltdWxhdGUgYmx1ZXRvb3RoIGNvbW11bmljYXRpb24gb24gYSBSYXNwYmVycnkgUGksIGZhY2lsaXRhdGluZyBkZXZpY2UgaW50ZXJhY3Rpb25zLlwiLFxuICAgIHRlY2hTdGFjazogW1wiUmVhY3QgTmF0aXZlXCIsIFwiVHlwZVNjcmlwdFwiLCBcIlB5dGhvblwiLCBcIkZsYXNrXCIsIFwiRmlnbWFcIiwgXCJIVE1ML0NTU1wiLCBcIk1MXCIsIFwiRGV4Y29tIEFQSVwiLCBcIkZpcmViYXNlXCIsIFwiUmFzcGJlcnJ5IFBpXCJdLFxuICAgIC8vIGxvZ286IFwiL3BhdGgvdG8vdWNpLWxvZ28ucG5nXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LWludGVyIGFudGlhbGlhc2VkIG1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlblwiIGlkPVwiZXhwZXJpZW5jZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy00eGwgbXgtYXV0byBwLThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTQgbWItOCBtZDptYi0xMlwiPkV4cGVyaWVuY2U8L2gyPlxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLXMtMiBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICB7dGltZWxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0xMCBtcy0xNlwiPlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICB7Li4uSU5WSUVXU0xJREUoMTAwLCAwKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxMjEyMTJdIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICB7LyogTW92ZSBsb2dvIGltYWdlIG91dHNpZGUgdGhlIG1vdGlvbi5kaXYgKi99XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTE2IGgtMTYgYmctZ3JheS04MDAgcm91bmRlZC1mdWxsIC1zdGFydC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ubG9nbyB8fCBcIi9icmllZmNhc2UtaWNvbi5zdmdcIn0gLy8gVXNlIGN1c3RvbSBsb2dvIG9yIGZhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9nbyA/IFwidy0xNiBoLTE2IG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGxcIiA6IFwidy04IGgtOFwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+e2l0ZW0uY29tcGFueX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPntpdGVtLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+e2l0ZW0ubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZWNoU3RhY2subWFwKCh0ZWNoLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIG1yLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9vbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJTlZJRVdTTElERSIsIlRZUEVXUklURVIiLCJtb3Rpb24iLCJ0aW1lbGluZURhdGEiLCJsYWJlbCIsImRhdGUiLCJ0aXRsZSIsImxvY2F0aW9uIiwiY29tcGFueSIsImNvbnRlbnQiLCJ0ZWNoU3RhY2siLCJsb2dvIiwiVGltZWxpbmUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMiIsIm9sIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInRlY2giLCJpZHgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ExperienceSection.jsx\n"));

/***/ })

});