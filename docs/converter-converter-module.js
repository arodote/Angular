(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["converter-converter-module"],{

/***/ "./src/app/converter/converter-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/converter/converter-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConverterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterRoutingModule", function() { return ConverterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _converter_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converter/converter.component */ "./src/app/converter/converter/converter.component.ts");
/* harmony import */ var _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./culture-converter/culture-converter.component */ "./src/app/converter/culture-converter/culture-converter.component.ts");





var routes = [
    {
        path: "",
        component: _converter_converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"]
    },
    { path: "culture", component: _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_4__["CultureConverterComponent"] }
];
var ConverterRoutingModule = /** @class */ (function () {
    function ConverterRoutingModule() {
    }
    ConverterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConverterRoutingModule);
    return ConverterRoutingModule;
}());



/***/ }),

/***/ "./src/app/converter/converter.module.ts":
/*!***********************************************!*\
  !*** ./src/app/converter/converter.module.ts ***!
  \***********************************************/
/*! exports provided: ConverterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterModule", function() { return ConverterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _converter_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converter-routing.module */ "./src/app/converter/converter-routing.module.ts");
/* harmony import */ var _converter_converter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./converter/converter.component */ "./src/app/converter/converter/converter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./culture-converter/culture-converter.component */ "./src/app/converter/culture-converter/culture-converter.component.ts");
/* harmony import */ var _usa_converter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usa-converter.service */ "./src/app/converter/usa-converter.service.ts");
/* harmony import */ var _culture_converter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./culture-converter.service */ "./src/app/converter/culture-converter.service.ts");
/* harmony import */ var _europe_converter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./europe-converter.service */ "./src/app/converter/europe-converter.service.ts");
/* harmony import */ var _converter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./converter.service */ "./src/app/converter/converter.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");












var cultureFactory = function (converterService) {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].unitsCulture === 'metric') {
        return new _europe_converter_service__WEBPACK_IMPORTED_MODULE_9__["EuropeConverterService"](converterService);
    }
    else {
        return new _usa_converter_service__WEBPACK_IMPORTED_MODULE_7__["UsaConverterService"](converterService);
    }
};
var ConverterModule = /** @class */ (function () {
    function ConverterModule() {
    }
    ConverterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_converter_converter_component__WEBPACK_IMPORTED_MODULE_4__["ConverterComponent"], _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_6__["CultureConverterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _converter_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConverterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                {
                    provide: _culture_converter_service__WEBPACK_IMPORTED_MODULE_8__["CultureConverterService"],
                    useFactory: cultureFactory,
                    deps: [_converter_service__WEBPACK_IMPORTED_MODULE_10__["ConverterService"]]
                }
            ]
        })
    ], ConverterModule);
    return ConverterModule;
}());



/***/ }),

/***/ "./src/app/converter/converter.service.ts":
/*!************************************************!*\
  !*** ./src/app/converter/converter.service.ts ***!
  \************************************************/
/*! exports provided: ConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterService", function() { return ConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConverterService = /** @class */ (function () {
    function ConverterService() {
        this.fromKilometersToMiles = function (kilometers) { return kilometers * 0.62137; };
        this.fromMilesToKilometers = function (miles) { return miles * 1.609; };
        this.fromCelsiusToFarenheit = function (celsius) { return celsius * (9 / 5) + 32; };
        this.fromFarenheitToCelsius = function (farenheit) { return (farenheit - 32) * (5 / 9); };
    }
    ConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConverterService);
    return ConverterService;
}());



/***/ }),

/***/ "./src/app/converter/converter/converter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/converter/converter/converter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Distance Converter.</h2>\n<h3> From Europe to USA </h3>\n<form>\n <fieldset>\n <section>\n <label for=\"kilometers\">Kilometers</label>\n <input name=\"kilometers\"\n type=\"number\"\n [(ngModel)]=\"kilometers\"\n placeholder=\"0\" />\n </section>\n </fieldset>\n <input value=\"Convert\" type=\"button\" (click)=\"convert()\">\n</form>\n<section>\n <h4>{{ miles | number:'1.2-2' }} miles</h4>\n</section>\n"

/***/ }),

/***/ "./src/app/converter/converter/converter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/converter/converter/converter.component.ts ***!
  \************************************************************/
/*! exports provided: ConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterComponent", function() { return ConverterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _converter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../converter.service */ "./src/app/converter/converter.service.ts");



var ConverterComponent = /** @class */ (function () {
    function ConverterComponent(converterService) {
        this.converterService = converterService;
        this.kilometers = 0;
    }
    ConverterComponent.prototype.ngOnInit = function () {
        this.convert();
    };
    ConverterComponent.prototype.convert = function () {
        this.miles = this.converterService.fromKilometersToMiles(this.kilometers);
    };
    ConverterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-converter",
            template: __webpack_require__(/*! ./converter.component.html */ "./src/app/converter/converter/converter.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_converter_service__WEBPACK_IMPORTED_MODULE_2__["ConverterService"]])
    ], ConverterComponent);
    return ConverterComponent;
}());



/***/ }),

/***/ "./src/app/converter/culture-converter.service.ts":
/*!********************************************************!*\
  !*** ./src/app/converter/culture-converter.service.ts ***!
  \********************************************************/
/*! exports provided: CultureConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureConverterService", function() { return CultureConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CultureConverterService = /** @class */ (function () {
    function CultureConverterService() {
    }
    CultureConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CultureConverterService);
    return CultureConverterService;
}());



/***/ }),

/***/ "./src/app/converter/culture-converter/culture-converter.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/converter/culture-converter/culture-converter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Culture Converter.</h2>\n<h3> From {{ source }} to {{ target }} </h3>\n<form>\n <fieldset>\n <section>\n <label for=\"sourceUnits\">Distance</label>\n <input name=\"sourceUnits\"\n type=\"number\"\n [(ngModel)]=\"sourceUnits\"\n placeholder=\"0\" />\n </section>\n </fieldset>\n <input value=\"Convert\" type=\"button\" (click)=\"convert()\">\n</form>\n<section>\n <h4>Distance {{ targetUnits | number:'1.2-2' }} </h4>\n</section>\n"

/***/ }),

/***/ "./src/app/converter/culture-converter/culture-converter.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/converter/culture-converter/culture-converter.component.ts ***!
  \****************************************************************************/
/*! exports provided: CultureConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureConverterComponent", function() { return CultureConverterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _culture_converter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../culture-converter.service */ "./src/app/converter/culture-converter.service.ts");



var CultureConverterComponent = /** @class */ (function () {
    function CultureConverterComponent(cultureConverterService) {
        this.cultureConverterService = cultureConverterService;
        this.sourceUnits = 0;
    }
    CultureConverterComponent.prototype.ngOnInit = function () {
        this.source = this.cultureConverterService.sourceCulture;
        this.target = this.cultureConverterService.targetCulture;
        this.convert();
    };
    CultureConverterComponent.prototype.convert = function () {
        this.targetUnits = this.cultureConverterService.convertDistance(this.sourceUnits);
    };
    CultureConverterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-culture-converter",
            template: __webpack_require__(/*! ./culture-converter.component.html */ "./src/app/converter/culture-converter/culture-converter.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_culture_converter_service__WEBPACK_IMPORTED_MODULE_2__["CultureConverterService"]])
    ], CultureConverterComponent);
    return CultureConverterComponent;
}());



/***/ }),

/***/ "./src/app/converter/europe-converter.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/converter/europe-converter.service.ts ***!
  \*******************************************************/
/*! exports provided: EuropeConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuropeConverterService", function() { return EuropeConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _converter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converter.service */ "./src/app/converter/converter.service.ts");



var EuropeConverterService = /** @class */ (function () {
    function EuropeConverterService(converterService) {
        this.converterService = converterService;
        this.sourceCulture = "USA";
        this.targetCulture = "Europe";
        this.convertDistance = this.converterService.fromMilesToKilometers;
        this.convertTemperature = this.converterService.fromFarenheitToCelsius;
    }
    EuropeConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_converter_service__WEBPACK_IMPORTED_MODULE_2__["ConverterService"]])
    ], EuropeConverterService);
    return EuropeConverterService;
}());



/***/ }),

/***/ "./src/app/converter/usa-converter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/converter/usa-converter.service.ts ***!
  \****************************************************/
/*! exports provided: UsaConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsaConverterService", function() { return UsaConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _converter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converter.service */ "./src/app/converter/converter.service.ts");



var UsaConverterService = /** @class */ (function () {
    function UsaConverterService(converterService) {
        this.converterService = converterService;
        this.sourceCulture = 'Europe';
        this.targetCulture = 'USA';
        this.convertDistance = this.converterService.fromKilometersToMiles;
        this.convertTemperature = this.converterService.fromCelsiusToFarenheit;
    }
    UsaConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_converter_service__WEBPACK_IMPORTED_MODULE_2__["ConverterService"]])
    ], UsaConverterService);
    return UsaConverterService;
}());



/***/ })

}]);
//# sourceMappingURL=converter-converter-module.js.map