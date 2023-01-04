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

/***/ "./src/components/CanvasEventBroker/CanvasEventBroker.ts":
/*!***************************************************************!*\
  !*** ./src/components/CanvasEventBroker/CanvasEventBroker.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CanvasEventBroker)
/* harmony export */ });
class CanvasEventBroker {
    _map;
    _mouseEventsNames = [
        "onclick",
        "oncontextmenu",
        "ondblclick",
        "onmousedown",
        "onmouseenter",
        "onmouseleave",
        "onmousemove",
        "onmouseout",
        "onmouseover",
        "onmouseup",
    ];
    constructor(map) {
        this._map = map;
    }
    on() { }
    off() { }
}


/***/ }),

/***/ "./src/components/Canvas/Canvas.ts":
/*!*****************************************!*\
  !*** ./src/components/Canvas/Canvas.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
class Canvas {
    _containerId;
    _source;
    constructor(containerId) {
        this._containerId = containerId;
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
    _x = 0;
    _y = 0;
    _onMap = false;
    _waitingForRedraw = false;
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
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


/***/ }),

/***/ "./src/types/EventData.ts":
/*!********************************!*\
  !*** ./src/types/EventData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventData": () => (/* binding */ eventData)
/* harmony export */ });
const eventData = (name, originalEvent, data) => {
    return { name, originalEvent, data };
};


/***/ }),

/***/ "./src/types/Point.ts":
/*!****************************!*\
  !*** ./src/types/Point.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "point": () => (/* binding */ point)
/* harmony export */ });
const point = (x, y) => {
    return { x, y };
};


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
/* harmony export */   "Canvas": () => (/* binding */ Canvas),
/* harmony export */   "CanvasEventBroker": () => (/* binding */ CanvasEventBroker),
/* harmony export */   "Engine": () => (/* binding */ Engine),
/* harmony export */   "EventData": () => (/* binding */ EventData),
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _engine_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Engine */ "./src/engine/Engine.ts");
/* harmony import */ var _components_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Canvas/Canvas */ "./src/components/Canvas/Canvas.ts");
/* harmony import */ var _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Item/Item */ "./src/components/Item/Item.ts");
/* harmony import */ var _components_Renderer_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Renderer/Renderer */ "./src/components/Renderer/Renderer.ts");
/* harmony import */ var _components_CanvasEventBroker_CanvasEventBroker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CanvasEventBroker/CanvasEventBroker */ "./src/components/CanvasEventBroker/CanvasEventBroker.ts");
/* harmony import */ var _types_EventData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/EventData */ "./src/types/EventData.ts");
/* harmony import */ var _types_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/Point */ "./src/types/Point.ts");







const Engine = _engine_Engine__WEBPACK_IMPORTED_MODULE_0__["default"];
const Canvas = _components_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"];
const Item = _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"];
const Renderer = _components_Renderer_Renderer__WEBPACK_IMPORTED_MODULE_3__["default"];
const CanvasEventBroker = _components_CanvasEventBroker_CanvasEventBroker__WEBPACK_IMPORTED_MODULE_4__["default"];
const EventData = _types_EventData__WEBPACK_IMPORTED_MODULE_5__.eventData;
const Point = _types_Point__WEBPACK_IMPORTED_MODULE_6__.point;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7OztVQ1RGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDVztBQUNOO0FBQ1k7QUFDMkI7QUFDbEQ7QUFDUjtBQUUvQixNQUFNLE1BQU0sR0FBRyxzREFBTSxDQUFDO0FBQ3RCLE1BQU0sTUFBTSxHQUFHLGlFQUFNLENBQUM7QUFDdEIsTUFBTSxJQUFJLEdBQUcsNkRBQUksQ0FBQztBQUNsQixNQUFNLFFBQVEsR0FBRyxxRUFBUSxDQUFDO0FBQzFCLE1BQU0saUJBQWlCLEdBQUcsdUZBQWlCLENBQUM7QUFDNUMsTUFBTSxTQUFTLEdBQUcsdURBQVMsQ0FBQztBQUM1QixNQUFNLEtBQUssR0FBRywrQ0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRS8uL3NyYy9jb21wb25lbnRzL0NhbnZhc0V2ZW50QnJva2VyL0NhbnZhc0V2ZW50QnJva2VyLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9DYW52YXMvQ2FudmFzLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9JdGVtL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vRS8uL3NyYy9jb21wb25lbnRzL1JlbmRlcmVyL1JlbmRlcmVyLnRzIiwid2VicGFjazovL0UvLi9zcmMvZW5naW5lL0VuZ2luZS50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL3R5cGVzL0V2ZW50RGF0YS50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL3R5cGVzL1BvaW50LnRzIiwid2VicGFjazovL0Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFdmVudEJyb2tlciB7XHJcbiAgICBwcml2YXRlIF9tYXA6IENhbnZhcztcclxuICAgIHByaXZhdGUgX21vdXNlRXZlbnRzTmFtZXMgPSBbXHJcbiAgICAgICAgXCJvbmNsaWNrXCIsXHJcbiAgICAgICAgXCJvbmNvbnRleHRtZW51XCIsXHJcbiAgICAgICAgXCJvbmRibGNsaWNrXCIsXHJcbiAgICAgICAgXCJvbm1vdXNlZG93blwiLFxyXG4gICAgICAgIFwib25tb3VzZWVudGVyXCIsXHJcbiAgICAgICAgXCJvbm1vdXNlbGVhdmVcIixcclxuICAgICAgICBcIm9ubW91c2Vtb3ZlXCIsXHJcbiAgICAgICAgXCJvbm1vdXNlb3V0XCIsXHJcbiAgICAgICAgXCJvbm1vdXNlb3ZlclwiLFxyXG4gICAgICAgIFwib25tb3VzZXVwXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1hcDogQ2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbigpIHt9XHJcblxyXG4gICAgcHVibGljIG9mZigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi8uLi90eXBlcy9Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2FudmFzIHtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zb3VyY2U6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVySWQgPSBjb250YWluZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNvdXJjZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZHJhdygpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogb2JqZWN0KTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBvYmplY3QpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IGdldENvb3Jkc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQ6IG9iamVjdCk6IFBvaW50O1xyXG59XHJcbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEl0ZW0ge1xyXG4gICAgcHJvdGVjdGVkIF94OiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF95OiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF9vbk1hcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF93YWl0aW5nRm9yUmVkcmF3OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl94ID0geDtcclxuICAgICAgICB0aGlzLl95ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25NYXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3YWl0aW5nRm9yUmVkcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YWl0aW5nRm9yUmVkcmF3O1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGRyYXcobWFwOiBDYW52YXMpOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHJlZHJhdyhtYXA6IENhbnZhcyk6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3Qgem9vbVJlZHJhdyhtYXA6IENhbnZhcyk6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgcmVtb3ZlKG1hcDogQ2FudmFzKTogYm9vbGVhbjtcclxufSIsImltcG9ydCBFTWFwIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9JdGVtL0l0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcclxuICAgIHByaXZhdGUgX21hcDogRU1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IEVNYXApIHtcclxuICAgICAgICB0aGlzLl9tYXAgPSBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGl0ZW06IEl0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWl0ZW0ub25NYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZHJhdyh0aGlzLl9tYXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ud2FpdGluZ0ZvclJlZHJhdykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5yZWRyYXcodGhpcy5fbWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaXRlbTogSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghaXRlbS5vbk1hcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBpdGVtLnJlbW92ZSh0aGlzLl9tYXApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBFTWFwIGZyb20gXCIuLi9jb21wb25lbnRzL0NhbnZhcy9DYW52YXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZ2luZSB7XHJcbiAgICBwcml2YXRlIG1hcDogRU1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IEVNYXApIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hcC5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwidHlwZSBFdmVudERhdGEgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcmlnaW5hbEV2ZW50OiBvYmplY3Q7XHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudERhdGE7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnREYXRhID0gKG5hbWU6IHN0cmluZywgb3JpZ2luYWxFdmVudDogb2JqZWN0LCBkYXRhOiBvYmplY3QpOiBFdmVudERhdGEgPT4ge1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgb3JpZ2luYWxFdmVudCwgZGF0YSB9XHJcbn1cclxuIiwidHlwZSBQb2ludCA9IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4ge1xyXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmF1bHQgYXMgZW5naW5lIH0gZnJvbSBcIi4vZW5naW5lL0VuZ2luZVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGNhbnZhcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FudmFzL0NhbnZhc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGl0ZW0gfSBmcm9tIFwiLi9jb21wb25lbnRzL0l0ZW0vSXRlbVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHJlbmRlcmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9SZW5kZXJlci9SZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGNhbnZhc0V2ZW50QnJva2VyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYW52YXNFdmVudEJyb2tlci9DYW52YXNFdmVudEJyb2tlclwiO1xyXG5pbXBvcnQgeyBldmVudERhdGEgfSBmcm9tIFwiLi90eXBlcy9FdmVudERhdGFcIjtcclxuaW1wb3J0IHsgcG9pbnQgfSBmcm9tIFwiLi90eXBlcy9Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVuZ2luZSA9IGVuZ2luZTtcclxuZXhwb3J0IGNvbnN0IENhbnZhcyA9IGNhbnZhcztcclxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBpdGVtO1xyXG5leHBvcnQgY29uc3QgUmVuZGVyZXIgPSByZW5kZXJlcjtcclxuZXhwb3J0IGNvbnN0IENhbnZhc0V2ZW50QnJva2VyID0gY2FudmFzRXZlbnRCcm9rZXI7XHJcbmV4cG9ydCBjb25zdCBFdmVudERhdGEgPSBldmVudERhdGE7XHJcbmV4cG9ydCBjb25zdCBQb2ludCA9IHBvaW50O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=