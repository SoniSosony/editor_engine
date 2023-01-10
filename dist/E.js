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
/* harmony import */ var _EventsNamesConverter_EventsNamesConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventsNamesConverter/EventsNamesConverter */ "./src/components/EventsNamesConverter/EventsNamesConverter.ts");

class CanvasEventBroker {
    _canvas;
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
    _mouseEvents = new Map();
    _options;
    _eventsNamesConverter;
    constructor(map, options) {
        this._options = {
            useEventsNamesConverter: false,
            eventNamesConvertTable: {},
        };
        Object.assign(this._options, options);
        this._canvas = map;
        if (this._options.useEventsNamesConverter) {
            this._eventsNamesConverter = new _EventsNamesConverter_EventsNamesConverter__WEBPACK_IMPORTED_MODULE_0__["default"](this._options.eventNamesConvertTable);
        }
    }
    on(eventName, callback) {
        const convertedEventName = this._getConvertedEventName(eventName);
        if (this._mouseEventsNames.find((name) => name === eventName) !== undefined) {
            const callbacks = this._mouseEvents.get(convertedEventName);
            if (callbacks) {
                callbacks.push(callback);
            }
            else {
                this._mouseEvents.set(convertedEventName, [callback]);
                this._canvas.on(convertedEventName, (e) => this._callMouseEventCallback(eventName, e));
            }
        }
    }
    off(eventName, callback) { }
    _callMouseEventCallback(eventName, data) {
        const convertedEventName = this._getConvertedEventName(eventName);
        this._mouseEvents.get(convertedEventName).forEach((callback) => callback(data));
    }
    _getConvertedEventName(eventName) {
        return this._options.useEventsNamesConverter
            ? this._eventsNamesConverter.convert(eventName)
            : eventName;
    }
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

/***/ "./src/components/EventsNamesConverter/EventsNamesConverter.ts":
/*!*********************************************************************!*\
  !*** ./src/components/EventsNamesConverter/EventsNamesConverter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsNamesConverter)
/* harmony export */ });
class EventsNamesConverter {
    _convertTable;
    constructor(convertTable) {
        this._convertTable = convertTable;
    }
    convert(eventName) {
        return this._convertTable[eventName];
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

/***/ "./src/types/EventsNamesConvertTable.ts":
/*!**********************************************!*\
  !*** ./src/types/EventsNamesConvertTable.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventsNamesConvertTable": () => (/* binding */ eventsNamesConvertTable)
/* harmony export */ });
const eventsNamesConvertTable = (convertTable) => {
    const eventsNamesConvertTable = {};
    for (const [key, value] of Object.entries(convertTable)) {
        eventsNamesConvertTable[key] = value;
    }
    return eventsNamesConvertTable;
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
/* harmony export */   "EventsNamesConvertTable": () => (/* binding */ EventsNamesConvertTable),
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
/* harmony import */ var _types_EventsNamesConvertTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/EventsNamesConvertTable */ "./src/types/EventsNamesConvertTable.ts");








const Engine = _engine_Engine__WEBPACK_IMPORTED_MODULE_0__["default"];
const Canvas = _components_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"];
const Item = _components_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"];
const Renderer = _components_Renderer_Renderer__WEBPACK_IMPORTED_MODULE_3__["default"];
const CanvasEventBroker = _components_CanvasEventBroker_CanvasEventBroker__WEBPACK_IMPORTED_MODULE_4__["default"];
const EventData = _types_EventData__WEBPACK_IMPORTED_MODULE_5__.eventData;
const Point = _types_Point__WEBPACK_IMPORTED_MODULE_6__.point;
const EventsNamesConvertTable = _types_EventsNamesConvertTable__WEBPACK_IMPORTED_MODULE_7__.eventsNamesConvertTable;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7Ozs7O1VDVEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9EO0FBQ1c7QUFDTjtBQUNZO0FBQzJCO0FBQ2xEO0FBQ1I7QUFDb0M7QUFFbkUsTUFBTSxNQUFNLEdBQUcsc0RBQU0sQ0FBQztBQUN0QixNQUFNLE1BQU0sR0FBRyxpRUFBTSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLDZEQUFJLENBQUM7QUFDbEIsTUFBTSxRQUFRLEdBQUcscUVBQVEsQ0FBQztBQUMxQixNQUFNLGlCQUFpQixHQUFHLHVGQUFpQixDQUFDO0FBQzVDLE1BQU0sU0FBUyxHQUFHLHVEQUFTLENBQUM7QUFDNUIsTUFBTSxLQUFLLEdBQUcsK0NBQUssQ0FBQztBQUNwQixNQUFNLHVCQUF1QixHQUFHLG1GQUF1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRS8uL3NyYy9jb21wb25lbnRzL0NhbnZhc0V2ZW50QnJva2VyL0NhbnZhc0V2ZW50QnJva2VyLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9DYW52YXMvQ2FudmFzLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9FdmVudHNOYW1lc0NvbnZlcnRlci9FdmVudHNOYW1lc0NvbnZlcnRlci50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbS9JdGVtLnRzIiwid2VicGFjazovL0UvLi9zcmMvY29tcG9uZW50cy9SZW5kZXJlci9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL2VuZ2luZS9FbmdpbmUudHMiLCJ3ZWJwYWNrOi8vRS8uL3NyYy90eXBlcy9FdmVudERhdGEudHMiLCJ3ZWJwYWNrOi8vRS8uL3NyYy90eXBlcy9FdmVudHNOYW1lc0NvbnZlcnRUYWJsZS50cyIsIndlYnBhY2s6Ly9FLy4vc3JjL3R5cGVzL1BvaW50LnRzIiwid2VicGFjazovL0Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCI7XHJcbmltcG9ydCBFdmVudHNOYW1lc0NvbnZlcnRlciBmcm9tIFwiLi4vRXZlbnRzTmFtZXNDb252ZXJ0ZXIvRXZlbnRzTmFtZXNDb252ZXJ0ZXJcIjtcclxuaW1wb3J0IEV2ZW50c05hbWVzQ29udmVydFRhYmxlIGZyb20gXCIuLi8uLi90eXBlcy9FdmVudHNOYW1lc0NvbnZlcnRUYWJsZVwiO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gICAgdXNlRXZlbnRzTmFtZXNDb252ZXJ0ZXI6IGJvb2xlYW47XHJcbiAgICBldmVudE5hbWVzQ29udmVydFRhYmxlOiBFdmVudHNOYW1lc0NvbnZlcnRUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRXZlbnRCcm9rZXIge1xyXG4gICAgcHJpdmF0ZSBfY2FudmFzOiBDYW52YXM7XHJcbiAgICBwcml2YXRlIF9tb3VzZUV2ZW50c05hbWVzID0gW1xyXG4gICAgICAgIFwib25jbGlja1wiLFxyXG4gICAgICAgIFwib25jb250ZXh0bWVudVwiLFxyXG4gICAgICAgIFwib25kYmxjbGlja1wiLFxyXG4gICAgICAgIFwib25tb3VzZWRvd25cIixcclxuICAgICAgICBcIm9ubW91c2VlbnRlclwiLFxyXG4gICAgICAgIFwib25tb3VzZWxlYXZlXCIsXHJcbiAgICAgICAgXCJvbm1vdXNlbW92ZVwiLFxyXG4gICAgICAgIFwib25tb3VzZW91dFwiLFxyXG4gICAgICAgIFwib25tb3VzZW92ZXJcIixcclxuICAgICAgICBcIm9ubW91c2V1cFwiLFxyXG4gICAgXTtcclxuICAgIHByaXZhdGUgX21vdXNlRXZlbnRzID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+KCk7XHJcbiAgICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRzTmFtZXNDb252ZXJ0ZXI6IEV2ZW50c05hbWVzQ29udmVydGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1hcDogQ2FudmFzLCBvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdXNlRXZlbnRzTmFtZXNDb252ZXJ0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBldmVudE5hbWVzQ29udmVydFRhYmxlOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG1hcDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudXNlRXZlbnRzTmFtZXNDb252ZXJ0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzTmFtZXNDb252ZXJ0ZXIgPSBuZXcgRXZlbnRzTmFtZXNDb252ZXJ0ZXIodGhpcy5fb3B0aW9ucy5ldmVudE5hbWVzQ29udmVydFRhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRFdmVudE5hbWUgPSB0aGlzLl9nZXRDb252ZXJ0ZWRFdmVudE5hbWUoZXZlbnROYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5fbW91c2VFdmVudHNOYW1lcy5maW5kKChuYW1lKSA9PiBuYW1lID09PSBldmVudE5hbWUpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5fbW91c2VFdmVudHMuZ2V0KGNvbnZlcnRlZEV2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlRXZlbnRzLnNldChjb252ZXJ0ZWRFdmVudE5hbWUsIFtjYWxsYmFja10pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLm9uKGNvbnZlcnRlZEV2ZW50TmFtZSwgKGU6IG9iamVjdCkgPT4gdGhpcy5fY2FsbE1vdXNlRXZlbnRDYWxsYmFjayhldmVudE5hbWUsIGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FsbE1vdXNlRXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgZGF0YTogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udmVydGVkRXZlbnROYW1lID0gdGhpcy5fZ2V0Q29udmVydGVkRXZlbnROYW1lKGV2ZW50TmFtZSk7XHJcbiAgICAgICAgdGhpcy5fbW91c2VFdmVudHMuZ2V0KGNvbnZlcnRlZEV2ZW50TmFtZSkuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb252ZXJ0ZWRFdmVudE5hbWUoZXZlbnROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnVzZUV2ZW50c05hbWVzQ29udmVydGVyXHJcbiAgICAgICAgPyB0aGlzLl9ldmVudHNOYW1lc0NvbnZlcnRlci5jb252ZXJ0KGV2ZW50TmFtZSlcclxuICAgICAgICA6IGV2ZW50TmFtZTtcclxuICAgIH1cclxuIH1cclxuIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi8uLi90eXBlcy9Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2FudmFzIHtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zb3VyY2U6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVySWQgPSBjb250YWluZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNvdXJjZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZHJhdygpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogb2JqZWN0KTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBvYmplY3QpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IGdldENvb3Jkc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQ6IG9iamVjdCk6IFBvaW50O1xyXG59XHJcbiIsImltcG9ydCBFdmVudHNOYW1lc0NvbnZlcnRUYWJsZSBmcm9tIFwiLi4vLi4vdHlwZXMvRXZlbnRzTmFtZXNDb252ZXJ0VGFibGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50c05hbWVzQ29udmVydGVyIHtcclxuICAgIHByaXZhdGUgX2NvbnZlcnRUYWJsZTogRXZlbnRzTmFtZXNDb252ZXJ0VGFibGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udmVydFRhYmxlOiBFdmVudHNOYW1lc0NvbnZlcnRUYWJsZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnZlcnRUYWJsZSA9IGNvbnZlcnRUYWJsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGNvbnZlcnQoZXZlbnROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0VGFibGVbZXZlbnROYW1lXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9DYW52YXMvQ2FudmFzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBJdGVtIHtcclxuICAgIHByb3RlY3RlZCBfeDogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfeTogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfb25NYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfd2FpdGluZ0ZvclJlZHJhdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9uTWFwKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vbk1hcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2FpdGluZ0ZvclJlZHJhdygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FpdGluZ0ZvclJlZHJhdztcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBkcmF3KG1hcDogQ2FudmFzKTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWRyYXcobWFwOiBDYW52YXMpOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHpvb21SZWRyYXcobWFwOiBDYW52YXMpOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHJlbW92ZShtYXA6IENhbnZhcyk6IGJvb2xlYW47XHJcbn0iLCJpbXBvcnQgRU1hcCBmcm9tIFwiLi4vQ2FudmFzL0NhbnZhc1wiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vSXRlbS9JdGVtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIF9tYXA6IEVNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBFTWFwKSB7XHJcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihpdGVtOiBJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFpdGVtLm9uTWFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmRyYXcodGhpcy5fbWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtLndhaXRpbmdGb3JSZWRyYXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucmVkcmF3KHRoaXMuX21hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGl0ZW06IEl0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWl0ZW0ub25NYXApIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gaXRlbS5yZW1vdmUodGhpcy5fbWFwKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgRU1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW52YXMvQ2FudmFzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmdpbmUge1xyXG4gICAgcHJpdmF0ZSBtYXA6IEVNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBFTWFwKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXAuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsInR5cGUgRXZlbnREYXRhID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3JpZ2luYWxFdmVudDogb2JqZWN0O1xyXG4gICAgZGF0YTogb2JqZWN0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnREYXRhO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50RGF0YSA9IChuYW1lOiBzdHJpbmcsIG9yaWdpbmFsRXZlbnQ6IG9iamVjdCwgZGF0YTogb2JqZWN0KTogRXZlbnREYXRhID0+IHtcclxuICAgIHJldHVybiB7IG5hbWUsIG9yaWdpbmFsRXZlbnQsIGRhdGEgfVxyXG59XHJcbiIsInR5cGUgRXZlbnRzTmFtZXNDb252ZXJ0VGFibGUgPSB7IFtldmVudE5hbWU6IHN0cmluZ106IHN0cmluZyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHNOYW1lc0NvbnZlcnRUYWJsZTtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHNOYW1lc0NvbnZlcnRUYWJsZSA9IChjb252ZXJ0VGFibGU6IG9iamVjdCk6IEV2ZW50c05hbWVzQ29udmVydFRhYmxlID0+IHtcclxuICAgIGNvbnN0IGV2ZW50c05hbWVzQ29udmVydFRhYmxlOiBFdmVudHNOYW1lc0NvbnZlcnRUYWJsZSA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29udmVydFRhYmxlKSkge1xyXG4gICAgICAgIGV2ZW50c05hbWVzQ29udmVydFRhYmxlW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudHNOYW1lc0NvbnZlcnRUYWJsZTtcclxufSIsInR5cGUgUG9pbnQgPSB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcclxuXHJcbmV4cG9ydCBjb25zdCBwb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50ID0+IHtcclxuICAgIHJldHVybiB7IHgsIHkgfTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGVuZ2luZSB9IGZyb20gXCIuL2VuZ2luZS9FbmdpbmVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBjYW52YXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NhbnZhcy9DYW52YXNcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBpdGVtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9JdGVtL0l0ZW1cIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyByZW5kZXJlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvUmVuZGVyZXIvUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBjYW52YXNFdmVudEJyb2tlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FudmFzRXZlbnRCcm9rZXIvQ2FudmFzRXZlbnRCcm9rZXJcIjtcclxuaW1wb3J0IHsgZXZlbnREYXRhIH0gZnJvbSBcIi4vdHlwZXMvRXZlbnREYXRhXCI7XHJcbmltcG9ydCB7IHBvaW50IH0gZnJvbSBcIi4vdHlwZXMvUG9pbnRcIjtcclxuaW1wb3J0IHsgZXZlbnRzTmFtZXNDb252ZXJ0VGFibGUgfSBmcm9tIFwiLi90eXBlcy9FdmVudHNOYW1lc0NvbnZlcnRUYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVuZ2luZSA9IGVuZ2luZTtcclxuZXhwb3J0IGNvbnN0IENhbnZhcyA9IGNhbnZhcztcclxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBpdGVtO1xyXG5leHBvcnQgY29uc3QgUmVuZGVyZXIgPSByZW5kZXJlcjtcclxuZXhwb3J0IGNvbnN0IENhbnZhc0V2ZW50QnJva2VyID0gY2FudmFzRXZlbnRCcm9rZXI7XHJcbmV4cG9ydCBjb25zdCBFdmVudERhdGEgPSBldmVudERhdGE7XHJcbmV4cG9ydCBjb25zdCBQb2ludCA9IHBvaW50O1xyXG5leHBvcnQgY29uc3QgRXZlbnRzTmFtZXNDb252ZXJ0VGFibGUgPSBldmVudHNOYW1lc0NvbnZlcnRUYWJsZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9