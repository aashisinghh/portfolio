"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-simple-typewriter";
exports.ids = ["vendor-chunks/react-simple-typewriter"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-simple-typewriter/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-simple-typewriter/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0}));var e=__webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\"),t=__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\"),r=function(){return r=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};function o(e,t){var o,n;switch(t.type){case\"TYPE\":return r(r({},e),{speed:t.speed,text:null===(o=t.payload)||void 0===o?void 0:o.substring(0,e.text.length+1)});case\"DELAY\":return r(r({},e),{speed:t.payload});case\"DELETE\":return r(r({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case\"COUNT\":return r(r({},e),{count:e.count+1});default:return e}}var n=function(e){var r=e.words,n=void 0===r?[\"Hello World!\",\"This is\",\"a simple Typewriter\"]:r,i=e.loop,s=void 0===i?1:i,u=e.typeSpeed,l=void 0===u?80:u,c=e.deleteSpeed,d=void 0===c?50:c,a=e.delaySpeed,p=void 0===a?1500:a,y=e.onLoopDone,f=e.onType,v=e.onDelete,m=e.onDelay,h=t.useReducer(o,{speed:l,text:\"\",count:0}),T=h[0],g=T.speed,_=T.text,x=T.count,D=h[1],C=t.useRef(0),E=t.useRef(!1),S=t.useRef(!1),b=t.useRef(!1),k=t.useRef(!1),w=t.useCallback((function(){var e=x%n.length,t=n[e];S.current?(D({type:\"DELETE\",payload:t,speed:d}),\"\"===_&&(S.current=!1,D({type:\"COUNT\"}))):(D({type:\"TYPE\",payload:t,speed:l}),b.current=!0,_===t&&(D({type:\"DELAY\",payload:p}),b.current=!1,k.current=!0,setTimeout((function(){k.current=!1,S.current=!0}),p),s>0&&(C.current+=1,C.current/n.length===s&&(k.current=!1,E.current=!0)))),b.current&&f&&f(C.current),S.current&&v&&v(),k.current&&m&&m()}),[x,p,d,s,l,n,_,f,v,m]);return t.useEffect((function(){var e=setTimeout(w,g);return E.current&&clearTimeout(e),function(){return clearTimeout(e)}}),[w,g]),t.useEffect((function(){y&&E.current&&y()}),[y]),[_,{isType:b.current,isDelay:k.current,isDelete:S.current,isDone:E.current}]};var i=\"styles-module_blinkingCursor__yugAC\",s=\"styles-module_blinking__9VXRT\";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&\"undefined\"!=typeof document){var o=document.head||document.getElementsByTagName(\"head\")[0],n=document.createElement(\"style\");n.type=\"text/css\",\"top\"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(\".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}\");var u=t.memo((function(t){var o=t.cursorBlinking,n=void 0===o||o,u=t.cursorStyle,l=void 0===u?\"|\":u,c=t.cursorColor,d=void 0===c?\"inherit\":c;return e.jsx(\"span\",r({style:{color:d},className:\"\".concat(i,\" \").concat(n?s:\"\")},{children:l}))}));exports.Cursor=u,exports.Typewriter=function(t){var r=t.words,o=void 0===r?[\"Hello World!\",\"This is\",\"a simple Typewriter\"]:r,i=t.loop,s=void 0===i?1:i,l=t.typeSpeed,c=void 0===l?80:l,d=t.deleteSpeed,a=void 0===d?50:d,p=t.delaySpeed,y=void 0===p?1500:p,f=t.cursor,v=void 0!==f&&f,m=t.cursorStyle,h=void 0===m?\"|\":m,T=t.cursorColor,g=void 0===T?\"inherit\":T,_=t.cursorBlinking,x=void 0===_||_,D=t.onLoopDone,C=t.onType,E=t.onDelay,S=t.onDelete,b=n({words:o,loop:s,typeSpeed:c,deleteSpeed:a,delaySpeed:y,onLoopDone:D,onType:C,onDelay:E,onDelete:S})[0];return e.jsxs(e.Fragment,{children:[e.jsx(\"span\",{children:b}),v&&e.jsx(u,{cursorStyle:h,cursorColor:g,cursorBlinking:x})]})},exports.useTypewriter=n;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYSw4Q0FBMkMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxNQUFNLG1CQUFPLENBQUMseUhBQW1CLElBQUksbUJBQU8sQ0FBQyxpR0FBTyxlQUFlLG9DQUFvQyxpQ0FBaUMsSUFBSSx1RkFBdUYsU0FBUywwQkFBMEIsZ0JBQWdCLFFBQVEsZUFBZSx3QkFBd0IsS0FBSywwRkFBMEYsRUFBRSx5QkFBeUIsS0FBSyxnQkFBZ0IsRUFBRSwwQkFBMEIsS0FBSywwRkFBMEYsRUFBRSx5QkFBeUIsS0FBSyxnQkFBZ0IsRUFBRSxrQkFBa0Isa0JBQWtCLGtSQUFrUix3QkFBd0IsbUpBQW1KLHdCQUF3QixjQUFjLGdDQUFnQywyQkFBMkIsYUFBYSxRQUFRLDhCQUE4QiwwQkFBMEIsdUJBQXVCLG1EQUFtRCwwQkFBMEIsOElBQThJLHlCQUF5QiwrQkFBK0Isc0JBQXNCLDZDQUE2Qyx3QkFBd0IsaUNBQWlDLGtCQUFrQixXQUFXLHVFQUF1RSxHQUFHLDhFQUE4RSxlQUFlLGlCQUFpQixFQUFFLGlCQUFpQixvQ0FBb0MsZ0dBQWdHLHlLQUF5Syx1Q0FBdUMsY0FBYyxhQUFhLFNBQVMsb0JBQW9CLFVBQVUsa0JBQWtCLE1BQU0sK0JBQStCLHVCQUF1QixtQ0FBbUMsMENBQTBDLHNDQUFzQyxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsMEJBQTBCLG1IQUFtSCx1QkFBdUIsT0FBTyxRQUFRLDJDQUEyQyxFQUFFLFdBQVcsR0FBRyxHQUFHLGNBQWMsR0FBRyxrQkFBa0IsYUFBYSwrWUFBK1ksaUdBQWlHLEtBQUssMEJBQTBCLHdCQUF3QixXQUFXLGNBQWMsNkNBQTZDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQjtBQUNoZ0giLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaS9wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZS10eXBld3JpdGVyL2Rpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9cmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpLHQ9cmVxdWlyZShcInJlYWN0XCIpLHI9ZnVuY3Rpb24oKXtyZXR1cm4gcj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQscj0xLG89YXJndW1lbnRzLmxlbmd0aDtyPG87cisrKWZvcih2YXIgbiBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKSYmKGVbbl09dFtuXSk7cmV0dXJuIGV9LHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiBvKGUsdCl7dmFyIG8sbjtzd2l0Y2godC50eXBlKXtjYXNlXCJUWVBFXCI6cmV0dXJuIHIocih7fSxlKSx7c3BlZWQ6dC5zcGVlZCx0ZXh0Om51bGw9PT0obz10LnBheWxvYWQpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnN1YnN0cmluZygwLGUudGV4dC5sZW5ndGgrMSl9KTtjYXNlXCJERUxBWVwiOnJldHVybiByKHIoe30sZSkse3NwZWVkOnQucGF5bG9hZH0pO2Nhc2VcIkRFTEVURVwiOnJldHVybiByKHIoe30sZSkse3NwZWVkOnQuc3BlZWQsdGV4dDpudWxsPT09KG49dC5wYXlsb2FkKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zdWJzdHJpbmcoMCxlLnRleHQubGVuZ3RoLTEpfSk7Y2FzZVwiQ09VTlRcIjpyZXR1cm4gcihyKHt9LGUpLHtjb3VudDplLmNvdW50KzF9KTtkZWZhdWx0OnJldHVybiBlfX12YXIgbj1mdW5jdGlvbihlKXt2YXIgcj1lLndvcmRzLG49dm9pZCAwPT09cj9bXCJIZWxsbyBXb3JsZCFcIixcIlRoaXMgaXNcIixcImEgc2ltcGxlIFR5cGV3cml0ZXJcIl06cixpPWUubG9vcCxzPXZvaWQgMD09PWk/MTppLHU9ZS50eXBlU3BlZWQsbD12b2lkIDA9PT11PzgwOnUsYz1lLmRlbGV0ZVNwZWVkLGQ9dm9pZCAwPT09Yz81MDpjLGE9ZS5kZWxheVNwZWVkLHA9dm9pZCAwPT09YT8xNTAwOmEseT1lLm9uTG9vcERvbmUsZj1lLm9uVHlwZSx2PWUub25EZWxldGUsbT1lLm9uRGVsYXksaD10LnVzZVJlZHVjZXIobyx7c3BlZWQ6bCx0ZXh0OlwiXCIsY291bnQ6MH0pLFQ9aFswXSxnPVQuc3BlZWQsXz1ULnRleHQseD1ULmNvdW50LEQ9aFsxXSxDPXQudXNlUmVmKDApLEU9dC51c2VSZWYoITEpLFM9dC51c2VSZWYoITEpLGI9dC51c2VSZWYoITEpLGs9dC51c2VSZWYoITEpLHc9dC51c2VDYWxsYmFjaygoZnVuY3Rpb24oKXt2YXIgZT14JW4ubGVuZ3RoLHQ9bltlXTtTLmN1cnJlbnQ/KEQoe3R5cGU6XCJERUxFVEVcIixwYXlsb2FkOnQsc3BlZWQ6ZH0pLFwiXCI9PT1fJiYoUy5jdXJyZW50PSExLEQoe3R5cGU6XCJDT1VOVFwifSkpKTooRCh7dHlwZTpcIlRZUEVcIixwYXlsb2FkOnQsc3BlZWQ6bH0pLGIuY3VycmVudD0hMCxfPT09dCYmKEQoe3R5cGU6XCJERUxBWVwiLHBheWxvYWQ6cH0pLGIuY3VycmVudD0hMSxrLmN1cnJlbnQ9ITAsc2V0VGltZW91dCgoZnVuY3Rpb24oKXtrLmN1cnJlbnQ9ITEsUy5jdXJyZW50PSEwfSkscCkscz4wJiYoQy5jdXJyZW50Kz0xLEMuY3VycmVudC9uLmxlbmd0aD09PXMmJihrLmN1cnJlbnQ9ITEsRS5jdXJyZW50PSEwKSkpKSxiLmN1cnJlbnQmJmYmJmYoQy5jdXJyZW50KSxTLmN1cnJlbnQmJnYmJnYoKSxrLmN1cnJlbnQmJm0mJm0oKX0pLFt4LHAsZCxzLGwsbixfLGYsdixtXSk7cmV0dXJuIHQudXNlRWZmZWN0KChmdW5jdGlvbigpe3ZhciBlPXNldFRpbWVvdXQodyxnKTtyZXR1cm4gRS5jdXJyZW50JiZjbGVhclRpbWVvdXQoZSksZnVuY3Rpb24oKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfX0pLFt3LGddKSx0LnVzZUVmZmVjdCgoZnVuY3Rpb24oKXt5JiZFLmN1cnJlbnQmJnkoKX0pLFt5XSksW18se2lzVHlwZTpiLmN1cnJlbnQsaXNEZWxheTprLmN1cnJlbnQsaXNEZWxldGU6Uy5jdXJyZW50LGlzRG9uZTpFLmN1cnJlbnR9XX07dmFyIGk9XCJzdHlsZXMtbW9kdWxlX2JsaW5raW5nQ3Vyc29yX195dWdBQ1wiLHM9XCJzdHlsZXMtbW9kdWxlX2JsaW5raW5nX185VlhSVFwiOyFmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXt9KTt2YXIgcj10Lmluc2VydEF0O2lmKGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7dmFyIG89ZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO24udHlwZT1cInRleHQvY3NzXCIsXCJ0b3BcIj09PXImJm8uZmlyc3RDaGlsZD9vLmluc2VydEJlZm9yZShuLG8uZmlyc3RDaGlsZCk6by5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQ/bi5zdHlsZVNoZWV0LmNzc1RleHQ9ZTpuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpKX19KFwiLnN0eWxlcy1tb2R1bGVfYmxpbmtpbmdDdXJzb3JfX3l1Z0FDe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O2xlZnQ6M3B4O2xpbmUtaGVpZ2h0OmluaGVyaXQ7b3BhY2l0eToxO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowfS5zdHlsZXMtbW9kdWxlX2JsaW5raW5nX185VlhSVHthbmltYXRpb24tZHVyYXRpb246LjhzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLW5hbWU6c3R5bGVzLW1vZHVsZV9ibGlua19fcnFmYWZ9QGtleWZyYW1lcyBzdHlsZXMtbW9kdWxlX2JsaW5rX19ycWZhZnswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1cIik7dmFyIHU9dC5tZW1vKChmdW5jdGlvbih0KXt2YXIgbz10LmN1cnNvckJsaW5raW5nLG49dm9pZCAwPT09b3x8byx1PXQuY3Vyc29yU3R5bGUsbD12b2lkIDA9PT11P1wifFwiOnUsYz10LmN1cnNvckNvbG9yLGQ9dm9pZCAwPT09Yz9cImluaGVyaXRcIjpjO3JldHVybiBlLmpzeChcInNwYW5cIixyKHtzdHlsZTp7Y29sb3I6ZH0sY2xhc3NOYW1lOlwiXCIuY29uY2F0KGksXCIgXCIpLmNvbmNhdChuP3M6XCJcIil9LHtjaGlsZHJlbjpsfSkpfSkpO2V4cG9ydHMuQ3Vyc29yPXUsZXhwb3J0cy5UeXBld3JpdGVyPWZ1bmN0aW9uKHQpe3ZhciByPXQud29yZHMsbz12b2lkIDA9PT1yP1tcIkhlbGxvIFdvcmxkIVwiLFwiVGhpcyBpc1wiLFwiYSBzaW1wbGUgVHlwZXdyaXRlclwiXTpyLGk9dC5sb29wLHM9dm9pZCAwPT09aT8xOmksbD10LnR5cGVTcGVlZCxjPXZvaWQgMD09PWw/ODA6bCxkPXQuZGVsZXRlU3BlZWQsYT12b2lkIDA9PT1kPzUwOmQscD10LmRlbGF5U3BlZWQseT12b2lkIDA9PT1wPzE1MDA6cCxmPXQuY3Vyc29yLHY9dm9pZCAwIT09ZiYmZixtPXQuY3Vyc29yU3R5bGUsaD12b2lkIDA9PT1tP1wifFwiOm0sVD10LmN1cnNvckNvbG9yLGc9dm9pZCAwPT09VD9cImluaGVyaXRcIjpULF89dC5jdXJzb3JCbGlua2luZyx4PXZvaWQgMD09PV98fF8sRD10Lm9uTG9vcERvbmUsQz10Lm9uVHlwZSxFPXQub25EZWxheSxTPXQub25EZWxldGUsYj1uKHt3b3JkczpvLGxvb3A6cyx0eXBlU3BlZWQ6YyxkZWxldGVTcGVlZDphLGRlbGF5U3BlZWQ6eSxvbkxvb3BEb25lOkQsb25UeXBlOkMsb25EZWxheTpFLG9uRGVsZXRlOlN9KVswXTtyZXR1cm4gZS5qc3hzKGUuRnJhZ21lbnQse2NoaWxkcmVuOltlLmpzeChcInNwYW5cIix7Y2hpbGRyZW46Yn0pLHYmJmUuanN4KHUse2N1cnNvclN0eWxlOmgsY3Vyc29yQ29sb3I6ZyxjdXJzb3JCbGlua2luZzp4fSldfSl9LGV4cG9ydHMudXNlVHlwZXdyaXRlcj1uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-simple-typewriter/dist/index.js\n");

/***/ })

};
;