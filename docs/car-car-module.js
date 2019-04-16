(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-car-module"],{

/***/ "./src/app/car/car-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/car/car-routing.module.ts ***!
  \*******************************************/
/*! exports provided: CarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRoutingModule", function() { return CarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car/car.component */ "./src/app/car/car/car.component.ts");




var routes = [
    {
        path: "",
        component: _car_car_component__WEBPACK_IMPORTED_MODULE_3__["CarComponent"]
    }
];
var CarRoutingModule = /** @class */ (function () {
    function CarRoutingModule() {
    }
    CarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CarRoutingModule);
    return CarRoutingModule;
}());



/***/ }),

/***/ "./src/app/car/car.module.ts":
/*!***********************************!*\
  !*** ./src/app/car/car.module.ts ***!
  \***********************************/
/*! exports provided: CarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModule", function() { return CarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _car_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-routing.module */ "./src/app/car/car-routing.module.ts");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car/car.component */ "./src/app/car/car/car.component.ts");
/* harmony import */ var _car_pedals_pedals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car/pedals/pedals.component */ "./src/app/car/car/pedals/pedals.component.ts");
/* harmony import */ var _car_display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car/display/display.component */ "./src/app/car/car/display/display.component.ts");







var CarModule = /** @class */ (function () {
    function CarModule() {
    }
    CarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_car_car_component__WEBPACK_IMPORTED_MODULE_4__["CarComponent"], _car_pedals_pedals_component__WEBPACK_IMPORTED_MODULE_5__["PedalsComponent"], _car_display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _car_routing_module__WEBPACK_IMPORTED_MODULE_3__["CarRoutingModule"]
            ]
        })
    ], CarModule);
    return CarModule;
}());



/***/ }),

/***/ "./src/app/car/car/car.component.html":
/*!********************************************!*\
  !*** ./src/app/car/car/car.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-display\n  [model]=\"car.name\"\n  [currentSpeed]=\"car.currentSpeed\"\n  [topSpeed]=\"car.maxSpeed\"\n  [units]=\"'Km/h'\"\n>\n</app-display>\n<app-pedals\n  (brake)=\"onBrake($event)\"\n  [disableBrake]=\"disableBrake\"\n  (throttle)=\"onThrottle($event)\"\n  [disableThrottle]=\"disableThrottle\"\n>\n</app-pedals>\n"

/***/ }),

/***/ "./src/app/car/car/car.component.ts":
/*!******************************************!*\
  !*** ./src/app/car/car/car.component.ts ***!
  \******************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarComponent = /** @class */ (function () {
    function CarComponent() {
        var _this = this;
        this.getDelta = function (drive) {
            return drive + (_this.car.maxSpeed - _this.car.currentSpeed) / 4;
        };
    }
    CarComponent.prototype.ngOnInit = function () {
        this.car = { name: "Ferrari", maxSpeed: 350, currentSpeed: 0 };
        this.checkLimits();
    };
    CarComponent.prototype.checkLimits = function () {
        this.disableBrake = false;
        this.disableThrottle = false;
        if (this.car.currentSpeed <= 0) {
            this.car.currentSpeed = 0;
            this.disableBrake = true;
        }
        else if (this.car.currentSpeed >= this.car.maxSpeed) {
            this.car.currentSpeed = this.car.maxSpeed;
            this.disableThrottle = true;
        }
    };
    CarComponent.prototype.onBrake = function (drive) {
        this.car.currentSpeed -= this.getDelta(drive);
        this.checkLimits();
    };
    CarComponent.prototype.onThrottle = function (drive) {
        this.car.currentSpeed += this.getDelta(drive);
        this.checkLimits();
    };
    CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-car",
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/car/car/car.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/car/car/display/display.component.html":
/*!********************************************************!*\
  !*** ./src/app/car/car/display/display.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> {{ model }} </h2>\n<h3> Top speed: {{ topSpeed | number:'1.0-0' }}</h3>\n<div class=\"card\">\n <div class=\"section\">\n {{ currentSpeed | number:'1.2-2' }} {{ units }}\n </div>\n <progress [value]=\"currentSpeed\"\n [ngClass]=\"getSpeedClass()\"\n [max]=\"topSpeed\">\n </progress>\n</div>\n"

/***/ }),

/***/ "./src/app/car/car/display/display.component.ts":
/*!******************************************************!*\
  !*** ./src/app/car/car/display/display.component.ts ***!
  \******************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
        var _this = this;
        this.getSpeedClass = function () {
            return _this.currentSpeed < _this.getThreshold() ? "primary" : "secondary";
        };
        this.getThreshold = function () { return _this.topSpeed * 0.8; };
    }
    DisplayComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DisplayComponent.prototype, "currentSpeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DisplayComponent.prototype, "topSpeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayComponent.prototype, "units", void 0);
    DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-display",
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/car/car/display/display.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/car/car/pedals/pedals.component.html":
/*!******************************************************!*\
  !*** ./src/app/car/car/pedals/pedals.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Pedals: </h3>\n<form>\n <input value=\"brake\"\n class=\"secondary\"\n type=\"button\"\n [disabled]=\"disableBrake\"\n (click)=\"brake.emit(1)\"/>\n <input value=\"throttle\"\n class=\"tertiary\"\n type=\"button\"\n [disabled]=\"disableThrottle\"\n (click)=\"throttle.emit(1)\"/>\n</form>\n"

/***/ }),

/***/ "./src/app/car/car/pedals/pedals.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car/car/pedals/pedals.component.ts ***!
  \****************************************************/
/*! exports provided: PedalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedalsComponent", function() { return PedalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PedalsComponent = /** @class */ (function () {
    function PedalsComponent() {
        this.brake = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.throttle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PedalsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PedalsComponent.prototype, "disableBrake", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PedalsComponent.prototype, "disableThrottle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PedalsComponent.prototype, "brake", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PedalsComponent.prototype, "throttle", void 0);
    PedalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pedals',
            template: __webpack_require__(/*! ./pedals.component.html */ "./src/app/car/car/pedals/pedals.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PedalsComponent);
    return PedalsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=car-car-module.js.map