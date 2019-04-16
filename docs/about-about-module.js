(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about/about.component.ts");
/* harmony import */ var _about_links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/links/links.component */ "./src/app/about/about/links/links.component.ts");
/* harmony import */ var _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/info/info.component */ "./src/app/about/about/info/info.component.ts");
/* harmony import */ var _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/authors/author/author.component */ "./src/app/about/about/authors/author/author.component.ts");
/* harmony import */ var _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/authors/authors.component */ "./src/app/about/about/authors/authors.component.ts");








var routes = [
    {
        path: "",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
        children: [
            {
                path: "links",
                component: _about_links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"]
            },
            {
                path: "info",
                component: _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"]
            },
            {
                path: "authors",
                component: _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__["AuthorsComponent"]
            },
            {
                path: "authors/:id",
                component: _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_6__["AuthorComponent"]
            }
        ]
    }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about/about.component.ts");
/* harmony import */ var _about_links_links_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/links/links.component */ "./src/app/about/about/links/links.component.ts");
/* harmony import */ var _about_info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/info/info.component */ "./src/app/about/about/info/info.component.ts");
/* harmony import */ var _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/authors/authors.component */ "./src/app/about/about/authors/authors.component.ts");
/* harmony import */ var _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/authors/author/author.component */ "./src/app/about/about/authors/author/author.component.ts");









var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _about_links_links_component__WEBPACK_IMPORTED_MODULE_5__["LinksComponent"], _about_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"], _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_7__["AuthorsComponent"], _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_8__["AuthorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/about/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"sticky\">\n    <a routerLink=\"links\" class=\"button\"> <span> Tutorial Links</span> </a>\n    <a routerLink=\"info\" class=\"button\"> <span> More Info</span> </a>\n    <a routerLink=\"authors\" class=\"button\"> <span> Authors</span> </a>\n  </header>\n   <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/about/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/about/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about/authors/author/author.component.html":
/*!******************************************************************!*\
  !*** ./src/app/about/about/authors/author/author.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ authorId }}\n</p>\n"

/***/ }),

/***/ "./src/app/about/about/authors/author/author.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/about/about/authors/author/author.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(activateRoute) {
        this.authorId = "";
        this.authorId = activateRoute.snapshot.params["id"];
    }
    AuthorComponent.prototype.ngOnInit = function () { };
    AuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-author",
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/about/about/authors/author/author.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/about/about/authors/authors.component.html":
/*!************************************************************!*\
  !*** ./src/app/about/about/authors/authors.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"albertobasalo\" class=\"button\"> <span> Alberto Basalo</span> </a>\n<a routerLink=\"johndoe\" class=\"button\"> <span> John Doe</span> </a>\n"

/***/ }),

/***/ "./src/app/about/about/authors/authors.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/about/authors/authors.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent() {
    }
    AuthorsComponent.prototype.ngOnInit = function () {
    };
    AuthorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/about/about/authors/authors.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/about/about/info/info.component.html":
/*!******************************************************!*\
  !*** ./src/app/about/about/info/info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  info works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about/info/info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about/about/info/info.component.ts ***!
  \****************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/about/about/info/info.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/about/about/links/links.component.html":
/*!********************************************************!*\
  !*** ./src/app/about/about/links/links.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  links works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about/links/links.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about/about/links/links.component.ts ***!
  \******************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/about/about/links/links.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map