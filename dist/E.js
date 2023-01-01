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
    _onMap = false;
    _waitingForRedraw = false;
    get onMap() {
        return this._onMap;
    }
    get waitingForRedraw() {
        return this._waitingForRedraw;
    }
}


/***/ }),

/***/ "./src/components/Renderer/Renderer.ts":
/*!*********************************************!*\
  !*** ./src/components/Renderer/Renderer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
class Renderer {
    _map;
    constructor(map) {
        this._map = map;
    }
    render(item) {
        if (!item.onMap) {
            return item.draw(this._map);
        }
        if (item.waitingForRedraw) {
            return item.redraw(this._map);
        }
        return false;
    }
    remove(item) {
        if (!item.onMap)
            return false;
        return item.remove(this._map);
    }
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
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _engine_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Engine */ "./src/engine/Engine.ts");
/* harmony import */ var _components_EMap_EMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EMap/EMap */ "./src/components/EMap/EMap.ts");
/* harmony import */ var _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Item/Item */ "./src/components/Item/Item.ts");
/* harmony import */ var _components_Renderer_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Renderer/Renderer */ "./src/components/Renderer/Renderer.ts");




const Engine = _engine_Engine__WEBPACK_IMPORTED_MODULE_0__["default"];
const EMap = _components_EMap_EMap__WEBPACK_IMPORTED_MODULE_1__["default"];
const Item = _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"];
const Renderer = _components_Renderer_Renderer__WEBPACK_IMPORTED_MODULE_3__["default"];

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZmluaXRpb24iLCJ3ZWJwYWNrOi8vRS8uL3NyYy9jb21wb25lbnRzL0VNYXAvRU1hcC50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbS9JdGVtLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9SZW5kZXJlci9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL2VuZ2luZS9FbmdpbmUudHMiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEVNYXAge1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3NvdXJjZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcklkOiBzdHJpbmcsIHsgd2lkdGgsIGhlaWdodCB9OiB7IHdpZHRoOiBzdHJpbmc7IGhlaWdodDogc3RyaW5nIH0gPSB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNvdXJjZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZHJhdygpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCBFTWFwIGZyb20gXCIuLi9FTWFwL0VNYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEl0ZW0ge1xyXG4gICAgcHJpdmF0ZSBfb25NYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3dhaXRpbmdGb3JSZWRyYXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBnZXQgb25NYXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3YWl0aW5nRm9yUmVkcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YWl0aW5nRm9yUmVkcmF3O1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGRyYXcobWFwOiBFTWFwKTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWRyYXcobWFwOiBFTWFwKTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCB6b29tUmVkcmF3KG1hcDogRU1hcCk6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgcmVtb3ZlKG1hcDogRU1hcCk6IGJvb2xlYW47XHJcbn0iLCJpbXBvcnQgRU1hcCBmcm9tIFwiLi4vRU1hcC9FTWFwXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9JdGVtL0l0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHByaXZhdGUgX21hcDogRU1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IEVNYXApIHtcclxuICAgICAgICB0aGlzLl9tYXAgPSBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGl0ZW06IEl0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWl0ZW0ub25NYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZHJhdyh0aGlzLl9tYXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ud2FpdGluZ0ZvclJlZHJhdykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5yZWRyYXcodGhpcy5fbWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaXRlbTogSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghaXRlbS5vbk1hcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBpdGVtLnJlbW92ZSh0aGlzLl9tYXApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBFTWFwIGZyb20gXCIuLi9jb21wb25lbnRzL0VNYXAvRU1hcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5naW5lIHtcclxuICAgIHByaXZhdGUgbWFwOiBFTWFwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1hcDogRU1hcCkge1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFwLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmF1bHQgYXMgZW5naW5lIH0gZnJvbSBcIi4vZW5naW5lL0VuZ2luZVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGVfbWFwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9FTWFwL0VNYXBcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBpdGVtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9JdGVtL0l0ZW1cIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyByZW5kZXJlciB9ICBmcm9tIFwiLi9jb21wb25lbnRzL1JlbmRlcmVyL1JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRW5naW5lID0gZW5naW5lO1xyXG5leHBvcnQgY29uc3QgRU1hcCA9IGVfbWFwO1xyXG5leHBvcnQgY29uc3QgSXRlbSA9IGl0ZW07XHJcbmV4cG9ydCBjb25zdCBSZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=