/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\nconst slides = document.querySelectorAll('.slide');\nvar selectedIndex = 0;\nconst backgroundColors = ['#707271', '#685F58', '#BC6122', '#5A6671', '#CFB787', '#1C252C', '#9DA1A2'];\nvar testContent = `\n  <div class=\"slide-content\">\n    <div class=\"image\"></div>\n    <div class=\"footer\">\n      <div class=\"footer-content\">\n        <div class=\"left\">\n          <div class=\"year\">1964</div>\n          <div class=\"name\">Goldstein College UNSW</div>\n          <div class=\"location\">Kensington NSW</div>\n          <div class=\"architect\">Edward Herbert (Ted) Farmer</div>\n        </div>\n        <div class=\"right\">\n          <div class=\"blurb\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin\n            egestas, sapien euismod feugiat hendrerit, enim leo molestie elit,\n            id bibendum risus diam quis felis. Nam at imperdiet dui, ut\n            venenatis ipsum. Phasellus blandit luctus fermentum. Integer ut\n            condimentum ex, eu egestas est.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n);`;\nfunction createElementFromHTML(htmlString) {\n  var div = document.createElement('div');\n  div.innerHTML = htmlString.trim();\n  return div.firstChild;\n}\nfunction getSlideColor(index) {\n  return backgroundColors[index % backgroundColors.length];\n}\nfunction selectSlideAt(index) {\n  if (index < 0) index = 0;\n  if (index > slides.length - 1) index = slides.length - 1;\n  if (index == selectedIndex) return;\n  selectedIndex = index;\n  for (var i = 0; i < slides.length; i++) {\n    if (i == index) {\n      slides[i].classList.add('expanded');\n    } else {\n      slides[i].classList.remove('expanded');\n    }\n  }\n}\nfunction stepBy(delta) {\n  selectSlideAt(selectedIndex + delta);\n}\nvar i = 0;\nslides.forEach(slide => {\n  var index = i;\n  slide.style.backgroundColor = getSlideColor(index);\n  var elem = createElementFromHTML(testContent);\n  var image = elem.querySelector('.image');\n  var seed = Math.floor(Math.random() * 10000);\n  var url = `url(https://picsum.photos/seed/${seed}/800)`;\n  image.style.backgroundImage = url;\n  slide.appendChild(elem);\n  slide.addEventListener('click', evt => {\n    selectSlideAt(index);\n  });\n  i++;\n});\ndocument.querySelector('.left-button').addEventListener('click', evt => stepBy(-1));\ndocument.querySelector('.right-button').addEventListener('click', evt => stepBy(1));\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetBacon\": () => (/* binding */ GetBacon)\n/* harmony export */ });\nconst GetBacon = () => {\n  const body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then(res => res.json());\n  return body;\n};\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;