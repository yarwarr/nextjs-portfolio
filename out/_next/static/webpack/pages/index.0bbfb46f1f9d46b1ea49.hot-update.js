/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/mubashar/Portfolio/src/components/TimeLine/TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node.scrollTo({\n      left: left,\n      behavior: 'smooth'\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n      children: \"I am a software engineer with a passion for building applications that solve real world problems. I have a background in software engineering\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n      ref: carouselRef,\n      onScroll: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n            \"final\": index === TOTAL_CAROUSEL_COUNT - 1,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n              index: index,\n              id: \"carousel__item-\".concat(index),\n              active: activeItem,\n              onClick: function onClick(e) {\n                return handleClick(e, index);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                  width: \"208\",\n                  height: \"6\",\n                  viewBox: \"0 0 208 6\",\n                  fill: \"none\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    \"fill-rule\": \"evenodd\",\n                    \"clip-rule\": \"evenodd\",\n                    d: \"M3.51562 3.51562C5.45312 1.57812 8.54688 1.57812 10.4844 3.51562L104 97.0312L197.516 3.51562C199.453 1.57812 202.547 1.57812 204.484 3.51562C206.422 5.45312 206.422 8.54688 204.484 10.4844L110.969 104L204.484 197.516C206.422 199.453 206.422 202.547 204.484 204.484C202.547 206.422 199.453 206.422 197.516 204.484L104 110.969L10.4844 204.484C8.54688 206.422 5.45312 206.422 3.51562 204.484C1.57812 202.547 1.57812 199.453 3.51562 197.516L97.0312 104L3.51562 10.4844C1.57812 8.54688 1.57812 5.45312 3.51562 3.51562Z\",\n                    fill: \"url(#paint0_linear)\",\n                    \"fill-opacity\": \"0.33\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                      id: \"paint0_linear\",\n                      x1: \"104\",\n                      y1: \"0\",\n                      x2: \"104\",\n                      y2: \"208\",\n                      gradientUnits: \"userSpaceOnUse\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        \"stop-color\": \"white\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 106,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        offset: \"1\",\n                        \"stop-color\": \"white\",\n                        \"stop-opacity\": \"0\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 107,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 98,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n          index: index,\n          active: activeItem,\n          onClick: function onClick(e) {\n            return handleClick(e, index);\n          },\n          type: \"button\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n            active: activeItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/ODQ5MSJdLCJuYW1lcyI6WyJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIlRpbWVMaW5lRGF0YSIsIlRpbWVsaW5lIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVdBO0FBTUE7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MscUVBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsK0NBQVEsQ0FBQyxDQUFELENBRHZCO0FBQUEsTUFDZEMsVUFEYztBQUFBLE1BQ0ZDLGFBREU7O0FBRXJCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzdCLFdBQU9ELElBQUksQ0FBQ0UsUUFBTCxDQUFjO0FBQUVELFVBQUksRUFBSkEsSUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1QkQs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Li9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgQ2Fyb3VzZWxCdXR0b24sXG4gIENhcm91c2VsQnV0dG9uRG90LFxuICBDYXJvdXNlbEJ1dHRvbnMsXG4gIENhcm91c2VsQ29udGFpbmVyLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsSXRlbUltZyxcbiAgQ2Fyb3VzZWxJdGVtVGV4dCxcbiAgQ2Fyb3VzZWxJdGVtVGl0bGUsXG4gIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSxcbn0gZnJvbSBcIi4vVGltZUxpbmVTdHlsZXNcIjtcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGV4dCxcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG4gICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpKTtcblxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLyAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICogVGltZUxpbmVEYXRhLmxlbmd0aCk7XG5cbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIGEgcGFzc2lvbiBmb3IgYnVpbGRpbmcgYXBwbGljYXRpb25zIHRoYXRcbiAgICAgICAgc29sdmUgcmVhbCB3b3JsZCBwcm9ibGVtcy4gSSBoYXZlIGEgYmFja2dyb3VuZCBpbiBzb2Z0d2FyZSBlbmdpbmVlcmluZ1xuICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD5cbiAgICAgICAgPD5cbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgICB7aXRlbS55ZWFyfVxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMuNTE1NjIgMy41MTU2MkM1LjQ1MzEyIDEuNTc4MTIgOC41NDY4OCAxLjU3ODEyIDEwLjQ4NDQgMy41MTU2MkwxMDQgOTcuMDMxMkwxOTcuNTE2IDMuNTE1NjJDMTk5LjQ1MyAxLjU3ODEyIDIwMi41NDcgMS41NzgxMiAyMDQuNDg0IDMuNTE1NjJDMjA2LjQyMiA1LjQ1MzEyIDIwNi40MjIgOC41NDY4OCAyMDQuNDg0IDEwLjQ4NDRMMTEwLjk2OSAxMDRMMjA0LjQ4NCAxOTcuNTE2QzIwNi40MjIgMTk5LjQ1MyAyMDYuNDIyIDIwMi41NDcgMjA0LjQ4NCAyMDQuNDg0QzIwMi41NDcgMjA2LjQyMiAxOTkuNDUzIDIwNi40MjIgMTk3LjUxNiAyMDQuNDg0TDEwNCAxMTAuOTY5TDEwLjQ4NDQgMjA0LjQ4NEM4LjU0Njg4IDIwNi40MjIgNS40NTMxMiAyMDYuNDIyIDMuNTE1NjIgMjA0LjQ4NEMxLjU3ODEyIDIwMi41NDcgMS41NzgxMiAxOTkuNDUzIDMuNTE1NjIgMTk3LjUxNkw5Ny4wMzEyIDEwNEwzLjUxNTYyIDEwLjQ4NDRDMS41NzgxMiA4LjU0Njg4IDEuNTc4MTIgNS40NTMxMiAzLjUxNTYyIDMuNTE1NjJaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC4zM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMTA0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjEwNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIndoaXRlXCIgc3RvcC1vcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENhcm91c2VsQnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XG4gICAgICAgICAgPC9DYXJvdXNlbEJ1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuXG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});