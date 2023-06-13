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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\nconst cards = document.querySelectorAll('.card');\nvar selectedIndex = 0;\nvar tempContent = `<div class=\"card-top\">\n<div class=\"bg-image\"></div>\n<div class=\"decade\">1860s</div>\n<div class=\"plus-button\"><span class=\"material-symbols-outlined\">\n        add\n    </span></div>\n</div>\n<div class=\"card-bottom\">\n<div class=\"description\">Eveliquis sunte que net ius, cum et estiorro inuscit iamenti blabo.</div>\n<div class=\"architect\">Walter Liberty Vernon</div>\n</div>`;\nfunction createElementFromHTML(htmlString) {\n  var div = document.createElement('div');\n  div.innerHTML = htmlString.trim();\n  return div;\n}\nfunction updateArrows(index) {\n  var left = document.querySelector('.left-button');\n  var right = document.querySelector('.right-button');\n  if (index == kMinIndex) {\n    left.classList.add('disabled');\n  } else {\n    left.classList.remove('disabled');\n  }\n  if (index == kMaxIndex) {\n    right.classList.add('disabled');\n  } else {\n    right.classList.remove('disabled');\n  }\n}\nconst kMinIndex = 0;\nconst kMaxIndex = cards.length - 5;\nfunction clampIndex(index) {\n  if (index < kMinIndex) index = kMinIndex;\n  if (index > kMaxIndex) index = kMaxIndex;\n  return index;\n}\nfunction selectCardAt(index) {\n  index = clampIndex(index);\n  updateArrows(index);\n  for (var i = 0; i < cards.length; i++) {\n    if (i == index) {\n      cards[i].classList.add('selected');\n    } else {\n      cards[i].classList.remove('selected');\n    }\n  }\n\n  //if (index == selectedIndex) return;\n  selectedIndex = index;\n  let relativePos = cards[index].offsetLeft; // + cards[index].offsetWidth / 2;\n\n  carousel.scrollTo({\n    left: relativePos,\n    behavior: 'smooth'\n  });\n\n  //   cards[index].scrollIntoView({\n  //     behavior: 'smooth',\n  //   });\n}\n\nfunction stepBy(delta) {\n  selectCardAt(selectedIndex + delta);\n}\nvar i = 0;\nvar decade = 1860;\ncards.forEach(card => {\n  var index = i;\n  var elem = createElementFromHTML(tempContent);\n  var image = elem.querySelector('.bg-image');\n  var dec = elem.querySelector('.decade');\n  dec.innerText = decade + 's';\n  var seed = Math.floor(Math.random() * 10000);\n  var url = `url(https://picsum.photos/seed/${seed}/800)`;\n  image.style.backgroundImage = url;\n  card.appendChild(elem);\n  card.addEventListener('click', evt => {\n    //selectCardAt(index);\n  });\n  decade += 10;\n  i++;\n});\ndocument.querySelector('.left-button').addEventListener('click', evt => stepBy(-1));\ndocument.querySelector('.right-button').addEventListener('click', evt => stepBy(1));\nvar carousel = document.querySelector('.carousel');\nfunction lerp(start, end, amt) {\n  return (1 - amt) * start + amt * end;\n}\nfunction lmap(val, inMin, inMax, outMin, outMax) {\n  return outMin + (outMax - outMin) * (val - inMin) / (inMax - inMin);\n}\nfunction resizeElements() {\n  let pos = carousel.scrollLeft;\n  var maxWidth = carousel.offsetWidth / 2;\n  let centerX = carousel.offsetLeft + carousel.offsetWidth / 2;\n  var closest = selectedIndex;\n  var minDist = 100000;\n  for (let i = 0, l = cards.length; i < l; i++) {\n    // Since our stap-align is centered, get the position of the middle of the viewport relative to the current section's top (if your snap items are not full-height, it might require using half the viewport's height instead)\n    let relativePos = cards[i].offsetLeft - pos + cards[i].offsetWidth / 2;\n    var diff = Math.abs(relativePos - centerX);\n    if (diff < minDist) {\n      minDist = diff;\n      closest = i;\n    }\n    var proportion = diff / maxWidth;\n    var scale = lmap(proportion, 0, 1, 1.0, 0.65) * 100;\n    var scaleTxt = `${scale}%`;\n    var card = cards[i].querySelector('.bg-image');\n    //card.style.transform = `scale(100%, ${scaleTxt})`;\n    card.style.height = `${scaleTxt}`;\n  }\n  updateArrows(clampIndex(closest));\n}\ncarousel.addEventListener('scroll', e => {\n  resizeElements();\n});\nresizeElements();\nupdateArrows(kMinIndex);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

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