(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["E"] = factory();
	else
		root["E"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/EMap/EMap.ts":
/*!*************************************!*\
  !*** ./src/components/EMap/EMap.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EMap)
/* harmony export */ });
class EMap {
    containerId;
    width;
    height;
    _source;
    constructor(containerId, { width, height } = { width: "100%", height: "100%" }) {
        this.containerId = containerId;
        this.width = width;
        this.height = height;
    }
    get source() {
        return this._source;
    }
}


/***/ }),

/***/ "./src/components/Item/Item.ts":
/*!*************************************!*\
  !*** ./src/components/Item/Item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
class Item {
}


/***/ }),

/***/ "./src/engine/Engine.ts":
/*!******************************!*\
  !*** ./src/engine/Engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Engine)
/* harmony export */ });
class Engine {
    map;
    constructor(map) {
        this.map = map;
    }
    start() {
        this.map.draw();
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMap": () => (/* binding */ EMap),
/* harmony export */   "Engine": () => (/* binding */ Engine),
/* harmony export */   "Itme": () => (/* binding */ Itme)
/* harmony export */ });
/* harmony import */ var _engine_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Engine */ "./src/engine/Engine.ts");
/* harmony import */ var _components_EMap_EMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EMap/EMap */ "./src/components/EMap/EMap.ts");
/* harmony import */ var _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Item/Item */ "./src/components/Item/Item.ts");



const Engine = _engine_Engine__WEBPACK_IMPORTED_MODULE_0__["default"];
const EMap = _components_EMap_EMap__WEBPACK_IMPORTED_MODULE_1__["default"];
const Itme = _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"];

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWZSxNQUFlLElBQUk7SUFDdEIsV0FBVyxDQUFTO0lBQ3BCLEtBQUssQ0FBUztJQUNkLE1BQU0sQ0FBUztJQUNmLE9BQU8sQ0FBTTtJQUVyQixZQUFZLFdBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUF3QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUNySCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FHSjs7Ozs7Ozs7Ozs7Ozs7O0FDZmMsTUFBZSxJQUFJO0NBUWpDOzs7Ozs7Ozs7Ozs7Ozs7QUNSYyxNQUFNLE1BQU07SUFDZixHQUFHLENBQU87SUFFbEIsWUFBWSxHQUFTO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0o7Ozs7Ozs7VUNaRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vRDtBQUNNO0FBQ0Q7QUFFbEQsTUFBTSxNQUFNLEdBQUcsc0RBQU0sQ0FBQztBQUN0QixNQUFNLElBQUksR0FBRyw2REFBSyxDQUFDO0FBQ25CLE1BQU0sSUFBSSxHQUFHLDZEQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9FLy4vc3JjL2NvbXBvbmVudHMvRU1hcC9FTWFwLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9JdGVtL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vRS8uL3NyYy9lbmdpbmUvRW5naW5lLnRzIiwid2VicGFjazovL0Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFTWFwIHtcclxuICAgIHByaXZhdGUgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgd2lkdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zb3VyY2U6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJJZDogc3RyaW5nLCB7IHdpZHRoLCBoZWlnaHQgfTogeyB3aWR0aDogc3RyaW5nOyBoZWlnaHQ6IHN0cmluZyB9ID0geyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVySWQgPSBjb250YWluZXJJZDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzb3VyY2UoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGRyYXcoKTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgRU1hcCBmcm9tIFwiLi4vRU1hcC9FTWFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBJdGVtIHtcclxuICAgIGFic3RyYWN0IGRyYXcobWFwOiBFTWFwKTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWRyYXcobWFwOiBFTWFwKTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCB6b29tUmVkcmF3KG1hcDogRU1hcCk6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgcmVtb3ZlKG1hcDogRU1hcCk6IGJvb2xlYW47XHJcbn0iLCJpbXBvcnQgRU1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9FTWFwL0VNYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZ2luZSB7XHJcbiAgICBwcml2YXRlIG1hcDogRU1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IEVNYXApIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hcC5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGVuZ2luZSB9IGZyb20gXCIuL2VuZ2luZS9FbmdpbmVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBlX21hcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvRU1hcC9FTWFwXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgaXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSXRlbS9JdGVtXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRW5naW5lID0gZW5naW5lO1xyXG5leHBvcnQgY29uc3QgRU1hcCA9IGVfbWFwO1xyXG5leHBvcnQgY29uc3QgSXRtZSA9IGl0ZW07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==